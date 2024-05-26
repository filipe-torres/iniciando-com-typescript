enum DiaSemana {
  DOMINGO = 'domingo',
  SEGUNDA = 'segunda',
  TERCA = 'terca',
  QUARTA = 'quarta',
  QUINTA = 'quinta',
  SEXTA = 'sexta',
  SABADO = 'sabado'
}

console.log(DiaSemana.SABADO) // Returns 'sabado'

let dia: DiaSemana
dia = DiaSemana.SEXTA
console.log(dia) // Returns 'sexta'