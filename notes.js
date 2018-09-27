console.log('Módulo de notas cargado')

const addNote = (title, body) => {
  console.log('Nota añadida: ', title, body)
}
const getAll = () => {
  console.log('Obtenidas todas las notas')
}
const getNote = (title) => {
  console.log('Obtenida nota: ', title)
}
const removeNote = (title) => {
  console.log('Nota borrada', title)
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
