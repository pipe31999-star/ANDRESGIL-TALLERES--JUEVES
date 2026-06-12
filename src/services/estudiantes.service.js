import { bd_estudiantes } from "../data/estudiantes.data.js";

let estudiantes = [...bd_estudiantes];
let nextId = estudiantes.length + 1;

// Obtener todos los estudiantes
export const Get_Estudiantes = () => {
    return estudiantes;
};

// Agregar un nuevo estudiante (usando push con objetos)
export const Agregar_Estudiante = (p_nombre, p_edad, p_nota, p_carrera) => {
    const nuevoEstudiante = {
        id: nextId++,
        nombre: p_nombre,
        edad: p_edad,
        nota: p_nota,
        carrera: p_carrera
    };
    estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante;
};

// Buscar estudiante por nombre (usando find)
export const Buscar_Estudiante = (p_nombre) => {
    return estudiantes.find(
        x => x.nombre.toUpperCase() === p_nombre.toUpperCase()
    );
};

// Buscar estudiante por ID (usando find)
export const Buscar_Estudiante_Id = (p_id) => {
    return estudiantes.find(x => x.id === p_id);
};

// Filtrar estudiantes aprobados (nota >= 3.0) usando filter
export const Filtrar_Aprobados = () => {
    return estudiantes.filter(x => x.nota >= 3.0);
};

// Filtrar estudiantes por carrera usando filter
export const Filtrar_por_Carrera = (p_carrera) => {
    return estudiantes.filter(
        x => x.carrera.toUpperCase() === p_carrera.toUpperCase()
    );
};

// Calcular promedio general de notas usando reduce
export const Calcular_Promedio_General = () => {
    if (estudiantes.length === 0) return 0;
    const sumaNotas = estudiantes.reduce((acumulador, estudiante) => {
        return acumulador + estudiante.nota;
    }, 0);
    return +(sumaNotas / estudiantes.length).toFixed(2);
};

// Obtener lista de nombres de estudiantes usando map
export const Obtener_Nombres = () => {
    return estudiantes.map(x => x.nombre);
};
