# ABBI Veterinaria - Proyecto Fullstack

Este proyecto consiste en una solución fullstack para la gestión de mascotas.  
Incluye un **backend en ExpressJS** y un **frontend en Angular**.

---

## Tecnologías utilizadas

- **Backend:** Node.js, ExpressJS
- **Frontend:** Angular 16
- **Base de datos:** Archivo local `pets.json`

---

## Instalación y ejecución

Sigue los pasos detallados a continuación para levantar el proyecto correctamente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/enzoRam1rez/abbi-veterinaria-full.git
cd abbi-veterinaria-full
```
### 2. Instalar dependencias y levantar el servidor backend
```bash
npm install
node server.js
```
### 3. Acceder al frontend (Angular)
```bash
cd abbi-veterinaria
```
### 4. Instalar dependencias y levantar el servidor de desarrollo Angular
```bash
npm install
ng serve
```
### 5. Acceder a la aplicación

- **Backend:**  
  La API REST estará disponible en `http://localhost:3000`.

- **Frontend:**  
  La interfaz Angular estará corriendo en `http://localhost:4200`.


### Notas importantes

- Asegúrate de tener **Node.js** y **npm** instalados en tu sistema.
- El archivo `pets.json` se utiliza como base de datos para almacenar las mascotas. Se encuentra en la raíz del proyecto (`/pets.json`).
- Si se modifica el archivo `pets.json` manualmente, asegúrate de mantener la estructura JSON válida.
- El backend debe estar corriendo **antes** de iniciar el frontend para asegurar la conexión adecuada con la API.
- Para detener los servidores puedes usar `Ctrl + C` en la terminal donde están corriendo.

---

### Estructura del proyecto

```plaintext
abbi-veterinaria-full/
├── abbi-veterinaria/            # Aplicación frontend desarrollada en Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/      # Componentes visuales 
│   │   │   └── services/        # Servicios para consumir la API REST
│   │   ├── index.html           # HTML principal que carga la app Angular en el navegador
│   │   └── main.ts              # Inicializa la app Angular y enlaza el módulo principal
│   ├── angular.json            
│   └── package.json             
│
├── controllers/                 # Controladores para manejar las rutas de la API
│   └── petsController.js        # Lógica principal para gestionar recursos de mascotas
├── pets.json                    # Archivo local que actúa como base de datos (JSON plano)
├── server.js                    # Servidor backend con ExpressJS y rutas configuradas
├── package.json                 
└── .gitignore      
```            






