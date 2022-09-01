const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const imagenEspera = document.getElementById("imagenEspera");
const mensajeEncptadoContenedor = document.getElementById("mensajeEncptadoContenedor");


//cambiar la vocal "a" por tys
//cambiar la vocal "e" por "enter"
//cambiar la vocal "i" por "imes"
//cambiar la vocal "o" por "ober"
//cambiar la vocal "u" por "ufat"

function encriptar(stringEncriptar){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //creacion de variable stringEncriptada
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //creacion de variable stringDesencriptada
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][0])){
            stringDesencriptar = stringDesencriptar.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    };
    return stringDesencriptar
};

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    if(textoEncriptado !== ''){
        mensaje.value = textoEncriptado;
        inputTexto.value = "";
        imagenEspera.style.display = "none";
        mensajeEncptadoContenedor.style.display = "block";
    }
  
};

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    if(textoDesencriptado !== ''){
        mensaje.value = textoDesencriptado;
        inputTexto.value = "";
        imagenEspera.style.display = "none";
        mensajeEncptadoContenedor.style.display = "block";
    }
};

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
}

