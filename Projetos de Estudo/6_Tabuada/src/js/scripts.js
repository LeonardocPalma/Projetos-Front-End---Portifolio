// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplactionTitle = document.querySelector("#multiplication-title span");

const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

// elemento para o input do botão limpar
const clearTableBtn = document.querySelector(
  "#multiplication-form input[type='reset']"
);

// funções

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }

  multiplactionTitle.innerText = number;
};

// eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});

clearTableBtn.addEventListener("click", () => {
  multiplicationTable.innerHTML = "Informe um número para calcular uma tabuada...";
  multiplactionTitle.innerText = "";
});
