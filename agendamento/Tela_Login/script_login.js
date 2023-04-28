const usuario_login = document.getElementById("usuario_login")
const senha_login = document.getElementById("senha_login")
let ok = 0

var botaoLogin = document.getElementById("btn-login")

var lista = new UserDAO()

localStorage.setItem("usuario", null)
botaoLogin.onclick = Login

function Login() {
    if (lista.listaUsuario.length === 0) {
        window.location.href = "/agendamento/Tela_Login/index_cadastro.html"
        alert("Usuario não encontrado. Cadastre-se primeiro")
    }

    for (let i = 0; i < lista.listaUsuario.length && ok == 0; i++) {
        if (usuario_login.value == lista.listaUsuario[i].Matricula && senha_login.value == lista.listaUsuario[i].Senha) {
            var lista_usuario = []
            lista_usuario.push(lista.listaUsuario[i].Nome)
            lista_usuario.push(lista.listaUsuario[i].Email)
            localStorage.setItem("usuario", JSON.stringify(lista_usuario))
            window.location.href = "/agendamento/view/index_home.html"
            alert("Seja bem vindo" + ", " + lista.listaUsuario[i].Nome)
            ok = 1
        }

        else if (usuario_login.value == lista.listaUsuario[i].Matricula && senha_login.value != lista.listaUsuario[i].senha) {
            alert("Senha incorreta")
            ok = 1
        }
    }

    if(ok == 0){
        window.location.href = "/agendamento/Tela_Login/index_cadastro.html"
        alert("Usuario não encontrado. Cadastre-se primeiro")
    }
}


