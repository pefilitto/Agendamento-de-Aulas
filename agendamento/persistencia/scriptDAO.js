class AulaDAO{
    #listaaulas

    constructor(){
        var lista = this.recuperar();
        if(lista){
            this.#listaaulas = lista
        }
        else{
            this.#listaaulas = [];
            this.gravar();
        }
    }

    get listaaulas(){
        return this.#listaaulas
    }

    set listaaulas(novaLista){
        this.#listaaulas = novaLista
    }

    gravar(){
        localStorage.setItem("listaaulas", JSON.stringify(this.#listaaulas))
    }
    
    recuperar(){
        return JSON.parse(localStorage.getItem("listaaulas"))
    }
    
    adicionarItem(novoItem){
        this.#listaaulas.push(novoItem);
    }

    removeItem(index){
        let lista = []
        for(let i=0; i<this.#listaaulas.length; i++){
            if(i != index){
                lista.push(this.#listaaulas[i]);
            }
        }
        this.#listaaulas = lista;
        this.gravar();
    }
}

