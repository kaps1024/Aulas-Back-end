function localizarUsuario(usuarios, id) {
    return usuarios.find(usuario => usuario.id === id);
}

let usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
    { id: 3, nome: "Pedro" }
];

console.log(localizarUsuario(usuarios, 2));