
/// encriptar el texto

function clickEncriptar (){

    let txtInput = document.querySelector(".txtInput").value.toLowerCase();
    console.log(txtInput);

    let newTextInput ="";
    for (const char of txtInput) {
        switch(char){
            case "a":
                newTextInput += "ai";
                break;
            case "e":
                newTextInput += "enter";
                break;
            case "i":
                newTextInput += "imes";
                break;
            case "o":
                newTextInput += "ober";
                break;
            case "u":
                newTextInput += "ufat";
                break;
            default:
                newTextInput += char;
                break;
        }   
    }
    console.log(newTextInput);

    incrustarTextoParaMostrar(newTextInput);

}   


/// desencriptar el texto

function clickDesencriptar (){
    let textoEncriptado = document.querySelector(".txtInput").value.toLowerCase();


    let palabrasAReemplazar  = ["ai","enter","imes","ober","ufat"];
    let nuevasPalabras  = ["a","e","i","o","u"];

 
     for (let index = 0; index < palabrasAReemplazar.length; index++) {
        console.log("antes--->" + textoEncriptado);
         textoEncriptado = textoEncriptado.split(palabrasAReemplazar[index]);
         console.log("despues del split --->" + textoEncriptado);

         textoEncriptado = textoEncriptado.join(nuevasPalabras[index]);
         console.log("despues del join --->" + textoEncriptado);
     }

    incrustarTextoParaMostrar(textoEncriptado);




}

/// organizar el codigo 


function ocultarSeccionImagen (){
    let imagenOcultar = document.querySelector(".main_mostrar_datos_imagen");
    if(imagenOcultar){
        imagenOcultar.style.display = "none";
        imagenOcultar.remove();
    }
 
    let tituloOcultar = document.querySelector(".main_mostrar_datos_titulo");
    if(tituloOcultar){
        tituloOcultar.style.display= "none";
        tituloOcultar.remove();
    }
 
    let parrafoOcultar = document.querySelector(".main_intro_datos_parrafo");
    if(parrafoOcultar){
        parrafoOcultar.style.display= "none";
        parrafoOcultar.remove();
    }
}



function incrustarTextoParaMostrar(texto){

    ocultarSeccionImagen ();

    let contenedorTextoParaMostrar = document.querySelector(".main_intro_datos_container_texto");
    let contenedorMostrarDatos = document.querySelector(".main_mostrar_datos");

    let parrafoTextoParaMostrar ;
    let botonCopiarParaMostrar ; 

    if(!parrafoTextoParaMostrar && !botonCopiarParaMostrar ){
        parrafoTextoParaMostrar = document.createElement("p");
        botonCopiarParaMostrar  = document.createElement("button");
    }
    
    if(!contenedorTextoParaMostrar.contains(document.querySelector("p")) 
        && !contenedorTextoParaMostrar.contains(document.querySelector("button"))){
        contenedorTextoParaMostrar.append(parrafoTextoParaMostrar);
        contenedorTextoParaMostrar.append(botonCopiarParaMostrar);
        
         parrafoTextoParaMostrar.innerHTML = texto;
         botonCopiarParaMostrar.innerHTML = "Copiar";
    }else{
        document.querySelector("p").innerHTML=texto;
    }



    darEstiloEtiquetasCreadas(parrafoTextoParaMostrar, botonCopiarParaMostrar, contenedorMostrarDatos, contenedorTextoParaMostrar );
   
}

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('multiline-input');

    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
});


/// estilos de etiqueta

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


///  split y join

function replaceWords(str, wordsToReplace, newWords) {
    if (wordsToReplace.length !== newWords.length) {
        throw new Error("Los arrays wordsToReplace y newWords deben tener la misma longitud");
    }

    for (let i = 0; i < wordsToReplace.length; i++) {
        str = str.split(wordsToReplace[i]).join(newWords[i]);
    }

    return str;
}

/// regex y replace

function reemplazoRegex(str, wordsToReplace, newWords, mapaDeReemplazo){
    for (let i = 0; i < palabrasAReemplazar.length; i++) {
        mapaDeReemplazo[palabrasAReemplazar[i]] = nuevasPalabras[i];
        console.log(mapaDeReemplazo[palabrasAReemplazar[i]] = nuevasPalabras[i]);
        

    }
    let regex = new RegExp(palabrasAReemplazar.join('|'), 'g');
    let newStr = textoEncriptado.replace(regex, (matched) => mapaDeReemplazo[matched]);

    return newStr;
}