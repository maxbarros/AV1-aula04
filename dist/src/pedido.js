"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(numPedido, preco, detalhes, statusEnvio) {
        this.numPedido = numPedido;
        this.preco = preco;
        this.detalhes = detalhes;
        this.statusEnvio = statusEnvio;
    }
    Pedido.prototype.confirmarRecebimento = function () {
    };
    return Pedido;
}());
exports.Pedido = Pedido;
