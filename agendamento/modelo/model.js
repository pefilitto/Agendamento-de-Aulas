class AulaModelo{
    #nomeprofessor
    #emailprofessor
    #curso
    #disciplina
    #datainicio
    #datatermino

    constructor(nome, email, curso, disciplina, dtinicio, dtfim){
        this.#nomeprofessor = nome;
        this.#emailprofessor = email;
        this.#curso = curso;
        this.#disciplina = disciplina;
        this.#datainicio = dtinicio;
        this.#datatermino = dtfim
    }

    get nome(){
        return this.#nomeprofessor
    }

    set nome(novoNome){
        this.#nomeprofessor = novoNome
    }

    get email(){
        return this.#emailprofessor
    }

    set email(novoEmail){
        this.#emailprofessor = novoEmail
    }

    get curso(){
        return this.#curso
    }

    set curso(novoCurso){
        this.#curso = novoCurso
    }

    get disciplina(){
        return this.#disciplina
    }

    set disciplina(novaDisciplina){
        this.#disciplina = novaDisciplina
    }

    get dtinicio(){
        return this.#datainicio
    }

    set dtinicio(novaDtInicio){
        this.#datainicio = novaDtInicio
    }

    get dtfim(){
        return this.#datatermino
    }

    set dtfim(novaDtFim){
        this.#datatermino = novaDtFim
    }

    toJSON(){
        return {
            "Nome_Professor": this.#nomeprofessor,
            "Email_Professor": this.#emailprofessor,
            "Curso": this.#curso,
            "Disciplina": this.#disciplina,
            "Data_Inicio": this.#datainicio,
            "Data_Fim": this.#datatermino
        }
    }

    toString(){
        return "Nome_Professor" + this.#nomeprofessor + '\n' +
                "Email_Professor" + this.#emailprofessor + '\n' +
                "Curso" + this.#curso + '\n' +
                "Disciplina" + this.#disciplina + '\n' +
                "Data_Inicio" + this.#datainicio + '\n' +
                "Data_Fim" + this.#datatermino  
    }


}