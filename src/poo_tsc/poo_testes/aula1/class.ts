class Personagem{
    name:string = ""
    life:number = 0
    stamin:number = 0

    constructor(name:string){
        this.life = 100
        this.stamin = 50
        this.name = name
    }

}


let p1:Personagem = new Personagem("Galva")