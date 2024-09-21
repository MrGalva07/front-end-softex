import { ContaBancaria } from "./models/ContaBancaria";


let conta1 = new ContaBancaria()

let saldoAtual:number = conta1.consulta()

conta1.depositar(300)

saldoAtual = conta1.consulta()



conta1.saque(400)

saldoAtual = conta1.consulta();

console.log(saldoAtual)

