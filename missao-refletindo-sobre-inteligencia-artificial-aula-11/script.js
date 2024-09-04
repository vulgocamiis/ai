const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando pela rua e vê uma pessoa pedindo ajuda. O que você faz?",
        alternativas: [
            {
                texto: "Vou ajudar.",
                afirmacao: "Você anda até ele e ajuda. Em gratidão, ele te oferece um presente."
            },
            {
                texto: "Isso é meio estranho, não vou ajudar.",
                afirmacao: "Você não ajuda, vira as costas e segue o seu caminho."
            }
        ]
    },
    {
        enunciado: "Você encontra um cachorro perdido e sem coleira na rua. Qual é a sua atitude?",
        alternativas: [
            {
                texto: "Tento encontrar o dono ou um abrigo para o cachorro.",
                afirmacao: "Você leva o cachorro com você, e depois de um tempo encontra o dono, que fica muito agradecido."
            },
            {
                texto: "Ignoro e sigo o meu caminho.",
                afirmacao: "Você decide não se envolver e segue seu caminho, imaginando que o dono aparecerá em breve."
            }
        ]
    },
    {
        enunciado: "Em um dia chuvoso, você vê um livro abandonado em um banco do parque. O que você faz?",
        alternativas: [
            {
                texto: "Pego o livro para ler e depois penso em devolver.",
                afirmacao: "Você leva o livro para casa, aproveita a leitura e, depois de um tempo, deixa-o em uma biblioteca comunitária."
            },
            {
                texto: "Deixo o livro lá, pois não é meu.",
                afirmacao: "Você decide que não deve mexer no que não é seu e segue em frente."
            }
        ]
    },
    {
        enunciado: "Ao sair de uma loja, você percebe que o caixa te deu troco a mais. O que você faz?",
        alternativas: [
            {
                texto: "Volto e devolvo o dinheiro.",
                afirmacao: "O caixa agradece imensamente sua honestidade, e você sai de lá se sentindo bem."
            },
            {
                texto: "Não falo nada e guardo o dinheiro.",
                afirmacao: "Você decide não dizer nada, embora sinta uma leve culpa depois."
            }
        ]
    },
    {
        enunciado: "Você vê alguém tentando pegar um ônibus correndo, mas as portas se fecham antes. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Aviso o motorista para abrir a porta.",
                afirmacao: "O motorista abre a porta, e a pessoa agradece pelo gesto de gentileza."
            },
            {
                texto: "Fico em silêncio e sigo meu caminho.",
                afirmacao: "Você assiste de longe enquanto a pessoa perde o ônibus e espera pelo próximo."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
