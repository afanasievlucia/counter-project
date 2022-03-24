// primitive DOM manipulation
// let increment = document.getElementById('increment')
// let decrement = document.getElementById('decrement')
// let number = document.getElementById('number')


// increment.addEventListener('click', increase)
// decrement.addEventListener('click', decrease)

// let i = 0;
// function increase() {
//     i++
//     number.innerHTML = i
// }

// function decrease() {
//     if(number.innerHTML = i) {
//         i--
//         number.innerHTML = i
//     } 
// }

// traning advance DOM manipulation
const container = document.querySelector('body')

// create buttons with attributes
const incrementBtn = document.createElement('button')
incrementBtn.setAttribute('class', 'btn')
incrementBtn.setAttribute('id', 'increment')
const nodeBtnIncr = document.createTextNode('Increment')
incrementBtn.appendChild(nodeBtnIncr)

const decrementBtn = document.createElement('button')
decrementBtn.setAttribute('class', 'btn')
decrementBtn.setAttribute('id', 'decrement')
const nodeBtnDecr = document.createTextNode('Decrement')
decrementBtn.appendChild(nodeBtnDecr)

// create 'p' for the rezult of click buttons
const number = document.createElement('p')
number.setAttribute('id', 'number')
const nodeNumber = document.createTextNode('0')
number.append(nodeNumber)

// append buttons to the body
container.append(incrementBtn)
container.append(decrementBtn)
container.append(number)

incrementBtn.addEventListener('click', increase)
decrementBtn.addEventListener('click', decrease)

let i = 0;
function increase() {
    i++
    number.innerHTML = i++  // container.append(number) -- gives all the number (012345..)
}

function decrease() {
    if(number.innerHTML = i) {
        i--
        number.innerHTML = i
    } 
}