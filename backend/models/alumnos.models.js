import { Schema, model } from "mongoose";

const EsquemaAlumnos = new Schema({
    nombre: String,
    calificacion: Number,
    Materia: String
}); //Esqueleto o campos de una tabla

export const TablaAlumnos = new model("Tabla de alumnos reprobados", EsquemaAlumnos); //Creacion de tabla en BD
