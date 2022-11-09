/* Variáveis */
var nome = 'Pedro'
let sobrenome = 'Cordioli' // vamos utilizar essa forma
nomedomeio = 'Henrique'

let n1 = 2
let n2 = 9.5
let comida = 'abacaxi'
let fumante = false

console.log(n1, n2, comida, fumante)

/* tipos de dados */
console.log(typeof n1)//number
console.log(typeof n2)//number
console.log(typeof comida)//string
console.log(typeof fumante)// false = boolean

let veiculos = ['carro', 'moto', 'avião']//aray
console.log(typeof veiculos)//todo array é do tipo object em js

let salvar = function () {

}
console.log(typeof salvar)//salvar é do tipo function

/* Estruturas de decisão*/
/*
if(condição){
    valor se a condição for verdadeiro
}else{
    valor se a condição for falso
}
*/
let nota = 10
if (nota >= 5){ //if mais visto
    console.log("Passou")
}else {
    console.log("Reprovou")
}

if (nota >= 5) {// if sem else
    console.log("Parabéns, está aprovado")
}

if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

let dia = 2
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 1:
        console.log("Sábado")
        break
        default:
            console.log("Dia Inválido")
        }

        /* Estrutura de repetição */
        let contador = 1
        while(contador <= 10){
            contador++// contador = contador + 1

        }

        for(let contador2 = 10; contador2<=20; contador2++){
            console.log(contador2)
        }

        /*
        while(conndição){
            código de laço de repetição
        }

        for(inicialização; condição; incremento){
            código do laço de repetição
        }
        */