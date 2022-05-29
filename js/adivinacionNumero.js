let numIncognito = Math.round(Math.random() * 10);
let numIngresado = parseInt(prompt("Adiviná el número que pensó la computadora"));
let pista = numIngresado + numIncognito;

if (numIngresado == numIncognito) {
    document.write("<br>Felicitaciones, el número era " + numIncognito)
}
else {
        var segundoIntentoVar = prompt(`número no acertado; te dejamos una pista \n resuelve el siguiente ejercicio matemático y lo adivinarás.\n A ${pista} restale ${numIngresado} y probalo acá:`)
        
    
};


if (segundoIntentoVar == numIncognito || numIngresado == numIncognito) {
    document.write(`<br>SI, FELICITACIONES 🥳 EL NÚMERO ERA ${numIncognito}`)
}
else {
    document.write("<br>No era ese, perdiste. <button id='reload'>Intenta de nuevo</button> ")
};

const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});