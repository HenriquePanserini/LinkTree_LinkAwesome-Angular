export class CadastroUsuario {
    nome! : string;
    sobrenome! : string;
    email! : string;
    readonly reMail! : string;
    senha! : string;
    readonly reSenha! : string;
    idade! : number;
    dataRegistro! : Date;

    constructor(nome: string, sobrenome: string, email: string, senha: string, idade: number, dataRegistro: Date) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
        this.idade = idade;
        this.dataRegistro = dataRegistro;
    }

}