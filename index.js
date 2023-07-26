window.onload = function () {
  setTimeout(function () {
    alert("Boas Vindas");
  }, 5000);
};

function carregarSelect2(valor) {
  var arrayValores = new Array(
    new Array(0, "Escolha uma opção"),
    new Array(1, "Dinâmico"),
    new Array(2, "LojaVirtual"),
    new Array(3, "LandingPage")
  );
  if (valor == 0) {
    document.getElementById("select2").disable = true;
    document.getElementById("select2").options.length = 0;
    document.getElementById("select2").options[0] = new Option(
      "Desativado",
      "0"
    );
  }
}

function fundo(value) {
  if (value == 0) {
    document.body.style.background = "url('Image/blue.jpg')";
  } else if (value == 1) {
    document.body.style.background = "url('Image/Dinâmico.png')";
  } else if (value == 2) {
    document.body.style.background = "url('Image/LojaVirtual.png')";
  } else {
    document.body.style.background = "url('Image/LandingPage.png')";
  }
}

function confirmar() {
  $varConfirm = getElementById("preencher").value;
  if (varConfirm == "") {
    alert("Todos os campos devem estar preenchidos.");
  }
}

/* Calcula o Orçamento */

function calcularorcamento() {
  let orcamentoTotal = 0;
  let precoTipopagina = 0;
  precoTipopagina = +document.getElementById("tipopagina").value;
  document.getElementById("valor-tipopagina").value = precoTipopagina;

  const form = document.getElementById("checkboxGroup");
  let contar = 0;
  let somaPaginas = 0;
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    if (element.type === "checkbox" && element.checked) {
      contar++;
      somaPaginas += parseInt(element.value);
    }
  }

  const prazo = +document.getElementById("prazo").value;
  let desconto = 1;
  if (prazo > 0) {
    switch (prazo) {
      case 1:
        desconto *= 0.95;
        break;
      case 2:
        desconto *= 0.9;
        break;
      case 3:
        desconto *= 0.85;
        break;
      default:
        desconto *= 0.8;
        break;
    }
  }

  const result = document.getElementById("resultado");
  orcamentoTotal = (precoTipopagina + somaPaginas) * desconto;
  result.innerHTML = `Número de páginas selecionadas: ${contar}. Valor total da soma a adicionar ao orçamento: ${orcamentoTotal}.`;
}

/* Tipo de Página */
function carregarImagem(value) {
  if (value == 0) {
    document.body.style.background = "url('Image/blue.jpg')";
  } else if (value == 500) {
    document.body.style.background = "url('Image/Dinâmico.png')";
  } else if (value == 1000) {
    document.body.style.background = "url('Image/LojaVirtual.png')";
  } else if (value == 1500) {
    document.body.style.background = "url('Image/LandingPage.png')";
  }
}
