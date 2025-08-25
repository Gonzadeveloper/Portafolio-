from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import cohere
import numpy as np
import json
import os
from dotenv import load_dotenv


# Cargar variables de entorno (para leer COHERE_API_KEY)
load_dotenv()
co = cohere.Client(os.getenv("COHERE_API_KEY"))

# Cargar los embeddings generados
with open("embeddings.json", "r", encoding="utf-8") as f:
    embedded_data = json.load(f)

documents = [item["text"] for item in embedded_data]
embeddings = np.array([item["embedding"] for item in embedded_data])


# App FastAPI
app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "*",  # Permití todo si estás en desarrollo
]

# Middleware de CORS bien configurado
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,         # Aceptar los orígenes
    allow_credentials=True,        # Cookies, Auth headers
    allow_methods=["*"],           # ← Aceptar todos los métodos, incluyendo OPTIONS
    allow_headers=["*"],           # ← Aceptar cualquier header
)

# Esquema de entrada
class AskRequest(BaseModel):
    question: str

@app.get("/models")
async def get_models():
    response = co.models.list()
    return response

@app.post("/ask")
async def ask(request: AskRequest):
    # Embed la pregunta
    query_embed = co.embed(
        texts=[request.question],
        input_type="search_query"
    ).embeddings[0]

    # Calcular similitud (dot product entre embeddings)
    scores = np.dot(embeddings, query_embed)

    # Obtener los índices de los top_k más similares
    top_k = 5  # cantidad de chunks que queremos recuperar
    best_indices = np.argsort(scores)[::-1][:top_k]

    # Mostrar en consola los chunks recuperados
    print("\n🔍 Chunks recuperados para la respuesta:")
    for idx in best_indices:
        print(f"- Score: {scores[idx]:.4f} | Texto: {documents[idx]}\n")

    # Combinar los chunks para dárselos al modelo
    context = "\n".join([documents[idx] for idx in best_indices])

    prompt = f"""
        Sos un asistente de inteligencia artificial especializado únicamente en responder preguntas sobre Gonzalo.

        🎯 Tu rol es actuar como un asistente que habla sobre Gonzalo, no como si fueras él.
        🗣️ Siempre respondé en tercera persona, usando expresiones como: "Gonzalo sabe...", "Gonzalo trabajó en...", "Él tiene experiencia en...", etc.
        🙅‍♂️ Nunca uses frases en primera persona como "yo", "mi experiencia", "sé", "me especializo", etc.

        📌 Solo podés usar la siguiente información para responder.  
        ❌ No inventes ni agregues contenido fuera del contexto.  
        ❓ Si no tenés la información, respondé: "No tengo información sobre eso de Gonzalo."

        Información:
        {context}

        Pregunta: {request.question}
    """

    # Llamar a generate con ese contexto
    response = co.generate(
        model="command-r-08-2024",
        prompt=prompt,
        max_tokens=200
    )

    return {"answer": response.generations[0].text.strip()}

