const nota1 = -1
const nota2 = -1
const nota3 = -1

const soma = nota1 + nota2 + nota3
const media = soma / 3

if(media < 3) {
    console.log('horrivel')
} else if(media < 7) {
    console.log('da pra melhorar')
} else if(media <= 10 ) {
    console.log('excelente')
} else {
    console.log('média inválida')
}
