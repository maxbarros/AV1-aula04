import { Subject } from "./observer";

export class Pedido {
    numPedido: number;
    preco: number;
    detalhes: String;
    statusEnvio = new Subject();

    constructor(numPedido: number, preco: number, detalhes: String) {
        this.numPedido = numPedido;
        this.preco = preco;
        this.detalhes = detalhes;
    }

    confirmarRecebimento() {
        this.statusEnvio.setState("Recebido pelo destinatário")
    }
}