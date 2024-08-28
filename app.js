// Funcion para encriptar el texto

function clickEncriptar() {
    let textoOriginal = document.querySelector(".txtInput").value.toLowerCase();

    let textoEncriptado = "";

    // Recorrer cada letra del texto original
    for (let letra of textoOriginal) {
        if (letra === "a") {
            textoEncriptado += "tnw";
        } else if (letra === "e") {
            textoEncriptado += "kfr";
        } else if (letra === "i") {
            textoEncriptado += "mdg";
        } else if (letra === "o") {
            textoEncriptado += "jrx";
        } else if (letra === "u") {
            textoEncriptado += "lzh";
        } else {
            textoEncriptado += letra; // Si no es vocal, agregar la letra tal cual
        }
    }

    // Mostrar el texto encriptado
    incrustarTextoParaMostrar(textoEncriptado);
}


// Funcion para desencriptar el texto
function clickDesencriptar() {
    let textoEncriptado = document.querySelector(".txtInput").value.toLowerCase(); // Obtener el texto del area de texto y convertirlo a minusculas

    // Reemplazar las cadenas encriptadas por las vocales originales
    textoEncriptado = textoEncriptado.replace(/tnw/g, "a");
    textoEncriptado = textoEncriptado.replace(/kfr/g, "e");
    textoEncriptado = textoEncriptado.replace(/mdg/g, "i");
    textoEncriptado = textoEncriptado.replace(/jrx/g, "o");
    textoEncriptado = textoEncriptado.replace(/lzh/g, "u");

    incrustarTextoParaMostrar(textoEncriptado); // Mostrar el texto desencriptado
}

// Funcion para ocultar la imagen y mostrar los datos en pantalla
function ocultarSeccionImagen() {
    const elementos = [
        ".main_mostrar_datos_imagen",
        ".main_mostrar_datos_titulo",
        ".main_intro_datos_parrafo"
    ];

    elementos.forEach(selector => {
        const elemento = document.querySelector(selector);
        if (elemento) {
            elemento.style.display = "none";
            elemento.remove();
        }
    });
}

// Funcion para mostrar texto en pantalla
function incrustarTextoParaMostrar(texto) {
    // Ocultar y eliminar elementos previos
    ocultarSeccionImagen();

    // Obtener el contenedor donde se mostrara el texto y el boton
    let contenedorTexto = document.querySelector(".main_intro_datos_container_texto");

    // Crear el parrafo y el boton si no existen
    let parrafo = contenedorTexto.querySelector("p");
    let boton = contenedorTexto.querySelector("button");

    if (!parrafo) {
        parrafo = document.createElement("p");  // Crear un nuevo parrafo
        contenedorTexto.appendChild(parrafo);   // Agregar el parrafo al contenedor
    }

    if (!boton) {
        boton = document.createElement("button"); // Crear un nuevo boton
        boton.textContent = "Copiar";             // Establecer el texto del boton
        contenedorTexto.appendChild(boton);       // Agregar el boton al contenedor
    }

    // Actualizar el texto del parrafo
    parrafo.textContent = texto;

    // Aplicar estilos (asumiendo que la funcion existe)
    darEstiloEtiquetasCreadas(parrafo, boton, document.querySelector(".main_mostrar_datos"), contenedorTexto);
}

document.addEventListener('DOMContentLoaded', function () {
    // Ajustar la altura del textarea según su contenido
    const textarea = document.getElementById('multiline-input');

    textarea.addEventListener('input', function () {
        textarea.style.height = 'auto';                   // Reiniciar la altura
        textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura
    });

    // Ajustar la altura inicial cuando la pagina se carga
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
});

//funcion dar estilo a las etiquetas creadas
function darEstiloEtiquetasCreadas(parrafo, boton, contenedorGeneral, contenedorTexto ){
    boton.style = 
    "width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
    "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;";
    boton.setAttribute("onclick","copiarTexto(this)");

    contenedorGeneral.style="display : block " ;

    contenedorTexto.style = "margin: 0 ; padding : 11% ; height : 100% ;justify-content:space-between";

    parrafo.style ="font-size: 2rem ; width: 100%  ; overflow: auto;  word-wrap: break-word; ";
    parrafo.setAttribute("class","texto-para-copiar")
}

//funcion para copiar el texto 
function copiarTexto(boton){

    const textToCopy = document.querySelector('.texto-para-copiar').innerHTML;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
               boton.innerHTML="Copiado";
               boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                                "border-radius: 24px ; color: #0A3871 ; background-color: #8ff799;";
               setTimeout(() => {
                   boton.innerHTML = "Copiar";
                   boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                                "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;"
               }, 2000); 
           })
        .catch(err => {
            // Muestra un mensaje de error
            console.error('Error al copiar el texto: ', err);
            alert('Error al copiar el texto');
        });
}
