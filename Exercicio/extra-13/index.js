//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "credito"){
  console.log(`Valor a ser pago: ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.05)).toFixed(2)}`);
}else if(tipoDePagamento === "cheque"){
  console.log(`Valor a ser pago: ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.03)).toFixed(2)}`);
}else if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
  console.log(`Valor a ser pago: ${((valorDoProduto / 100) - ((valorDoProduto / 100) * 0.1)).toFixed(2)}`);
}else {
  console.log("Modo de pagamento Inválido!");
}