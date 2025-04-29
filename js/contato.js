document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        const nome = document.querySelector('input[name="nome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mensagem = document.querySelector('textarea[name="mensagem"]').value;

        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            e.preventDefault();
            alert('Por favor, preencha todos os campos.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            e.preventDefault();
            alert('Por favor, insira um e-mail válido.');
        }
    });
});