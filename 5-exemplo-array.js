const alturas = [1.3, 1.5, 1.6, 1.8, 2]

let soma = 0
for(let i = 0; i < alturas.length; i++) {
    // console.log(alturas[i])
    soma += alturas[i]
}
// console.log(soma)
console.log('média das alturas é: ', soma / alturas.length)