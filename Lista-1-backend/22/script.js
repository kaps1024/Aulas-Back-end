async function buscarDados() {
    const buscarUsuario = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve({ id: 1, nome: "João" }), 1000);
        });
    };

    const buscarPosts = (usuarioId) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
        });
    };

    const usuario = await buscarUsuario();
    console.log("Usuário:", usuario);

    const postagens = await buscarPosts(usuario.id);
    console.log("Postagens:", postagens);
}

buscarDados();