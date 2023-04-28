class User{
    #matricula
    #nome
    #email
    #senha

    constructor(matricula, nome, email, senha){
        this.#matricula = matricula
        this.#nome = nome
        this.#email = email
        this.#senha = senha
    }

    get matricula(){
        return this.#matricula
    }

    set matricula(novaMatricula){
        this.#matricula = novaMatricula
    }

    get nome(){
        return this.#nome
    }

    set nome(novoNome){
        this.#nome = novoNome
    }

    get email(){
        return this.#email
    }

    set email(novoEmail){
        this.#email = novoEmail
    }

    get senha(){
        return this.#senha
    }

    set senha(novaSenha){
        this.#senha = novaSenha
    }

    toJSON(){
        return {
            "Matricula": this.#matricula,
            "Nome": this.#nome,
            "Email": this.#email,
            "Senha": this.#senha
        }
    }

    toString(){
        return "Matricula" + this.#matricula + '\n' +
                "Nome" + this.#nome + '\n' +
                "Email" + this.#email + '\n' +
                "Senha" + this.#senha + '\n'
    }
}