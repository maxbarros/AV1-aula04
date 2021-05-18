"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("./src/cliente");
var Max = new cliente_1.Cliente(12345, 'maxmax1234', 'conectado', 'Max_Barros_ds', 97984546555, 'maxbds@gmail.com', 'Rua 6 nº77, Bairro Centro, Manaus-AM');
console.log(Max);
Max.verifLogin();
/* let carrinho1: Carrinho = new Carrinho(1);
carrinho1.produtos[carrinho1.quantidade] = new Produto('Cel', 'telefone movel');
 */
