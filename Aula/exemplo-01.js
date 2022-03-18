const temIngresso = true;
const comOsPais = false;
const censura = 16;
const idade = 14;

if(temIngresso){
  if(idade >= censura || comOsPais){
    console.log("Pode Entrar!");
  }else{
    console.log("Não Tem Idade!");
  }
}else{
  console.log("Barrado!")
}