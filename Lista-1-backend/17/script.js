function sortearNome(nomes) {
    let indiceAleat = Math.floor(Math.random() * nomes.length);
    return nomes[indiceAleat];
}

let participantes = ["João", "Maria", "Pedro", "Isabel", "Camila"];
console.log(sortearNome(participantes));