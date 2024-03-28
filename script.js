const emailInput = document.getElementById('email')
const senhalInput = document.getElementById('senha')


function login(){
    if(emailInput.value == 'aluno@aluno.com' && senhalInput.value == 'senha'){
        alert(" login feito")
        window.location.href = 'home.html'

    }else{

        alert("email/ou senha incorreto")
    }



}