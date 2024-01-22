class vingador {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = " magia";
                } else if (this.tipo === "guerreiro") {
                    ataque = " espada";
                    } else if (this.tipo === "monge") {
                        ataque = " artes marciais";
                        } else if (this.tipo === "ninja") {
                            ataque = " shuriken";
                            } else {
                                ataque = "usou um ataque indefinido";
                                }

        let mensagemAtaque = `O ${this.tipo} ${this.nome}, com a idade ${this.idade}, atacou usando ${ataque} `
        console.log(mensagemAtaque);
    }
}


let heroi1 = new vingador("CapitãoAmerica", 150, "guerreiro");
let heroi2 = new vingador("DoutorEstranho", 30, "mago");
let heroi3 = new vingador("Wong", 35, "monge");
let heroi4 = new vingador("GaviãoArqueiro", 28, "ninja");

heroi1.atacar();  
heroi2.atacar();  
heroi3.atacar();  
heroi4.atacar();