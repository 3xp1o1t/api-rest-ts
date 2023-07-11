# API Rest con Typescript y Cors

## Table of Contents

- [API Rest con Typescript y Cors](#api-rest-con-typescript-y-cors)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Prerequisites ](#prerequisites-)

## About <a name = "about"></a>

Api rest con ts y cors para proteger el acceso a la misma

## Getting Started <a name = "getting_started"></a>

Instalar los paquetes para uso propio.

```
  npm install
		express
		cors    
		dotenv
		multer  
		mongoose
```
Configurar el package.json

Remover en la seccion scripts el apartado test y agregar dev.
```
  "dev": "nodemon ./src/app.ts
```
Renombrar el archivo .env.example a .env (configurarlo con tus opciones.)

### Prerequisites <a name = "prerequisites"></a>


```
  # Inicializar el proyecto de TS en caso de no tenerlo globalmente instalado.
   npx -p typescript tsc --init
  
  # Instalar los types de los paquetes (dev dependency)
   npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
  
  # Inicializar el proyecto
   npm init -y
```
