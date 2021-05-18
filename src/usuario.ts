import { Cliente } from "./cliente";

export class Usuario
{
    idUsuario: number;
    senha: String;
    statusLogin: String;


    constructor(id: number, senha: String, status: String)
    {
        this.idUsuario = id;
        this.senha = senha;
        this.statusLogin = status
    }

    verifLogin(): boolean
    {
        if(this.statusLogin == 'conectado')
        {
            return true;
        }else
            {
                return false;
            }
    }
}