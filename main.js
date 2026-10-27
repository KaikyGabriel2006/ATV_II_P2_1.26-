const nomes = ["Kaiky", "Gabriel", "Lima"];
nomes.push("Hungarette");

const lista = document.getElementById("lista");
const formAluno = document.getElementById("formAluno");
const nomeInput = document.getElementById("nomeInput");

function renderizarLista() {
lista.innerHTML = "";

for (let nome of nomes) {
lista.innerHTML += `<li>${nome}</li>`;
}
}

formAluno.addEventListener("submit", function(event) {
event.preventDefault();

const novoNome = nomeInput.value.trim();

if (novoNome !== "") {
nomes.push(novoNome);
renderizarLista();
nomeInput.value = "";
}
});

renderizarLista();