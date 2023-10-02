// adicionando classe ao botão selecionado
function addSelectedClassToButton(button) {
  if (button.classList.contains('selected')) return
  button.classList.add('selected')
}
// removendo classe .selected do botão
function removeSelectedClassFromButton() {
  const selectedButton = document.querySelector('.button.selected')
  selectedButton.classList.remove('selected')
}

// adicionando classe .selected do personagem
function addSelectedClassToCharacter(index) {
  if (characters[index].classList.contains('selected')) return
  characters[index].classList.add('selected')
}

// removendo classe .selected do personagem
function removeSelectedClassFromCharacter() {
  const selectedCharacter = document.querySelector('.character.selected')
  selectedCharacter.classList.remove('selected')
}

const buttons = document.querySelectorAll('.button')
const characters = document.querySelectorAll('.character')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // utilizando função para remover classe do botão anterior
    removeSelectedClassFromButton()
    // utilizando função para adicionar a classe ao botão
    addSelectedClassToButton(button)

    removeSelectedClassFromCharacter()
    addSelectedClassToCharacter(index)
  })
})
