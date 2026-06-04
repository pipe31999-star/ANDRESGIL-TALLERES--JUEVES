import { Router } from "express";
import {
    listar_estudiantes,
    buscar_estudiante,
    filtrar_aprobados,
    promedio_general,
    listar_nombres,
    filtrar_por_carrera,
    agregar_estudiante
} from "../controllers/estudiante.controller.js";

const router = Router();

// Rutas GET
router.get("/", listar_estudiantes);
router.get("/buscar/:nombre", buscar_estudiante);
router.get("/aprobados", filtrar_aprobados);
router.get("/promedio", promedio_general);
router.get("/nombres", listar_nombres);
router.get("/carrera/:carrera", filtrar_por_carrera);

// Rutas POST
router.post("/agregar", agregar_estudiante);

export default router;
