import { conectaAPI } from "./api.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombreProducto= document.querySelector("[data-nombreProducto]").value;
    const precioProducto = document.querySelector("[data-precioProducto]").value;
    const imagenProducto=document.querySelector("[data-imagenProducto]").value;

    try{
        await conectaAPI.crearProducto(nombreProducto, precioProducto, imagenProducto)
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>crearProducto(evento));