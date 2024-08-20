interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

function filtrarCarrosPorAno(carros: Carro[], ano: number): Carro[] {
    return carros.filter(carro => carro.ano > ano);
}

const carros: Carro[] = [
    { marca: "Toyota", modelo: "Corolla", ano: 2010 },
    { marca: "Honda", modelo: "Civic", ano: 2015 },
    { marca: "Ford", modelo: "Focus", ano: 2018 },
    { marca: "Chevrolet", modelo: "Cruze", ano: 2012 }
];

const carrosApos2012 = filtrarCarrosPorAno(carros, 2012);
console.log(carrosApos2012);  

