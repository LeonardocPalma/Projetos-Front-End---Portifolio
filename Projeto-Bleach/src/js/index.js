/*
    O que precisamos fazer? - quando clicar no botão do personagem na lista temos que marcar o botão como selecionado e mostrar o pesronagem correpondente.

        Objetivo 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
            passo 1 - pegar os botoes no JS para poder verificar quando o usuário clicar em cima de um deles.
            passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou.
            passo 3 - verificar se ja existe um botao selecionado, se sim, devemos remover a seleção dele.

        Objetivo 2 - quando clicar no botão do personagem mostrar as informações do personagem.
            passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.
            passo 2 - adicinonar a classe "selecionado" no personagem que o usuario selecionou.
            passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
*/

//Objetivo 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
//passo 1 - pegar os botoes no JS para poder verificar quando o usuário clicar em cima de um deles.

const botoes = document.querySelectorAll('.botao');

//Objetivo 2 - quando clicar no botão do personagem mostrar as informações do personagem.
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele.

const personagens = document.querySelectorAll('.personagem');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    })
})


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

