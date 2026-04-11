function login(user, pass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pass === "1234") {
                resolve(`Usuário ${user} logado com sucesso!`);
            } else {
                reject("Senha incorreta.");
            }
        }, 2000);
    });
}