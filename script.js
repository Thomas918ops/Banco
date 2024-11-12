const email = "teste@teste.com"
const senha = "123456"
localStorage.setItem(email, senha)

const emailInput = document.getElementById("Email")
const senhaInput = document.getElementById("Senha")
const form = document.getElementById("formulario_login")
form.addEventListener("submit", (event)=>{
    event.preventDefaultt()
    
    const emailDigitado = emailInput.value
    const senhaDigitado = senhaInput.value
    console.log(emailDigitado)
    console.log(senhaDigitado)
    
})

