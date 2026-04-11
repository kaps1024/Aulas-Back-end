function criarContador() {
    let cont = 0;

    return function() {
        cont++;
        console.log(cont);
    };
}

const clicar = criarContador();

clicar();
clicar();
clicar();