async function listaProductos() {
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function crearProducto(nombreProducto, precioProducto, imagenProducto) {
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nombreProducto: nombreProducto,
            precioProducto: `$${precioProducto}`,
            imagenProducto: imagenProducto
        })
    })
    if (!conexion.ok) {
        throw new Error("No fue posible crear el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    });

    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el producto");
    }
    return true;
}

export const conectaAPI = {
    listaProductos, crearProducto, eliminarProducto
}