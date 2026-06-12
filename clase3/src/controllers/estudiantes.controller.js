import {
    Get_Estudiantes,
    Get_Estudiante_Id,
    Registrar_Estudiante,
    Actualizar_Estudiante,
    Eliminar_Estudiante,
} from "../services/estudiantes.service.js";

export const listar_estudiantes = (req, res) => {
    const estudiantes = Get_Estudiantes();
    res.json(estudiantes);
};

export const registrar_estudiante = (req, res) => {
    const { nombre, edad, curso } = req.body || {};
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({ error: "El campo nombre es obligatorio" });
    }
    if (typeof edad !== "number" || Number.isNaN(edad)) {
        return res.status(400).json({ error: "El campo edad es obligatorio y debe ser un número" });
    }
    if (!curso || typeof curso !== "string" || curso.trim() === "") {
        return res.status(400).json({ error: "El campo curso es obligatorio" });
    }
    const nuevoEstudiante = Registrar_Estudiante({ nombre, edad, curso });
    res.status(201).json(nuevoEstudiante);
};

export const actualizar_estudiante = (req, res) => {
    const { id } = req.params;
    const { nombre, edad, curso } = req.body || {};
    const datos = {};
    if (nombre !== undefined) {
        if (typeof nombre !== "string" || nombre.trim() === "") {
            return res.status(400).json({ error: "El campo nombre debe ser un texto válido" });
        }
        datos.nombre = nombre;
    }
    if (edad !== undefined) {
        if (typeof edad !== "number" || Number.isNaN(edad)) {
            return res.status(400).json({ error: "El campo edad debe ser un número" });
        }
        datos.edad = edad;
    }
    if (curso !== undefined) {
        if (typeof curso !== "string" || curso.trim() === "") {
            return res.status(400).json({ error: "El campo curso debe ser un texto válido" });
        }
        datos.curso = curso;
    }
    const estudianteActualizado = Actualizar_Estudiante(id, datos);
    if (!estudianteActualizado) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.json(estudianteActualizado);
};

export const eliminar_estudiante = (req, res) => {
    const { id } = req.params;
    const eliminado = Eliminar_Estudiante(id);
    if (!eliminado) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
    }
    res.json({ mensaje: "Estudiante eliminado" });
};
