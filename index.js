const container = document.querySelector('#container')
const buttons = document.querySelectorAll('button')

function setAlert(event) {
    console.log(event.target.innerText)
}
buttons.forEach((button) => {
    button.addEventListener('click',setAlert)    
});