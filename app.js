
let peso = document.querySelector(".peso")
let submitbtn = document.querySelector('.sub')
let convertedtousd = document.querySelector('#converted')
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    convertedtousd.innerHTML = ''
    let pesovalue = peso.value
    let usdvalue = 50
    let converted = pesovalue/usdvalue
    let newh1 = document.createElement('h3')
    newh1.innerText = `PESO : ${pesovalue}
    DOLAR : ${converted}`
    convertedtousd.appendChild(newh1)

})