import {
    Get_Estudiantes,
    Agregar_Estudiante,
    Buscar_Estudiante,
    Filtrar_Aprobados,
    Calcular_Promedio_General,
    Obtener_Nombres,
    Filtrar_por_Carrera
} from "../services/estudiantes.service.js";

// GET - Listar todos los estudiantes
export const listar_estudiantes = (req, res) => {
    const consulta = Get_Estudiantes();
    res.json({
        mensaje: "Lista de estudiantes",
        data: consulta
    });
};

// GET - Buscar estudiante por nombre
export const buscar_estudiante = (req, res) => {
    const { nombre } = req.params;

    if (nombre && nombre !== "") {
        const consulta = Buscar_Estudiante(nombre);

        if (consulta) {
            res.status(200).json({
                mensaje: "Estudiante encontrado",
                data: consulta
            });
        } else {
            res.status(404).json({
                mensaje: "Estudiante no encontrado"
            });
        }
    } else {
        res.status(400).json({
            mensaje: "Parámetros incorrectos"
        });
    }
};

// GET - Filtrar estudiantes aprobados
export const filtrar_aprobados = (req, res) => {
    const consulta = Filtrar_Aprobados();
    res.json({
        mensaje: "Estudiantes aprobados (nota >= 3.0)",
        data: consulta
    });
};

// GET - Calcular promedio general
export const promedio_general = (req, res) => {
    const promedio = Calcular_Promedio_General();
    res.json({
        mensaje: "Promedio general de notas",
        data: {
            promedio: promedio,
            total_estudiantes: Get_Estudiantes().length
        }
    });
};

// GET - Obtener solo los nombres
export const listar_nombres = (req, res) => {
    const nombres = Obtener_Nombres();
    res.json({
        mensaje: "Nombres de estudiantes",
        data: nombres
    });
};

// GET - Filtrar por carrera
export const filtrar_por_carrera = (req, res) => {
    const { carrera } = req.params;

    if (carrera && carrera !== "") {
        const consulta = Filtrar_por_Carrera(carrera);
        res.json({
            mensaje: `Estudiantes de ${carrera}`,
            data: consulta
        });
    } else {
        res.status(400).json({
            mensaje: "Parámetros incorrectos"
        });
    }
};

// POST - Agregar un nuevo estudiante
export const agregar_estudiante = (req, res) => {
    const { nombre, edad, nota, carrera } = req.body;

    if (nombre && edad && nota !== undefined && carrera) {
        const nuevo = Agregar_Estudiante(nombre, edad, nota, carrera);
        res.status(201).json({
            mensaje: "Estudiante agregado exitosamente",
            data: nuevo
        });
    } else {
        res.status(400).json({
            mensaje: "Todos los campos son obligatorios: nombre, edad, nota, carrera"
        });
    }
};
