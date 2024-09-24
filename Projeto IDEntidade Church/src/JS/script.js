// script.js

// Função para criar o efeito de fade in na página
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    fadeIn(document.body, 1000);
});

function fadeIn(element, duration) {
    let opacity = 0;
    let interval = 50;
    let increment = interval / duration;

    function step() {
        opacity += increment;
        if (opacity <= 1) {
            element.style.opacity = opacity;
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

// Adiciona um alerta de confirmação ao botão de inscrição
document.getElementById("inscrevaBtn").addEventListener("click", function(event) {
    let confirmacao = confirm("Tem certeza que deseja se inscrever para a audição?");
    if (!confirmacao) {
        event.preventDefault(); // Impede que o link seja seguido se o usuário cancelar
    }
});

