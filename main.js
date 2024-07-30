const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você concorda com a privatização das escolas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Com a privatização, as escolas públicas se tornam mais ágeis e responsivas às necessidades dos alunos, adaptando-se rapidamente às mudanças no cenário educacional e implementando estratégias para promover a equidade e a inclusão."
            },
            {
                texto: "Não",
                afirmacao: "À medida que a privatização avança, as escolas públicas enfrentam uma série de desafios. Recursos são desviados para empresas privadas, deixando as escolas públicas com financiamento insuficiente para atender às necessidades dos alunos. Programas extracurriculares são cortados, turmas são superlotadas e professores são sobrecarregados com demandas administrativas, prejudicando a qualidade do ensino. "
            }
        ]
    },
    {
        enunciado: "No seu ponto de vista a privatização das escolas irá trazer melhorias?",
        alternativas: [
            {
                texto: "Trará melhorias",
                afirmacao: "Programas de bolsas de estudo e assistência financeira são oferecidos para garantir que todos os alunos, independentemente de sua situação econômica, tenham acesso igualitário a uma educação de qualidade.                "
            },
            {
                texto: "Não trará melhorias",
                afirmacao: "Nesta cidade, as escolas públicas são mais do que meros edifícios de ensino. Elas são centros de comunidade, onde se cultivam laços emocionais e onde se promove a diversidade e o respeito mútuo. Os defensores da educação pública temem que a privatização rompa esses laços, transformando as escolas em negócios orientados pelo lucro, onde os interesses financeiros prevalecem sobre as necessidades dos alunos.                "
            }
        ]
    },
    {
        enunciado: "você prefere ?",
        alternativas: [
            {
                texto: "As escola sendo adiministrada por pessoas que passaram por processo seletivo do governo",
                afirmacao: "Além disso, a privatização das escolas públicas pode ampliar as desigualdades educacionais. Alunos de famílias de baixa renda podem ser deixados para trás, incapazes de arcar com os custos adicionais de mensalidades, uniformes ou materiais escolares. A privatização também pode resultar na exclusão de alunos com necessidades especiais, já que as escolas privadas podem não ter os recursos necessários para atender adequadamente a esses alunos.                "
            },
            {
                texto: "As escolas sendo administrada por indústria tercerizada",
                afirmacao: "Além disso, a privatização das escolas públicas traz consigo uma mentalidade empreendedora e uma cultura de inovação, incentivando a concorrência saudável entre as instituições educacionais e promovendo a melhoria contínua da qualidade do ensino. "
            }
        ]
    },
    {
        enunciado: "No seu ponto de vista a escola com a privatização",
        alternativas: [
            {
                texto: "Aumentará a qualidade da educação",
                afirmacao: "Com maior autonomia e flexibilidade, as escolas têm a liberdade de experimentar novas abordagens pedagógicas, parcerias com empresas locais e programas extracurriculares diversificados, enriquecendo a experiência educacional dos alunos.                "
            },
            {
                texto: "Comprometerá a qualidade de ensino",
                afirmacao: "Neste cenário sombrio, os defensores da educação pública permanecem firmes em sua convicção de que a educação é um direito humano fundamental que deve ser protegido e preservado para as gerações futuras. Eles acreditam que as escolas públicas são um pilar da democracia, um lugar onde todos os alunos podem aprender, crescer e prosperar juntos, independentemente de sua origem ou condição social.                "
            }
        ]
    },
    {
        enunciado: "Em um futuro distante você iria querer que seus filhos estudassem em uma escola privatizada?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Neste cenário, a privatização das escolas públicas não apenas aumenta a eficiência e a qualidade do ensino, mas também estimula a transformação positiva do sistema educacional como um todo. Ao promover a inovação, a responsabilidade e o compromisso com o sucesso dos alunos, a gestão privada das escolas públicas se torna uma força motriz para o avanço da educação e o desenvolvimento de uma sociedade mais próspera e equitativa.                "
            },
            {
                texto: "Não",
                afirmacao: "Enquanto a batalha pela educação pública continua, a comunidade escolar permanece unida em sua determinação de resistir à privatização e defender o direito de todos os alunos a uma educação de qualidade, equitativa e inclusiva. Pois, para eles, a educação pública não é apenas uma opção, mas sim um imperativo moral que define o caráter de uma sociedade justa e democrática.                "
            }
        ]
    },
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
    caixaPerguntas.textContent = "SEU RESULTADO";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();