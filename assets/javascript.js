const creaTabellone = function () {
  const divElement = document.getElementById("Tabellone");
  console.log(divElement);
  for (let i = 1; i <= 76; i++) {
    const createDiv = document.createElement("div");
    createDiv.innerText = i;
    createDiv.classList.add("elementiTombola");
    divElement.appendChild(createDiv);
  }
};

const creaBottone = function () {
  const divBottoneElement = document.getElementById("Bottone");
  console.log(divBottoneElement);
  //   const createBottone = document.createElement("button");
  divBottoneElement.innerHTML = `<button type="button">ESTRAI NUMERO</button>`;
  const bottoneElement = document.querySelector("#Bottone button");
  bottoneElement.classList.add("stileBottone");
  console.log(bottoneElement);
};

const estrazioneNumero = function () {
  const bottoneElement = document.querySelector("button");
  const numeroRandom = Math.floor(Math.random() * 77 + 1);
  console.log(numeroRandom);
  const colorazioneDiv = document.getElementsByClassName("elementiTombola");
  for (let i = 0; i < 76; i++) {
    if (numeroRandom === Number(colorazioneDiv[i].innerText)) {
      colorazioneDiv[i].classList.add("numeroEstratto");
    }
  }
  const colorazioneDivCartelle =
    document.getElementsByClassName("elementiCartella");
  for (let index = 0; index < 76; index++) {
    if (numeroRandom === Number(colorazioneDivCartelle[index].innerText)) {
      colorazioneDivCartelle[index].classList.add("numeroEstratto");
    }
    // console.log(colorazioneDivCartelle[index].innerText);
  }
};

const selezionaNumeroCartelle = function (event) {
  event.preventDefault();
  const numberElement = document.getElementById("inputNumero").value;
  const divCartelle = document.getElementById("Cartelle");
  console.log(numberElement);
  console.log(divCartelle);
  for (let i = 0; i < numberElement; i++) {
    const cartella = document.createElement("div");
    cartella.classList.add("cartelle");
    divCartelle.appendChild(cartella);
    const RiferimentoCartella = document.getElementById("Cartelle");
    for (let index = 0; index < 24; index++) {
      const createDivNumber = document.createElement("div");
      const number = Math.floor(Math.random() * 77 + 1);
      createDivNumber.innerText = number;
      createDivNumber.classList.add("elementiCartella");
      RiferimentoCartella.appendChild(createDivNumber);
    }
  }
};

window.addEventListener("DOMContentLoaded", function () {
  creaTabellone();
  creaBottone();
  const bottoneCartelle = this.document.getElementById("bottoneInvio");
  bottoneCartelle.addEventListener("click", selezionaNumeroCartelle);
  const bottoneElement = this.document.querySelector("button");
  bottoneElement.addEventListener("click", estrazioneNumero);
});
