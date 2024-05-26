let nome: string = 'João'
// if assign nome = 123 returns error
console.log(nome)

let estaCovendo: boolean
// if call variable before assign, like console.log(estaCovendo), returns error 
estaCovendo = true
console.log(estaCovendo)

let idade = 27
// if we try assign a string, like idade = 'abc' returns error: Type 'string' is not assignable to type 'number'. 

// The 'any' type should be avoided but it´s useful when migrating code from JavaScript to TypeScript.
let variavel: any = 4
variavel = 'texto'
variavel = false
variavel = { nome: 'João', idade: 27 }
console.log(variavel)

// Since type it's not defined on initialization, TypeScript infers the type 'any'.
let misterio
misterio = 4
misterio = 'Texto'
console.log(misterio)