export class ContaBancaria{
    saldo:number;


    contructor(){
        this.saldo = 0;
    }


    consultaSaldo():number{
        return this.saldo
    }
}