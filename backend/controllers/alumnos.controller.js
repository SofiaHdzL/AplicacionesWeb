import {TablaAlumnos} from "../models/alumnos.models.js";

TablaAlumnos.create({
    nombre: "Panfilo",
    calificacion: 5,
    Materia: "Matematicas"
});

export const test =  ()=> console.log("Si se esta llamando al controlador correcto")
