const data = [
        {
        /*menu*/
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        /*q1*/{
            1: { canClick: true, correct: false, content: "Líquido" },
            2: { canClick: true, correct: false, content: "Gasoso" },
            3: { canClick: true, correct: true, content: "Sólido" },
            4: { canClick: true, correct: false, content: "Duro" },
            5: { canClick: false, correct: false, content: "1."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: true, content: "22 de abril de 1500" },
            2: { canClick: true, correct: false, content: "13 de dezembro de 1572" },
            3: { canClick: true, correct: false, content: "1° de junho de 1572" },
            4: { canClick: true, correct: false, content: "22 de maio de 1600" },
            5: { canClick: false, correct: false, content: "2."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "A capacidade de uma classe herdar atributos e métodos de múltiplas classes" },
            2: { canClick: true, correct: false, content: "O mecanismo que restringe o acesso direto aos componentes de um objeto." },
            3: { canClick: true, correct: true, content: "A habilidade de objetos de diferentes classes responderem a uma mesma mensagem de maneira específica." },
            4: { canClick: true, correct: false, content: "O processo de criar uma nova instância de uma classe na memória do computador." },
            5: { canClick: false, correct: false, content: "3."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "3" },
            2: { canClick: true, correct: false, content: "6" },
            3: { canClick: true, correct: false, content: "2" },
            4: { canClick: true, correct: false, content: "5" },
            5: { canClick: true, correct: true, content: "4."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "true" },
            2: { canClick: true, correct: true, content: "false" },
            3: { canClick: true, correct: false, content: "null" },
            4: { canClick: true, correct: false, content: "erro de sintaxe" },
            5: { canClick: false, correct: false, content: "5."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "não há diferenças" },
            2: { canClick: true, correct: false, content: "Contatos únicos para cada modelo." },
            3: { canClick: true, correct: false, content: "Velocidade de leitura de dados" },
            4: { canClick: true, correct: true, content: "Conseguir detectar e corrigir automaticamente erros de dados" },
            5: { canClick: false, correct: false, content: "6."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Ausência de Mamilos." },
            2: { canClick: true, correct: true, content: "Possuem Suor Venenoso" },
            3: { canClick: true, correct: false, content: "Biofluorescência" },
            4: { canClick: true, correct: false, content: "Ser um mamímero ovíparo" },
            5: { canClick: false, correct: false, content: "7."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Nikola Tesla" },
            2: { canClick: true, correct: false, content: "Albert Einstein" },
            3: { canClick: true, correct: false, content: "John von Neumann" },
            4: { canClick: true, correct: false, content: "George Boole" },
            5: { canClick: false, correct: false, content: "8."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: true, correct: true, content: "Allan Turing"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Sasuke" },
            2: { canClick: true, correct: false, content: "Goku" },
            3: { canClick: true, correct: true, content: "Naruto" },
            4: { canClick: true, correct: false, content: "Nagato" },
            5: { canClick: false, correct: false, content: "9."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Arco e Flecha" },
            2: { canClick: true, correct: false, content: "Lança" },
            3: { canClick: true, correct: false, content: "Cajado" },
            4: { canClick: true, correct: false, content: "Foice" },
            5: { canClick: false, correct: false, content: "10."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: true, correct: true, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Clarice Linspector" },
            2: { canClick: true, correct: true, content: "Chico Buarque" },
            3: { canClick: true, correct: false, content: "Drummond" },
            4: { canClick: true, correct: false, content: "Machado de Assis" },
            5: { canClick: false, correct: false, content: "11."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: true, content: "Mauna Kea" },
            2: { canClick: true, correct: false, content: "Everest" },
            3: { canClick: true, correct: false, content: "Mount Rushmore" },
            4: { canClick: true, correct: false, content: "Ultar" },
            5: { canClick: false, correct: false, content: "12."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "15" },
            2: { canClick: true, correct: false, content: "12" },
            3: { canClick: true, correct: true, content: "13" },
            4: { canClick: true, correct: false, content: "16" },
            5: { canClick: false, correct: false, content: ""},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "2224" },
            2: { canClick: true, correct: false, content: "2204" },
            3: { canClick: true, correct: false, content: "2042" },
            4: { canClick: true, correct: false, content: "2024" },
            5: { canClick: false, correct: false, content: "14."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: true, correct: true, content: "2028"}
        },
        {
            1: { canClick: true, correct: false, content: "5" },
            2: { canClick: true, correct: false, content: "30" },
            3: { canClick: true, correct: false, content: "90" },
            4: { canClick: true, correct: true, content: "25" },
            5: { canClick: false, correct: false, content: "15."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "ser uma linguagem puramente linha por linha" },
            2: { canClick: true, correct: false, content: "sintaxe interpretada pelo compilador" },
            3: { canClick: true, correct: true, content: "um bloqueador embutido que impede trabalho paralelo" },
            4: { canClick: true, correct: false, content: "não existe threading" },
            5: { canClick: false, correct: false, content: "16."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "notação pé de galinha" },
            2: { canClick: true, correct: true, content: "notação posicional" },
            3: { canClick: true, correct: false, content: "notação de chen" },
            4: { canClick: true, correct: false, content: "notação numérica" },
            5: { canClick: false, correct: false, content: "17."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "[] == ![]" },
            2: { canClick: true, correct: false, content: "true == 1" },
            3: { canClick: true, correct: true, content: "NaN === NaN" },
            4: { canClick: true, correct: false, content: "Math.min() > Math.max()" },
            5: { canClick: false, correct: false, content: "18."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "pergunta" },
            2: { canClick: true, correct: false, content: "x" },
            3: { canClick: true, correct: true, content: "progress" },
            4: { canClick: true, correct: false, content: "correct" },
            5: { canClick: false, correct: false, content: "19."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Renê Gadelha" },
            2: { canClick: true, correct: false, content: "Guilherme Estevâo" },
            3: { canClick: true, correct: false, content: "Erlon Dantas" },
            4: { canClick: true, correct: false, content: "João Nicollas" },
            5: { canClick: false, correct: false, content: "20."},
            6: { canClick: true, correct: true, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Tower Defense quiz" },
            2: { canClick: true, correct: false, content: "Tudo quiz" },
            3: { canClick: true, correct: false, content: "Todos quiz" },
            4: { canClick: true, correct: true, content: "Tente Denovo quiz" },
            5: { canClick: false, correct: false, content: "21."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        }
    /*Sempre que adicionar uma questão, nescessario alterar valores em credito,pergunta completa e tela final*/
    ];
export default data;

