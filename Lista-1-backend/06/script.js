function cumprimento(nome, horario) {
    if (horario >= 6 && horario < 12) {
        console.log(`Bom dia, ${nome}.`);
    } else if (horario >= 12 && horario < 18) {
        console.log(`Boa tarde, ${nome}.`);
    } else {
        console.log(`Boa noite, ${nome}.`);
    }
}

cumprimento("João", 14);