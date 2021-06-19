import { Cliente } from './src/cliente'
import { Carrinho } from './src/carrinho'
import { Produto } from './src/produto'
import { Pedido } from './src/pedido'
import { SMSModule } from './src/smsModule'
let Max: Cliente = new Cliente(12345, 'maxmax1234', 'conectado', 'Max_Barros_ds', 97984546555, 'maxbds@gmail.com', 'Rua 6 nº77, Bairro Centro, Manaus-AM');
console.log(Max);
Max.login();
Max.verifLogin();

let carrinho1: Carrinho = new Carrinho(1);
carrinho1.produtos[carrinho1.quantidade] = new Produto('Cel', 'telefone movel');
console.log(carrinho1);

let pedido1: Pedido = new Pedido(13234, 79.99, 'pedido feito em 18/05/2021, rastreamento: AB343556');


console.log(pedido1);
const sms = new SMSModule(pedido1.statusEnvio);
pedido1.statusEnvio.setState("Enviado!");
pedido1.confirmarRecebimento();
