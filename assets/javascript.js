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
};
window.addEventListener("DOMContentLoaded", function () {
  creaTabellone();
  creaBottone();

  const bottoneElement = this.document.querySelector("button");
  bottoneElement.addEventListener("click", estrazioneNumero);
});
