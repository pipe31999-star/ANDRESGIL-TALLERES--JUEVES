import { bd_carrito } from "../data/carrito.data.js";

let mitbl = bd_carrito[0].empleados;


export const Add_Empleado = (params) => {
    mitbl.push(params);
}

export const Get_Empleado = () => {
    return mitbl;
}