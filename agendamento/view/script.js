const nome = document.getElementById("nomeprofessor")
const email = document.getElementById("email")
const horario_inicio = document.getElementById("envArqIni")
const horario_final = document.getElementById("envArqFim")
const check_participacao = document.getElementById("checkbox");
const box_registro = document.getElementById("registro")
const botaoenviar = document.getElementById("botaoenviar")
var formulario = document.getElementById("form")

var lista = JSON.parse(localStorage.getItem("usuario"))

if(lista == null)
    window.location.href = "/agendamento/index_login.html"
else{
    nome.value = lista[0]
    email.value = lista[1]
}

var text1;
var text2;
var listacursos = document.getElementById("listacursos")
listacursos.addEventListener('change', () => {
    text1 = listacursos.value;
})
var listadisciplinas = document.getElementById("listadisciplinas")
listadisciplinas.addEventListener('change', () => {
    text2 = listadisciplinas.value;
})

var lista_aulas = new AulaDAO();

check_participacao.onclick = verificaCheck
botaoenviar.onclick = enviar

function verificaCheck() {
    let div = document.createElement('div');
    if (check_participacao.checked == true) {
        box_registro.appendChild(div)
        box_registro.classList.add("box-registro")
        div.innerHTML = `
            <div class="ui info message">
                <div>
                <i class="info icon"></i> Com esta opção habilitada a webconferência será vinculada a uma atividade para registro de participação (Envio de Arquivo). Por favor, defina:
                    <div>
                        1) Os períodos de início e fim para que o aluno faça o seu registro de participação e;<br>
                        2) Os períodos de início e fim para que o aluno que não participou da webconferência possa enviar a resenha sobre o assunto.
                    </div>
                </div>
                <div class="separa-div" style="margin-top: 15px;">
                    <div class="floatLeft" style="margin-right:5%;">
                        <label class="rotulo"> Data/hora de início do registro de participação:</label>
                        <input class="input-data" name="regPartInicio" type="datetime-local" id="regPartInicio" value="2023-04-18T21:05">
                        
                        <label class="rotulo"> Data/hora de início do envio de arquivo:</label>
                        <input class="input-data" name="envArqIni" type="datetime-local" id="envArqIni" value="2023-04-18T23:00">
                    </div>
                    <div class="float-right">
                        <label class="rotulo"> Data/hora de fim do registro de participação:</label>
                        <input class="input-data" name="regPartFim" type="datetime-local" id="regPartFim" value="2023-04-18T22:30">
                        
                        <label class="rotulo"> Data/hora de fim do envio de arquivo:</label>
                        <input class="input-data" name="envArqFim" type="datetime-local" id="envArqFim" value="2023-04-25T23:55">                                 
                    </div>
                </div>
            </div>
        `
        box_registro.style.borderStyle = "solid"
    }
    else {
        box_registro.innerHTML = '';
        box_registro.style.borderStyle = "none"
    }

}


function valida()
{
    if(listadisciplinas.value == '0' || listacursos.value == '0')
    {
        alert("Preencha todos os campos")
        return false
    }
    else
        return true
}

function enviar(evento) {
    evento.preventDefault();
    if (formulario.checkValidity() && valida() ) {
        var lista2 = new AulaModelo(nome.value, email.value, text1, text2, horario_inicio.value, horario_final.value)
        lista_aulas.adicionarItem(lista2)
        lista_aulas.gravar()
        window.location.reload()
    }
    else {
        evento.preventDefault();
        evento.stopPropagation();
    }
}

function mensagem(){
    alert("Aula cadastrada com sucesso")
}







