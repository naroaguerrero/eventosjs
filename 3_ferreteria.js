let brocha = 0;
let llave = 0;
let martillo = 0;
let tronco = 0;

let brochaHTML = "";
let martilloHTML = "";
let llaveHTML = "";
let troncoHTML = "";

function juntoBrocha(direccion) {
  direccion === "mas" ? brocha++ : brocha--;
  imprimeCesta();
}
function juntoLlave(direccion) {
  direccion === "mas" ? llave++ : llave--;
  imprimeCesta();
}
function juntoMartillo(direccion) {
  direccion === "mas" ? martillo++ : martillo--;
  imprimeCesta();
}
function juntoTronco(direccion) {
  direccion === "mas" ? tronco++ : tronco--;
  imprimeCesta();
}

function imprimeCesta() {
  if (brocha >= 0) {
    brochaHTML = "";
    for (let i = 1; i <= brocha; i++) {
      brochaHTML += `<img src="./iconos/Copia de brocha.svg" alt="broca">`;
    }
  }
  if (llave >= 0) {
    llaveHTML = "";
    for (let i = 1; i <= llave; i++) {
      llaveHTML += `<img src="./iconos/Copia de llave.svg" alt="llave">`;
    }
  }
  if (martillo >= 0) {
    martilloHTML = "";
    for (let i = 1; i <= martillo; i++) {
      martilloHTML += `<img src="./iconos/Copia de martillo.svg" alt="martillo">`;
    }
  }
  if (tronco >= 0) {
    troncoHTML = "";
    for (let i = 1; i <= tronco; i++) {
      troncoHTML += `<img src="./iconos/Copia de tronco.svg" alt="tronco">`;
    }
  }

  document.getElementById("cesta").innerHTML = `
  <h3>Brochas:</h3><p>${brocha}</p><div>${brochaHTML}</div>
  <h3>Llaves:</h3><p>${llave}</p><div>${llaveHTML}</div>
  <h3>Martillos:</h3><p>${martillo}</p><div>${martilloHTML}</div>
  <h3>Troncos:</h3><p>${tronco}</p><div>${troncoHTML}</div>`;
}
