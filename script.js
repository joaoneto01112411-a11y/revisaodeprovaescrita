function alterarNome() {
    let trocarNome = document.getElementById('inputNome').
    value;
    if(trocarNome === ""){
        alert('Digite um Nome')
    }else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome
    }
}

function alterarCurso() {
    let trocarCurso = document.getElementById('inputCurso').
    value;
    if(trocarCurso === ""){
        alert('Digite um Curso')
    }else {
        document.getElementById('cursoUsuario').innerHTML = trocarCurso
    }
}

function alterarStatus() {
    let trocarStatus = document.getElementById('inputStatus').
    value;
    if(trocarStatus === ""){
        alert('Digite um status')
    }else {
        document.getElementById('statusUsuario').innerHTML = trocarStatus
    }
}
