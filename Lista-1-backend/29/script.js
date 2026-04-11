function agendar(msg, tempo) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(msg);
        }, tempo);
    });
}

async function executar() {
    const retorno = await agendar("Alarme", 2000);
    console.log(retorno);
}

executar();