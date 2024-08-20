function imprimirQuadro(strings: string[]): void {
    const maxLength = Math.max(...strings.map(str => str.length));
    const border = '*'.repeat(maxLength + 4);

    console.log(border);
    strings.forEach(str => {
        console.log(`* ${str.padEnd(maxLength, ' ')} *`);
    });
    console.log(border);
}


let palabras: string[] = ["Hello", "World", "in", "a", "frame"];
imprimirQuadro(palabras);
