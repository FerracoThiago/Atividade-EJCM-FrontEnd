function trocar_visibilidade_senha(id_input,id_mostra,id_esconde) {
    const input = document.getElementById(id_input);
    const mostra = document.getElementById(id_mostra);
    const esconde = document.getElementById(id_esconde);

    if (input.type === 'password') {
        input.type = 'text';
        mostra.style.display = 'none';
        esconde.style.display = 'block';
    } else {
        input.type = 'password';
        mostra.style.display = 'block';
        esconde.style.display = 'none';
    }
}