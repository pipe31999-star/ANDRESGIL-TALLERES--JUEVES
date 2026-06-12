import { bd_estudiantes } from "../data/estudiantes.data.js";

let estudiantes = bd_estudiantes;

export const Get_Estudiantes = () => {
    return estudiantes;
};

export const Get_Estudiante_Id = (id) => {
    return estudiantes.find((e) => e.id == id);
};

export const Registrar_Estudiante = (estudiante) => {
    const nuevoId = estudiantes.length > 0 ? Math.max(...estudiantes.map((e) => e.id)) + 1 : 1;
    const nuevoEstudiante = { id: nuevoId, ...estudiante };
    estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante;
};

export const Actualizar_Estudiante = (id, datos) => {
    const index = estudiantes.findIndex((e) => e.id == id);
    if (index === -1) return null;
    estudiantes[index] = { ...estudiantes[index], ...datos, id: Number(id) };
    return estudiantes[index];
};

export const Eliminar_Estudiante = (id) => {
    const index = estudiantes.findIndex((e) => e.id == id);
    if (index === -1) return false;
    estudiantes.splice(index, 1);
    return true;
};
