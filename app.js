import mongoose from 'mongoose'; //Libreria para conectarse con mongo DB//
import dotenv from 'dotenv'; // Libreria para poder llamar mi archivo .env//
import express from 'express'; // Libreria para crear el servidor//
import cors from 'cors'; // Libreria para seguridad en el server //
import { test } from './backend/controllers/alumnos.controller.js'; // Importar el controlador de alumnos //

dotenv.config(); // Cargar las variables de entorno del archivo .env//
mongoose.connect(process.env.url_bd)
.then(() => console.log("Funciono la base de datos"))
.catch((error) => console.log("Error al conectar con la base de datos: " + error));

//Creando un servidor local//
const app = express();
app.use(cors());

app.listen(4000, () => console.log("Funciona el servidor"));

test(); // Llamar a la función de prueba del controlador de alumnos //