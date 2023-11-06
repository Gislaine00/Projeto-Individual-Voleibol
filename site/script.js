/* navbar*/
const desiredElement = document.getElementById('nav') // elemento alvo
const pixelsAmount = '10' // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle') // adiciona classe "changeColor"
  } else {
    desiredElement.classList.remove('changeStyle') // remove classe "changeColor"
  }
})

/* carrossel */
var radio = document.querySelector('.manual-btn')
var i = 1
document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 4000)

function proximaImg(){
    i++
    if(i>4){
        i = 1
    }

    document.getElementById('radio'+ i).checked = true
}