const total = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

let contador = 0;

function atualizar() {
  total.textContent = contador;
}

atualizar(); // mostra 0 ao carregar

botaoSomar.addEventListener("click", () => {
  contador++;
  atualizar();
});

botaoZerar.addEventListener("click", () => {
  contador = 0;
  atualizar();
});