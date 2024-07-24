// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#produtos button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});
