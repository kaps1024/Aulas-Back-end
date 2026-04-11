function criarCofre(senhaInicial) {
    let senhaPrivada = senhaInicial;

    return {
        validar: function(tentativa) {
            return tentativa === senhaPrivada;
        },
        alterarSenha: function(velha, nova) {
            if (velha === senhaPrivada) {
                senhaPrivada = nova;
                return "Senha alterada com sucesso!";
            }
            return "Senha antiga incorreta. Ação negada.";
        }
    };
}

const meuCofre = criarCofre("1234");

console.log(meuCofre.validar("1234"));
console.log(meuCofre.alterarSenha("1234", "abcd"));
console.log(meuCofre.validar("1234"));
console.log(meuCofre.senhaPrivada);