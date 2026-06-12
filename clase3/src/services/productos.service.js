import { bd_carrito } from "../data/carrito.data.js";


let mitbl = bd_carrito[0].productos;

export const Get_Productos = () => {
    return mitbl;
}

export const Registrar_Producto = (nuevo_producto) => {
    // Generar un nuevo ID incremental
    const nuevo_id = mitbl.length > 0 ? Math.max(...mitbl.map(p => p.id)) + 1 : 1;
    const producto_con_id = { id: nuevo_id, ...nuevo_producto };
    mitbl.push(producto_con_id);
    return producto_con_id;
}

export const Buscar_Productos_id = (p_id) => {
    return mitbl.find(x => x.id == p_id);
}

export const Buscar_Por_Nombre = (p_nombre) => {
    return mitbl.filter(x => x.nombre.toLowerCase().includes(p_nombre.toLowerCase()));
}

export const Buscar_Por_Categoria = (p_categoria) => {
    return mitbl.filter(x => x.categoria.toLowerCase() === p_categoria.toLowerCase());
}

export const Filtrar_Productos = (p_precio, p_condicion1) => {
    if(p_condicion1 == 'Mayor')
        return mitbl.filter(x => x.precio > p_precio);
    else
        return mitbl.filter(x => x.precio < p_precio);
}

export const Calcular_Total_Carrito = (lProductos) => {
    let total = 0;
    for(const item of lProductos)
    {
        const prod = Buscar_Productos_id(item.id);
        if(prod) {
            total += (prod.precio * item.cantidad);
        }
    }
    return total;
}