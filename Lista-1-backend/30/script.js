function validarJSON(str) {
    try {
        return JSON.parse(str);
    } catch (erro) {
        return {
            status: "erro",
            mensagem: "String JSON inválida"
        };
    }
}

const jsonValido = '{"nome": "Pedro", "idade": 25}';
const jsonInvalido = '{"nome": "Pedro", idade: 25}';

console.log(validarJSON(jsonValido));
console.log(validarJSON(jsonInvalido));