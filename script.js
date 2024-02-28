function limparFormulario() {
  document.getElementById("formulario").reset();
}

function pegarDados() {
  let interesse = [];
  let cargosArray = [];
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const caixasMarcadas = document.querySelectorAll(
    "input[name='interesse']:checked"
  );
  const radioMarcadas = document.querySelectorAll(
    "input[type='radio']:checked"
  );
  const curriculo = document.getElementById("curriculo").value;

  caixasMarcadas.forEach(function (checkbox) {
    interesse.push(checkbox.value);
  });

  radioMarcadas.forEach(function (radio) {
    cargosArray.push(radio.value);
  });
  if (caixasMarcadas.length < 1) {
    alert("Você deve selecionar ao menos 1 opção de seu interesse");
  } else {
    console.log("Nome: ", nome);
    console.log("Endereço: ", endereco);
    console.log("Cidade: ", cidade);
    console.log("Estado", estado);
    console.log("Cargos: ", cargosArray);
    console.log("Areá de interesse: ", interesse);
    console.log("Curriculo: ", curriculo);
  }
}
