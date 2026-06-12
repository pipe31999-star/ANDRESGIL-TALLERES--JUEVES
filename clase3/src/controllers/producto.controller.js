import { Get_Productos, Registrar_Producto, Buscar_Productos_id, Buscar_Por_Nombre, Buscar_Por_Categoria } from "../services/productos.service.js";

// GET /productos
export const listar_productos = (req,res) => {
    const consulta = Get_Productos();
    res.json(consulta);
}

// POST /productos
export const registrar_producto = (req, res) => {
    const { nombre, precio, stock, categoria, marca } = req.body;

    // Validaciones
    if (
        !nombre ||
        precio == null ||
        precio <= 0 ||
        stock == null ||
        stock < 0 ||
        !categoria ||
        !marca
    ) {
        return res.status(400).json({
            mensaje: "Datos inválidos"
        });
    }

    const nuevo = Registrar_Producto({ nombre, precio, stock, categoria, marca });
    res.status(201).json(nuevo);
}

// GET /productos/:id
export const obtener_producto_id = (req, res) => {
    const { id } = req.params;
    const producto = Buscar_Productos_id(id);

    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
}

// GET /productos/buscar?nombre=...
export const buscar_p_nombre = (req, res) => {
    const { nombre } = req.query;

    if (!nombre) {
        return res.status(400).json({ mensaje: "Falta el parámetro nombre" });
    }

    const resultados = Buscar_Por_Nombre(nombre);
    res.json(resultados);
}

// GET /productos/categoria/:categoria
export const buscar_p_categoria = (req, res) => {
    const { categoria } = req.params;
    const resultados = Buscar_Por_Categoria(categoria);
    res.json(resultados);
}

