import express from "express";
import router from "./routes/productos.routes.js";
import routerEmpleados from "./routes/empleados.routes.js";

const app = express();

app.use(express.json());


const PORT = 3000;


app.use("/productos" , router);

app.use("/api/empleados" , routerEmpleados);



app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});