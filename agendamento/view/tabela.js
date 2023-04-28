var aulaDAO = new AulaDAO();


let Lusuario = JSON.parse(localStorage.getItem("usuario"))

if(Lusuario == null)
    window.location.href = "/agendamento/index_login.html"
else{
    var listaFiltrada = aulaDAO.listaaulas.filter((elemento) => elemento.Nome_Professor == Lusuario[0])
}

geraTabela(listaFiltrada)

function geraTabela(listaexibe) {
    let divtabela = document.getElementById('divtabela')
    divtabela.classList.add("ajusta-tabela")
    if (Array.isArray(listaexibe)) {
        if (listaexibe.length > 0) {
            let tabela = document.createElement('table')
            tabela.classList.add("table")
            let cabecalho = document.createElement('thead')
            cabecalho.innerHTML = `
                <tr>
                    <th>Indice</th>
                    <th>Curso</th>
                    <th>Disciplina</th>
                    <th>NomeProfessor</th>
                    <th>Horario_Inicial</th>
                    <th>Horario_Final</th>
                    <th>Email</th>
                </tr>
            `
            tabela.appendChild(cabecalho)

            let corpo = document.createElement('tbody');
            corpo.classList.add("table-group-divider")
            for (let i = 0; i < listaexibe.length; i++) {
                let linha = document.createElement('tr');
                let aula = listaexibe[i];
                linha.innerHTML = `
                    <td class="text-column">${i}</td>
                    <td class="text-column">${aula.Curso}</td>
                    <td class="text-column">${aula.Disciplina}</td>
                    <td class="text-column">${aula.Nome_Professor}</td>
                    <td class="text-column">${aula.Data_Inicio}</td>
                    <td class="text-column">${aula.Data_Fim}</td>
                    <td class="text-column">${aula.Email_Professor}</td>
                    <td class="text-column-button">
                        <button type="button" class="btn btn-danger" onclick="excluir(${i})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                        </button>
                    </td>
                `
                corpo.appendChild(linha);
            }

            
            let divbotao = document.createElement("div")
            divbotao.innerHTML = `
                <button type="button" id="botaoExportar" class="btn btn-primary" data-bs-toggle="button">Exportar para a planilha</button>
            `

            tabela.appendChild(corpo)
            divtabela.appendChild(tabela)
            divtabela.appendChild(divbotao)
        }
        else {
            divtabela.innerHTML = `
                <div class="alert alert-danger" role="alert" style="text-align: center;">
                    Não há nenhuma aula cadastrada!
                </div>
            `
        }
    }
}

function excluir(index){
    if(confirm("Confirma a exclusão?")){
        aulaDAO.removeItem(index)
        window.location.reload()
    }
}
