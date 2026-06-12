import { Router } from "express";
import {
    listar_estudiantes,
    registrar_estudiante,
    actualizar_estudiante,
    eliminar_estudiante,
} from "../controllers/estudiantes.controller.js";

const routerEstudiantes = Router();

routerEstudiantes.get("/", listar_estudiantes);
routerEstudiantes.post("/", registrar_estudiante);
routerEstudiantes.put("/:id", actualizar_estudiante);
routerEstudiantes.delete("/:id", eliminar_estudiante);

export default routerEstudiantes;
