export class ContaBancaria{
    saldo:number;



    constructor(){
        this.saldo = 0
    }

    consulta(){
        return this.saldo
    }

    depositar(valor:number){
        if (valor > 0){
            this.saldo+=valor
        }
    }

    saque(valor:number){
        if(valor>=0  &&  this.saldo >= valor){
            this.saldo -= valor 
        }
    }
}