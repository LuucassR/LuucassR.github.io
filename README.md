# LuucassR.portfolio.github.io
Portafolio de Proyectos de Lucas Rossi
# ⭐ Proyecto de Portafolio — *Título atractivo aquí*  
¡Tu breve tagline o lema! 🚀

![Tecnología](https://img.shields.io/badge/Stack-Python%20%7C%20HTML%20%7C%20CSS-blue?style=flat&logo=python)
![Estado](https://img.shields.io/badge/Estado-WIP-yellow?style=flat)

---

## Índice
1. [Descripción](#descripción)  
2. [Demostración / Uso](#demostración--uso)  
3. [Tecnologías](#tecnologías)  
4. [Instalación y ejecución](#instalación-y-ejecución)  
5. [Estructura de carpetas](#estructura-de-carpetas)  
6. [Cómo contribuir](#cómo-contribuir)  
8. [Contacto / Autor](#contacto--autor)

---

## Descripción
**Breve resumen (1–3 párrafos):**  
Este proyecto es un ejemplo de portafolio que demuestra habilidades en *Python, SQL y desarrollo web (HTML/CSS/JavaScript)*. Incluye una aplicación backend ligera con persistencia en SQLite, pequeños scripts de automatización, y componentes frontend sencillos para mostrar resultados. Está pensado para demostrar competencias técnicas y buenas prácticas de organización de código para roles junior en desarrollo web/backend.

**Problema que resuelve / propósito:**  
Permite a reclutadores y colaboradores evaluar tu capacidad para armar proyectos completos, desde lógica y almacenamiento hasta interfaz básica, todo documentado y reproducible localmente.

---

## Demostración / Uso
**Demo rápida:**  
1. Clona el repositorio.  
2. Instala dependencias.  
3. Ejecuta la app y abre `http://localhost:5000` (o el puerto que uses).

---

## Tecnologías utilizadas
- ![Python](https://img.shields.io/badge/Python-3.10-blue?style=flat&logo=python) `Python`  
- ![SQLite](https://img.shields.io/badge/SQLite-3.36-lightgrey?style=flat&logo=sqlite) `SQLite`  
- ![HTML5](https://img.shields.io/badge/HTML5-%3E5-orange?style=flat&logo=html5) `HTML`  
- ![CSS3](https://img.shields.io/badge/CSS3-%3E3-blue?style=flat&logo=css3) `CSS`  
- ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat&logo=javascript) `JavaScript`    
- ![GitHub](https://img.shields.io/badge/GitHub-repo-black?style=flat&logo=github) `Git / GitHub`  

> Ajusta los badges a las versiones concretas que uses.

---

## Instalación y ejecución

**Requisitos previos**
- Python 3.8+  
- Git

**Pasos (ejemplo con virtualenv + Flask):**
```bash
# clonar repo
git clone https://github.com/LuucassR/LuucassR.portfolio.github.io.git
cd LuucassR.portfolio.github.io

# crear entorno virtual (Linux/Mac)
python3 -m venv venv
source venv/bin/activate

# o en Windows (PowerShell)
python -m venv venv
.\venv\Scripts\Activate.ps1

# instalar dependencias
pip install -r requirements.txt

# ejecutar la aplicación
export FLASK_APP=app.py        # o set FLASK_APP=app.py en Windows
flask run
# abrir en el navegador: http://127.0.0.1:5000
