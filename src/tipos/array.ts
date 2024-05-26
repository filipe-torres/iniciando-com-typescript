let hobbies = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

// Set a number to 'hobbies' array will return error because Typescript detected an array of strings
// hobbies = [100]

// Defining an array with only 2 position of string and number
let endereco: [string, number] = ['Rua A', 99]
// endereco = ['Rua A', 99, 'Rua B', 100] // Returns error because the array has only 2 positions of string and number
// endereco = [99, 'Rua A'] // Returns error because changed values order of string and number.
// endereco = [99] // Returns error because the array has only one position of number.
// endereco = ['Rua A'] // Returns error because the array has only one position of string.

console.log(endereco[0]) 
// When mouse over [0] shows the type string of the value. 
// If add point after [0], Typescript will show string methods.

