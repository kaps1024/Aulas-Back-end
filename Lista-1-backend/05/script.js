let aluno = {
    nome: "João",
    notas: [8.0, 7.5, 9.5]
};

let soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2];
let media = soma / aluno.notas.length;

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}