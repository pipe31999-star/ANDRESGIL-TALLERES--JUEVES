import express from "express";
import routerEstudiantes from "./routes/estudiantes.routes.js";

const app = express();

app.use(express.json());


const PORT = 3000;


app.use("/api/estudiantes", routerEstudiantes);



app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`);

});