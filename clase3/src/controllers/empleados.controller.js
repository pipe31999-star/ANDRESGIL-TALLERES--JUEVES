import { Add_Empleado,Get_Empleado } from "../services/empleados.service.js";

export const addEmpleado = (req,res) =>
{
   const myBody =  req.body;

   Add_Empleado(myBody);

   res.status(200).json({
            mensaje: "Empleado Insertado"
       });

}

export const getEmpleado = (req,res) =>
{
   const empleados = Get_Empleado();
   res.json(empleados);
}