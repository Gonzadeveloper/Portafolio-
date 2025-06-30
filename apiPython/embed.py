# backend/embed.py
import cohere, json
from dotenv import load_dotenv
import os

load_dotenv()
co = cohere.Client(os.getenv("COHERE_API_KEY"))

with open("info.txt", "r", encoding="utf-8") as f:
    paragraphs = [p.strip() for p in f.read().split("\n\n") if p.strip()]

response = co.embed(texts=paragraphs, input_type="search_document")
embeddings = response.embeddings


data = [{"text": text, "embedding": emb} for text, emb in zip(paragraphs, embeddings)]

with open("embeddings.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("✅ Embeddings generados y guardados.")
