# backend/embed.py
import cohere
import json
from dotenv import load_dotenv
import os

# Cargar la API Key de Cohere
load_dotenv()
co = cohere.Client(os.getenv("COHERE_API_KEY"))

# Leer la información desde un archivo JSON estructurado
with open("info.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Extraer solo los textos para generar embeddings
texts = [entry["text"] for entry in data]

# Generar embeddings con Cohere
response = co.embed(texts=texts, input_type="search_document")
embeddings = response.embeddings

# Agregar los embeddings a cada entrada original
for i, emb in enumerate(embeddings):
    data[i]["embedding"] = emb

# Guardar todo el JSON enriquecido con los embeddings
with open("embeddings.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("✅ Embeddings generados y guardados con metadata.")
