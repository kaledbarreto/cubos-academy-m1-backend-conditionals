const ladoA = 3;
const ladoB = 3;

if(ladoA === ladoB && ladoA === 0) {
  console.log("Bucha de Branco");
}else if(ladoA === ladoB && ladoA === 1){
  console.log("Bucha de Ás");
}else if(ladoA === ladoB && ladoA === 2){
  console.log("Bucha de Duque");
}else if(ladoA === ladoB && ladoA === 3){
  console.log("Bucha de Terno");
}else if(ladoA === ladoB && ladoA === 4){
  console.log("Bucha de Quadra");
}else if(ladoA === ladoB && ladoA === 5){
  console.log("Bucha de Quina");
}else if(ladoA === ladoB && ladoA === 6){
  console.log("Bucha de Sena");
}else{
  console.log("Não é uma Bucha!");
}