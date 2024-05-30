//variaveis
let temFome = prompt ("Você tem fome? s/n:").trim().toLowerCase();
let temDinheiro = prompt ("Você tem dinheiro? s/n:").trim().toLowerCase();
let restaurante = prompt ("O restaurante está aberto? s/n:").trim().toLowerCase();

//condicional 
if (temFome === "n" || temDinheiro === "n") {
    console.log("Hoje a janta será em casa!");
}else if (temDinheiro === "s" && restaurante === "n") {
    console.log("Peça um Delivery");
}else {
    console.log("Hoje o jantar sera no seu restaurante preferido!");
}


