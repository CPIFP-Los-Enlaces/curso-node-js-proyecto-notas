console.log('Módulo de notas cargado')

const addNote = () => {
  console.log('Nueva nota')
  return 'Nueva nota'
}

const removeNote = (id) => {
  console.log(`Nota con id ${id} borrada`)
  console.log('Nota con id ' + id + 'borrada')
  return 'Nota borrada'
}

module.exports = {
  addNote,
  removeNote
}
