# 🧠 API de Chat IA con FastAPI + Cohere

Este proyecto es una API construida con **FastAPI** que permite interactuar con un modelo de lenguaje de Cohere para responder preguntas sobre Gonzalo.

---

## 🚀 Cómo levantar la API

1. **Instalar dependencias**

bash
pip install fastapi uvicorn cohere

2. **Ejecutar el servidor de desarrollo**

uvicorn app:app --reload

## 🔍 ¿Cómo ver los puertos abiertos?
A veces, los procesos quedan activos y ocupan puertos como el 8000. Para verificar qué puertos están siendo usados:

1. **Primero encontrá el PID del proceso que usa el puerto:**

netstat -a -n -o | findstr :8000

2. **Luego terminá el proceso con:**

taskkill /PID <PID> /F <br>

Por ejemplo: <br>

taskkill /PID 12345 /F