//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let parcela = 0;

if((totalJaPagoPeloAluno / 100) <= 18000 && (rendaMensalEmCentavos / 100) >= 2000 && mesesDecorridos <= 60){
  parcela = (rendaMensalEmCentavos * 0.18) / 100;
  console.log(`O valor da parcela desse mês é R$ ${parcela} reais`);
}else if(parcela === 0){
  console.log(`O valor da parcela desse mês é R$ ${parcela} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`)
}else if(mesesDecorridos > 60){
  console.log(`Não sera mais necessário pagar, pois o limite de mêses permitido para efetuar o pagamento do curso foi ultrapassado.`);
}else{
  console.log(`Você não precisará pagar mais nada pois todo o valor de R$ 18.000,00 já foi quitado.`);
}