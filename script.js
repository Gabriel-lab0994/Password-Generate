var content = document.getElementsByClassName('main-conteiner')[0];
var button = document.getElementsByClassName('button')[0];
var password = document.getElementById('password');
var porcentageForce = document.getElementById('porcentage-force');

function createPassword() {

    //Gerar a senha
    const number = '0123456789';
    const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const especialCaracter = '!@#$%^&*?';

    var allChars = '';

    if (document.getElementById("include-uppercase").checked) allChars += uppercaseLetter;
    if (document.getElementById("include-lowercase").checked) allChars += lowercaseLetter;
    if (document.getElementById("include-number").checked) allChars += number;
    if (document.getElementById("include-especial-caracter").checked) allChars += especialCaracter;

    var passwordLength = parseInt(document.getElementsByTagName('input')[4].value);
    var newPassword = '';

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        newPassword += allChars[randomIndex];
    }

    password.textContent = newPassword;

    // Verificação de força da senha
    if (passwordLength >= 12) {
        porcentageForce.style.width = '100%';
         porcentageForce.style.backgroundColor = '#479e31';
    }

    if (passwordLength < 12 && passwordLength >= 7){
        porcentageForce.style.width = '70%';
         porcentageForce.style.backgroundColor = '#479e31';
    }

    if (passwordLength < 7 && passwordLength >= 5) {
        porcentageForce.style.width = "50%";
        porcentageForce.style.backgroundColor = 'orange';
    }

    if (passwordLength < 5 && passwordLength >= 4) {
        porcentageForce.style.width = "30%";
        porcentageForce.style.backgroundColor = 'red';
    }

    if (passwordLength < 4 && passwordLength >= 0) {
        porcentageForce.style.width = "100%";
        porcentageForce.style.backgroundColor = 'red';
    }

    //Butão de copiar
    let btnCopy = document.getElementById('btn-copy-password');

    // Se o botão ainda não existe, criamos
    if (!btnCopy) {
        btnCopy = document.createElement('button');
        btnCopy.id = 'btn-copy-password';
        btnCopy.textContent = 'Copiar senha';
        btnCopy.onclick = copyPassword;
        content.appendChild(btnCopy);
    }

    content.style.height = content.scrollHeight + "px";
}

//Função de copiar
function copyPassword() {
    navigator.clipboard.writeText(password.textContent);
}


