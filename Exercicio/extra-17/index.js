//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if((valorDoProduto / 100) != valorPago){
  console.log(`Restam ${(((valorDoProduto / 100) - valorPago) / ((valorDoProduto / 100) / quantidadeDoParcelamento)).toFixed()} parcelas de R$${((valorDoProduto / 100) / quantidadeDoParcelamento).toFixed(2)}`);
}