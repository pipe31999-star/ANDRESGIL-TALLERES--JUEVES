import express from "express";
import router from "./routes/productos.routes.js";
import routerEmpleados from "./routes/empleados.routes.js";
import routerEstudiantes from "./routes/estudiantes.routes.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Servidor activo");
    next();
});

const requestLogs = [];

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    requestLogs.push({ method: req.method, url: req.url, timestamp: new Date().toISOString() });
    next();
});

const validateUsuario = (req, res, next) => {
    const { nombre, correo } = req.body || {};
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({ error: "El campo nombre es obligatorio" });
    }
    if (!correo || typeof correo !== "string" || correo.trim() === "") {
        return res.status(400).json({ error: "El campo correo es obligatorio" });
    }
    next();
};

const validateEdad = (req, res, next) => {
    const { edad } = req.body || {};
    if (typeof edad !== "number" || Number.isNaN(edad)) {
        return res.status(400).json({ error: "El campo edad debe ser un número" });
    }
    if (edad < 18) {
        return res.status(400).json({ error: "Edad mínima 18 años" });
    }
    next();
};

const validateNombre = (req, res, next) => {
    const { nombre } = req.body || {};
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        return res.status(400).json({ error: "El campo nombre es obligatorio" });
    }
    next();
};

const validatePrecio = (req, res, next) => {
    const { precio } = req.body || {};
    if (typeof precio !== "number" || Number.isNaN(precio)) {
        return res.status(400).json({ error: "El campo precio es obligatorio y debe ser un número" });
    }
    if (precio <= 0) {
        return res.status(400).json({ error: "El precio debe ser mayor que cero" });
    }
    next();
};

const validateStock = (req, res, next) => {
    const { stock } = req.body || {};
    if (typeof stock !== "number" || Number.isNaN(stock)) {
        return res.status(400).json({ error: "El campo stock es obligatorio y debe ser un número" });
    }
    if (stock < 0) {
        return res.status(400).json({ error: "El stock debe ser mayor o igual a cero" });
    }
    next();
};

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Ruta principal OK");
});

app.post("/usuarios", validateUsuario, (req, res) => {
    res.json({ mensaje: `Usuario ${req.body.nombre} recibido`, correo: req.body.correo });
});

app.post("/edad", validateEdad, (req, res) => {
    res.json({ mensaje: `Edad válida: ${req.body.edad}` });
});

app.post("/productos", validateNombre, validatePrecio, validateStock, (req, res) => {
    res.json({ mensaje: "Producto creado", producto: req.body });
});

app.get("/logs", (req, res) => {
    res.json(requestLogs);
});

app.use("/productos", router);
app.use("/api/empleados", routerEmpleados);
app.use("/estudiantes", routerEstudiantes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});