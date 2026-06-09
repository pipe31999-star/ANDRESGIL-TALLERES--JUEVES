import { Router } from "express";
import { listar_productos, registrar_producto, obtener_producto_id, buscar_p_nombre, buscar_p_categoria } from "../controllers/producto.controller.js";

const router = Router();

// Rutas
router.get("/", listar_productos);
router.post("/", registrar_producto);
router.get("/buscar", buscar_p_nombre);
router.get("/categoria/:categoria", buscar_p_categoria);
router.get("/:id", obtener_producto_id);

export default router;
