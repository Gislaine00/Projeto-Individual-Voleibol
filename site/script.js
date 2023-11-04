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