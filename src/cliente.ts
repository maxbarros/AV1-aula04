import { Usuario } from "./usuario";


export class Cliente extends Usuario
{
    nomeCliente: String;
    telefone: number;
    email: String;
    endereco: String;

    constructor(idUsuario: number,senha: String,statusLogin: String, nomeCliente: String, telefone: number, email: String, endereco: String)
    {
        super(idUsuario,senha,statusLogin);
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    
    }
    efetuarCadastro()
    {

    }
    
    login()
    {

    }

    editarPerfil()
    {
    
    }
}