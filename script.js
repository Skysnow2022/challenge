const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
    // la lentra "e" es convertida para "enter"
    // la letra "i" es convertida para "imes"
    // la letra "a" es covertida para "ai"
    // la letra "o" es convertida para "ober"
    // la letra "u" es convertida para "ufat"
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}
//Obtenemos el botón de copiar y le agregamos el listener
const btnCopiar = document.querySelector('.btn-copiar');
btnCopiar.addEventListener('click', copiarTextoAlPortapapeles);

//Función para copiar el texto al portapapeles
function copiarTextoAlPortapapeles() {
  //Obtenemos el texto del campo de texto
  const mensaje = document.querySelector('.mensaje');
  const texto = mensaje.value;

  //Copiamos el texto al portapapeles
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch((error) => {
      console.error('Error al copiar el texto: ', error);
    });
}