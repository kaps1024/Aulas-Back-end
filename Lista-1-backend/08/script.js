function contarLetraA(texto) {
    let cont = 0;
    let textoMinusculo = texto.toLowerCase();

    for (let i = 0; i < textoMinusculo.length; i++) {
        if (textoMinusculo[i] === 'a') {
            cont++;
        }
    }

    return cont;
}

console.log(contarLetraA("Melancia"));