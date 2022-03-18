const valorDaCompra = 10000;
const numeroDeParcelas = 12;

let comDesconto = 0;
let valorDasParcelas = 0;
let valorComJuros = 0;

if(numeroDeParcelas === 1){
  comDesconto = valorDaCompra - (0.1 * valorDaCompra) /100;
  console.log(`Você esta pagando a vista, portanto tem direito a 10% de desconto, o valor final fica ${(comDesconto/100).toFixed(2)} reais`);
}else if(numeroDeParcelas >= 2 && numeroDeParcelas <= 6){
  valorDasParcelas = (valorDaCompra/100) / numeroDeParcelas;
  console.log(`Você vai pagar parcelado em ${numeroDeParcelas} vezes, onde cada uma tem um valor de ${valorDasParcelas.toFixed(2)} reais e assim totalizando ${valorDaCompra/100} reais.`);
}else if(numeroDeParcelas <= 12 ){
  valorComJuros = (valorDaCompra * Math.pow(1 + 0.01, numeroDeParcelas)) / 100;
  valorDasParcelas = valorComJuros / numeroDeParcelas;
  console.log(`Por se tratar de um pagamento à prazo, terá a presença de 1% de juros ao mês, ou seja, a parcela passa a ser ${valorDasParcelas.toFixed(2)}, durante ${numeroDeParcelas} mêses, totalizando ${valorComJuros.toFixed(2)}`);
}else{
  console.log("O número de parcela selecionado esta indisponível!");
}