function calcularImpostos(valorVenda, irpf, pis, cofins, inss, issqn) {
  const impostoIRPF = (irpf / 100) * valorVenda;
  const impostoPIS = (pis / 100) * valorVenda;
  const impostoCOFINS = (cofins / 100) * valorVenda;
  const impostoINSS = (inss / 100) * valorVenda;
  const impostoISSQN = (issqn / 100) * valorVenda;

  const totalImpostos = impostoIRPF + impostoPIS + impostoCOFINS + impostoINSS + impostoISSQN;
  const totalFinal = valorVenda - totalImpostos;

  return {
    impostoIRPF,
    impostoPIS,
    impostoCOFINS,
    impostoINSS,
    impostoISSQN,
    totalImpostos,
    totalFinal,
  };
}

function gerarNotaFiscal() {
  const valorVenda = parseFloat(document.getElementById("valorVenda").value);
  const itens = document.getElementById("itens").value;
  const irpf = parseFloat(document.getElementById("irpf").value);
  const pis = parseFloat(document.getElementById("pis").value);
  const cofins = parseFloat(document.getElementById("cofins").value);
  const inss = parseFloat(document.getElementById("inss").value);
  const issqn = parseFloat(document.getElementById("issqn").value);

  if (
    isNaN(valorVenda) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)
  ) {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const impostos = calcularImpostos(valorVenda, irpf, pis, cofins, inss, issqn);

  document.getElementById("valorVendaNota").innerText = valorVenda.toFixed(2);
  document.getElementById("itensNota").innerText = itens;
  document.getElementById("irpfNota").innerText = impostos.impostoIRPF.toFixed(2);
  document.getElementById("pisNota").innerText = impostos.impostoPIS.toFixed(2);
  document.getElementById("cofinsNota").innerText = impostos.impostoCOFINS.toFixed(2);
  document.getElementById("inssNota").innerText = impostos.impostoINSS.toFixed(2);
  document.getElementById("issqnNota").innerText = impostos.impostoISSQN.toFixed(2);
  document.getElementById("totalImpostosNota").innerText = impostos.totalImpostos.toFixed(2);
  document.getElementById("totalFinalNota").innerText = impostos.totalFinal.toFixed(2);
  document.getElementById("notaFiscal").style.display = "block";
}
