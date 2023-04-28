const usuario = document.getElementById("usuario_cadastro")
const nome = document.getElementById("nome_cadastro")
const email = document.getElementById("email_cadastro")
const senha = document.getElementById("senha_cadastro")

var botaocadastra = document.getElementById("btn-cadastra")
var botaoLogin = document.getElementById("btn-login")
var formulario = document.getElementById("formulario-cadastra")

var lista = new UserDAO()

localStorage.setItem("usuario", null)
botaocadastra.onclick = cadastraUsuario

function cadastraUsuario(evento) {
    evento.preventDefault()
    if (formulario.checkValidity()) {
        var lista_usuario = []
        lista_usuario.push(nome.value)
        lista_usuario.push(email.value)
        localStorage.setItem("usuario", JSON.stringify(lista_usuario))
        let funcionario = new User(usuario.value, nome.value, email.value, senha.value)
        lista.adicionarItem(funcionario)
        lista.gravar()
        window.location.reload()
        window.location.href = "/agendamento/view/index_home.html"
    }
    else {
        evento.preventDefault()
        evento.StopPropagation()
    }
}