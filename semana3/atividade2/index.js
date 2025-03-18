function Carro() {
  //#region propriedades
  var marca;
  var modelo;
  var ano;
  var cor;
  var kilometragem;
  var valor_fipe;
  //#endregion

  //#region métodos get e set
  this.setMarca = (cMarca) => {
    this.marca = cMarca;
  };
  this.getMarca = () => {
    return this.marca;
  };

  this.setModelo = (cModelo) => {
    this.modelo = cModelo;
  };
  this.getModelo = () => {
    return this.modelo;
  };

  this.setAno = (cAno) => {
    this.ano = parseInt(cAno);
  };
  this.getAno = () => {
    return this.ano;
  };

  this.setCor = (cCor) => {
    this.cor = cCor;
  };
  this.getCor = () => {
    return this.cor;
  };

  this.setKilometragem = (cKilometragem) => {
    this.kilometragem = parseFloat(cKilometragem);
  };
  this.getKilometragem = () => {
    return this.kilometragem;
  };

  this.setValorFipe = (cValor_fipe) => {
    this.valor_fipe = parseFloat(cValor_fipe);
  };
  this.getValorFipe = () => {
    return this.valor_fipe;
  };
  //#endregion

  this.AnosUtilizacao = () => {
    let anoAtual = new Date().getFullYear();
    let anosUtilizados = anoAtual - this.getAno();
    return anosUtilizados;
  };

  this.ValorMercado = () => {
    let kmRodados = this.getKilometragem();
    let valor_fipe = this.getValorFipe();
    if (kmRodados < 30000) {
      return valor_fipe + valor_fipe * 0.1;
    }
    if (kmRodados >= 30000 && kmRodados <= 50000) {
      return valor_fipe;
    }
    if (kmRodados > 50000) {
      return valor_fipe - valor_fipe * 0.1;
    }
  };
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const carro = new Carro();
  carro.setMarca(document.getElementById("marca").value);
  carro.setModelo(document.getElementById("modelo").value);
  carro.setAno(document.getElementById("ano").value);
  carro.setCor(document.getElementById("cor").value);
  carro.setKilometragem(document.getElementById("kilometragem").value);
  carro.setValorFipe(document.getElementById("valor_fipe").value);
  console.log(carro);

  let div = document.querySelector(".container");
  let apresentacao = document.createElement("h3");
  apresentacao.textContent = `O veículo tem ${carro.AnosUtilizacao()} anos de utilização e valor de mercado de: R$${carro
    .ValorMercado()
    .toFixed(2)}.`;
  div.appendChild(apresentacao);
});
