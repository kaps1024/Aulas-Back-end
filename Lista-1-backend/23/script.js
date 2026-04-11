const apiSimulada = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 
                ? resolve("Dados recebidos!") 
                : reject("Falha na conexão");
        }, 1000);
    });
};

async function consumirAPI() {
    try {
        const resposta = await apiSimulada();
        console.log("Sucesso:", resposta);
    } catch (erro) {
        console.error("Algo deu errado:", erro);
    }
}

consumirAPI();