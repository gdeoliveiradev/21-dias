//Variaveis
let nomeUsuario = prompt("Insira seu Nome:").trim();
let idadeUsuario = parseInt(prompt("Insira sua Idade:"));
let cartaMotorista = prompt("Possui Carta de Motorista? s/n:").trim().toLowerCase();
let carroUsuario = prompt("Possui algum carro? s/n:").trim().toLowerCase();

//Condicional
if (isNaN(idadeUsuario)) {
    console.log("Por favor, insira uma idade válida.");
}else {
if (idadeUsuario < 18 || cartaMotorista === "n") {
    console.log(nomeUsuario + ", você não pode dirigir!");
}else if (carroUsuario === "n") {
    console.log(nomeUsuario + ", você pode dirigir mas não tem um carro!");
}else {
    console.log(nomeUsuario + ", você será o motorista!");
}
}