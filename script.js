const btnFonts = document.querySelector('.change-font-btn')
const btnBackground = document.querySelector('.change-background-btn')
const h1 = document.querySelector('h1')
const optionGeorgia = document.querySelector('#option-georgia')
const optionTimesNewRoman = document.querySelector('#option-times-new-roman')
const optionLucidaSans = document.querySelector('#option-lucida-sans')
const optionSansSerif = document.querySelector('#option-sans-serif')

const colorH1Btn = document.querySelector('.change-h1-color')

const main = document.querySelector('.main')
const closeBtn = document.querySelector('#close-btn')
const optionsFonts = document.querySelector('.fonts-options')

const ChangeBackgroundColor = () => {

    let hexadecimales = '0123456789ABCDEF'
    let colorHex = '#'

    for ( let i = 0; i<6; i++){

        let indiceAleatorio = Math.floor(Math.random()*16)
        colorHex += hexadecimales[indiceAleatorio]
    }

    return colorHex
}


btnBackground.addEventListener('click', () => {

    let colorAleatorio = ChangeBackgroundColor()

   document.body.style.background = colorAleatorio

    
    // preguntar 
    // main.classList.add('new-background').innerHTML = colorAleatorio


})

colorH1Btn.addEventListener('click', () => {

    let colorAleatorio = ChangeBackgroundColor()

   h1.style.color = colorAleatorio

    
    // preguntar 
    // main.classList.add('new-background').innerHTML = colorAleatorio


})


optionGeorgia.addEventListener('click', () => {

    h1.classList.add('georgia')
    h1.classList.remove('times-new-roman')
    h1.classList.remove('lucida-sans')
    h1.classList.remove('sans-serif')

})

optionTimesNewRoman.addEventListener('click', () => {

    h1.classList.add('times-new-roman')
    h1.classList.remove('georgia')
    h1.classList.remove('lucida-sans')
    h1.classList.remove('sans-serif')

}) 

optionLucidaSans.addEventListener('click', () => {

    h1.classList.add('lucida-sans')
    h1.classList.remove('times-new-roman')
    h1.classList.remove('georgia')
    h1.classList.remove('sans-serif')

})

optionSansSerif.addEventListener('click', () => {
    
    h1.classList.add('sans-serif')
    h1.classList.remove('lucida-sans')
    h1.classList.remove('times-new-roman')
    h1.classList.remove('georgia')

})

btnFonts.addEventListener('click', () => {
    
    optionsFonts.classList.add('fonts-option-on')
})

closeBtn.addEventListener('click' , () => {

    optionsFonts.classList.remove('fonts-option-on')
})