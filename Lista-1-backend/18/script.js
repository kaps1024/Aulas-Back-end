function removerDuplicata(numeros) {
    return numeros.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });
}