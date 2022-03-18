const jogada1 = "papel"
const jogada2 = "tesoura"

if(jogada1 === "pedra" && jogada2 === "tesoura"){
  console.log(`${jogada1} Vencedora!`);
}else if(jogada1 === "tesoura" && jogada2 === "papel"){
  console.log(`${jogada1} Vencedora!`);
}else if(jogada1 === "papel" && jogada2 === "pedra"){
  console.log(`${jogada1} Vencedora!`);
}else if(jogada2 === "pedra" && jogada1 === "tesoura"){
  console.log(`${jogada2} Vencedora!`);
}else if(jogada2 === "tesoura" && jogada1 === "papel"){
  console.log(`${jogada2} Vencedora!`);
}else if(jogada2 === "papel" && jogada1 === "pedra"){
  console.log(`${jogada2} Vencedora!`);
}else {
  console.log("Empate!");
}