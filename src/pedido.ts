import { Produto } from "./produto";

export class Pedido
{
    numPedido: number;
    preco: number;
    detalhes: String;
    statusEnvio: String;

    constructor(numPedido: number, preco: number, detalhes:String, statusEnvio: String)
    {
        this.numPedido = numPedido;
        this.preco = preco;
        this.detalhes = detalhes;
        this.statusEnvio = statusEnvio;
    }

    confirmarRecebimento()
    {
        this.statusEnvio = 'Entregue';
    }
}