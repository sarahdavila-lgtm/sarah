// Seleciona os elementos do HTML
const button = document.getElementById('action-btn');
const message = document.getElementById('message');

// Adiciona um evento de clique ao botão
button.addEventListener('click', () => {
    // Alterna a classe 'hidden' para mostrar ou esconder a mensagem
    message.classList.toggle('hidden');
    
    // Altera o texto do botão dependendo do estado
    if (message.classList.contains('hidden')) {
        button.textContent = 'Clique Aqui';
    } else {
        button.textContent = 'Fechar Mensagem';
    }
});