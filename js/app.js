// Valores iniciais das quantidades disponíveis
let qtdPista = 100;
let qtdCadeiraSuperior = 200;
let qtdCadeiraInferior = 400;

// Função para verificar a validade da quantidade digitada pelo usuário
function validarQuantidade(quantidade) {
  if (isNaN(quantidade) || quantidade < 1) {
    alert("Quantidade inválida! Por favor, digite um número maior que zero.");
    return false;
  }
  return true;
}

// Função para verificar a disponibilidade de ingressos
function verificarDisponibilidade(tipoIngresso, quantidade) {
  switch (tipoIngresso) {
    case "pista":
      if (quantidade > qtdPista) {
        alert("Desculpe, não há ingressos de pista suficientes disponíveis.");
        return false;
      }
      break;

    case "superior":
      if (quantidade > qtdCadeiraSuperior) {
        alert("Desculpe, não há ingressos de cadeira superior suficientes disponíveis.");
        return false;
      }
      break;

    case "inferior":
      if (quantidade > qtdCadeiraInferior) {
        alert("Desculpe, não há ingressos de cadeira inferior suficientes disponíveis.");
        return false;
      }
      break;
  }
  return true;
}

// Função para processar a compra e atualizar as quantidades disponíveis
function processarCompra(tipoIngresso, quantidade) {
  switch (tipoIngresso) {
    case "pista":
      qtdPista -= quantidade;
      document.getElementById("qtd-pista").innerText = qtdPista;
      break;

    case "superior":
      qtdCadeiraSuperior -= quantidade;
      document.getElementById("qtd-superior").innerText = qtdCadeiraSuperior;
      break;

    case "inferior":
      qtdCadeiraInferior -= quantidade;
      document.getElementById("qtd-inferior").innerText = qtdCadeiraInferior;
      break;
  }
}

// Função principal para realizar a compra
function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidade = document.getElementById("qtd").value;

  if (!validarQuantidade(quantidade)) {
    return;
  }

  if (!verificarDisponibilidade(tipoIngresso, quantidade)) {
    return;
  }

  processarCompra(tipoIngresso, quantidade);

  alert(`Compra realizada com sucesso! Você comprou ${quantidade} ingresso(s) de ${tipoIngresso}.`);
}
