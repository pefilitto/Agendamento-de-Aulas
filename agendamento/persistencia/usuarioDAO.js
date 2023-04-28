class UserDAO{
    #listaUsuario

    constructor(){
        var lista = this.recuperar()
        if(lista)
            this.#listaUsuario = lista
        else{
            this.#listaUsuario = []
            this.gravar()
        }
    }

    get listaUsuario(){
        return this.#listaUsuario
    }

    set listaUsuario(novaListaUsuario){
        this.#listaUsuario = novaListaUsuario
    }

    gravar(){
        localStorage.setItem("listaUsuario", JSON.stringify(this.#listaUsuario))
    }

    recuperar(){
        return JSON.parse(localStorage.getItem("listaUsuario"))
    }

    adicionarItem(novoUsuario){
        this.#listaUsuario.push(novoUsuario)
    }
}