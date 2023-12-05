window.onload = function () {
  carregarDadosSalvos();
};

function cadastrarDados() {
  var email = document.getElementById("email").value;
  var endereco = document.getElementById("endereco").value;

  if (email && endereco) {
    var novoDado = {
      email: email,
      endereco: endereco,
    };

    salvarDado(novoDado);

    adicionarDadoNaLista(novoDado);

    document.getElementById("email").value = "";
    document.getElementById("endereco").value = "";
  } else {
    alert("Preencha todos os campos do formulário.");
  }
}

function adicionarDadoNaLista(dado) {
  var listaDados = document.getElementById("listaDados");
  var novoDado = document.createElement("li");
  novoDado.innerHTML = `${dado.email}: ${dado.endereco}`;
  listaDados.appendChild(novoDado);
}

function salvarDado(dado) {
  var dadosSalvos = JSON.parse(localStorage.getItem("dados")) || [];

  dadosSalvos.push(dado);

  localStorage.setItem("dados", JSON.stringify(dadosSalvos));
}

function carregarDadosSalvos() {
  var dadosSalvos = JSON.parse(localStorage.getItem("dados")) || [];

  dadosSalvos.forEach(adicionarDadoNaLista(dado));
}