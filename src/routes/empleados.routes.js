import { Router } from "express";
import { addEmpleado, getEmpleado } from "../controllers/empleados.controller.js";

const routerEmpleados = Router();

routerEmpleados.post("/add" , addEmpleado);

routerEmpleados.get("/" , getEmpleado);

export default routerEmpleados;