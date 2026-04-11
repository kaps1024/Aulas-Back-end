function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    }
}

const dobrar = criarMultiplicador(2);
console.log(dobrar(10));