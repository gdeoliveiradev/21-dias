let nomeUsuario = prompt("Digite seu Nome:");
let idadeUsuario = prompt("Digite sua Idade:");
let alturaUsuario = prompt("Digite sua Altura:");
let pesoUsuario = prompt("Digite seu Peso:");

console.log(nomeUsuario)
console.log(parseInt(idadeUsuario))
console.log(Number(alturaUsuario))
console.log(Number(pesoUsuario))

let anoNascimentoUsuario = 2023 - idadeUsuario
let imcUsuario = pesoUsuario / (alturaUsuario * alturaUsuario)

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, nasceu em " + anoNascimentoUsuario + ",  " + alturaUsuario + " de altura, pesa " + pesoUsuario + "kg" + " seu IMC é " + imcUsuario + " Kg/m2")