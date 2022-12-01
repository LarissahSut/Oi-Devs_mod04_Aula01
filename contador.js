const cores = document.querySelectorAll("span");
console.log(cores);

cores[0].style.color = "green";
cores[1].style.color = "red";
cores[2].style.color = "blue";

const contador = document.querySelector("#contador");
const btnInc = document.querySelector("#btnInc");
const btnDec = document.querySelector("#btnDec");
const btnZerar = document.querySelector("#btnZerar");

contador.innerHTML = 0;

btnInc.addEventListener("click", function () {
  const novoContador = Number(contador.innerHTML) + 1;
  contador.innerHTML = novoContador;
  mudaCor(Number(contador.innerHTML));
});

btnDec.addEventListener("click", function () {
  const novoContador = Number(contador.innerHTML) - 1;
  contador.innerHTML = novoContador;
  mudaCor(Number(contador.innerHTML));
});

btnZerar.addEventListener("click", function () {
  contador.innerHTML = 0;
  mudaCor(Number(contador.innerHTML));
});

function mudaCor(numberContador) {
  if (numberContador > 0) {
    contador.style.color = "green";
  } else if (numberContador < 0) {
    contador.style.color = "red";
  } else {
    contador.style.color = "gray";
  }
}

console.log(contador.innerHTML);
