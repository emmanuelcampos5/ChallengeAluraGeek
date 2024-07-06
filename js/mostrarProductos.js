import { conectaAPI } from "./api.js";

const lista = document.querySelector("[data-lista]");

export default function construyeCard(id, nombreProducto, precioProducto, imagenProducto) {
    const producto = document.createElement("div");
    producto.className = "card mb-4";

    producto.innerHTML = `<img class="card-img-top mt-3" src="${imagenProducto}" alt="..."></img>
                            <div class="card-body d-flex flex-column">
                                <div class="card-text-container">
                                    <p class="card-text">${nombreProducto}</p>
                                </div>
                                <div class="divPrecio mt-auto d-flex justify-content-between align-items-end">
                                    <p class="card-text mb-0 align-self-end">${precioProducto}</p>
                                    <button class="botonEliminar align-self-end" onclick="eliminarProducto('${id}')"></button>
                                </div>
                            </div>`
    return producto;
}

async function eliminarProducto(id) {
    try {
        await conectaAPI.eliminarProducto(id);
    } catch (error) {
        alert("No fue posible eliminar el producto");
    }
}

window.eliminarProducto = eliminarProducto;

async function listaProductos() {
    try {
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.id, element.nombreProducto, element.precioProducto, element.imagenProducto)));
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

function limpiarForm(){
    document.querySelector("[data-nombreProducto]").value = "";
    document.querySelector("[data-precioProducto]").value = "";
    document.querySelector("[data-imagenProducto]").value = "";
}

window.limpiarForm = limpiarForm;

listaProductos();