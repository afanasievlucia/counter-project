let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let number = document.getElementById('number')


increment.addEventListener('click', increase)
decrement.addEventListener('click', decrease)

let i = 0;
function increase() {
    i++
    number.innerHTML = i
}

function decrease() {
    if(number.innerHTML = i) {
        i--
        number.innerHTML = i
    } 
}