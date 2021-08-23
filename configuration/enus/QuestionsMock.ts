import { IQuestion } from "../interfaces/Question";

//Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string:any) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

if(typeof String.prototype.replaceAll == "undefined") {
    String.prototype.replaceAll = function(match, replacement:any){
        return this.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
    }
}

const questions: IQuestion[] = [
    {
        id: "Q1",
        title: "Questão 1",
        description: "A ocitocina é um hormônio produzido no cérebro, que tem papel importante para facilitar o parto e a amamentação, mas também pode ser encontrada em farmácias, na forma de cápsulas, líquida ou em spray. Ela também é conhecida como hormônio do amor, devido ao seu papel para a melhora do humor, da interação social, diminuição da ansiedade e aumento da ligação entre parceiros. Observe a estrutura desta biomolécula e informe qual função orgânica mais aparece em sua estrutura: ",
        options: [
            {
                id: "A",
                description: "Ácido carboxílico"
            },
            
            {
                id: "B",
                description: "Éter"
            },
            
            {
                id: "C",
                description: "Fenol"
            },

            {
                id: "D",
                description: "Amina"
            },

            {
                id: "E",
                description: "Amida"
            }
        ],

        asset: require(`../../assets/images/questions/asset1.jpg`),

        correctAnswer: "E",
        
        correctAnswerInformation: {
            title: "Resposta correta!",
            description: "Bom trabalho."
        },
        
        wrongAnswerInformation: {
            title: "Resposta errada!",
            description: String(`RESOLUÇÃO: Amidas (função amida) são compostos
                orgânicos derivados de ácidos carboxílicos pela
                substituição da hidroxila (-OH) pelo grupamento amino (—
                NH). Neste contexto, observando a imagem encontramos vários
                nitrogênios e perto de cada um está presente uma
                carbonila (C = 0), desta forma caracterizando uma função
                amida. Nesta figura existe cerca de 11 amidas.`).replaceAll('\n', '')
        },

        answerAsset: require(`../../assets/images/questions/asset1w.jpeg`),

        nextQuestion: "Q2"
    },
    
    {
        id: "Q2",
        title: "Questão 2",
        description: "A tabela periódica é uma forma de organizar e apresentar algumas informações sobre todos elementos químicos que existem. A organização é feita com base na ordem crescente do número atômico (número de prótons no átomo), na configuração eletrônica dos átomos dos elementos, e também de forma a facilitar o entendimento de propriedades químicas semelhantes. A Tabela Periódica apresenta sete colunas horizontais, portanto, sete períodos, que indicam a quantidade de níveis que um átomo de um elemento apresenta. Isso quer dizer que, quanto maior o número do período do elemento, maior será a quantidade de níveis que cada um dos átomos do elemento apresenta. As colunas verticais, que são em número de 18, são denominadas de famílias. A Tabela apresenta 18 colunas, que formam apenas 16 famílias divididas em oito do tipo A e oito do tipo B.\nO quadrado em vermelho representa um elemento X, de número atômico Z=16 e número de  atômica A= 32. De acordo com o enunciado e a figurada tabela periódica, marque a única alternativa correta:",
        options: [
            {
                id: "A",
                description: "O elemento X pertence à família dos metais alcalinos terrosos."
            },
            
            {
                id: "B",
                description: "O elemento X é isotono do elemento  11Y43"
            },
            
            {
                id: "C",
                description: "Quando comparado ao Na (Sódio), o elemento X é mais eletronegativo."
            },

            {
                id: "D",
                description: "O elemento X é um metal."
            },

            {
                id: "E",
                description: "O elemento X possui um raio atômico menor que nitrogênio."
            }
        ],

        asset: require(`../../assets/images/questions/asset2.png`),

        correctAnswer: "C",
        
        correctAnswerInformation: {
            title: "Resposta correta!",
            description: "Bom trabalho"
        },
        
        wrongAnswerInformation: {
            title: "Resposta errada!",
            description: String(`RESOLUÇÃO: O elemento X mostrado na questão pertence à família 6º,
            família denominada de calcogênios e não metais alcalinos
            terrosos, por isso a alternativa A está incorreta. Na
            alternativa B, o elemento X não é isotono (mesmo número
            de nêutrons) do elemento Y, pois, o número de nêutrons do
            clemento X é I6 (N = 32 —- 16 = 16) e o número de
            nêutrons do elemento Y é 32 (N = 43 - 11 = 32), logo esta
            alternativa está incorreta. A alternativa D está crrada, pois
            o elemento X é um ametal. O clemento X possui um
            número atômico maior que o nitrogênio, desta forma
            possui um raio atômico maior (neste caso), assim a
            alternativa E está incorreta.`).replaceAll('\n', '')
        },

        nextQuestion: "Q3"
    },

    {
        id: "Q3",
        title: "Questão 3",
        description: "O decaimento radioativo natural ocorre quando o núcleo do átomo de algum elemento químico é instável e, então, ele como que “se parte”, liberando radiações eletromagnéticas e desintegrando-se. Um núcleo é instável quando ele possui mais de 84 prótons (todos os elementos com número atômico (Z) igual ou superior a 84, isto é, do polônio em diante).  Isso acontece porque os prótons possuem carga positiva e repelem-se mutuamente, assim, eventualmente o núcleo desestabiliza-se e desintegra-se, tendo em vista que as forças que mantêm o núcleo unido são insuficientes para combater as forças de repulsão entre essa grande quantidade de prótons.\nAnalise a representação abaixo e, a partir de sua análise, marque a alternativa correta:",
        options: [
            {
                id: "A",
                description: "Para que o elemento X se transformasse no elemento Y, foi liberado quatro partículas."
            },
            
            {
                id: "B",
                description: "Na representação acima, a única partícula liberada é o , pois possui maior energia e velocidade quando comparada a qualquer outra partícula emitida."
            },
            
            {
                id: "C",
                description: "A única partícula no decaimento radioativo capaz de modificar a massa de um elemento é a , vemos nitidamente isso, na transformação do elemento Y em Z e B em K."
            },

            {
                id: "D",
                description: "No decaimento radioativo representado o número de massa diminuiu 28 u, logo foi liberado 12 partículas alfas. "
            },

            {
                id: "E",
                description: "Na representação acima é impreciso determinar as partículas liberadas, pois os números apresentados apresentam falhas para a determinação das partículas participantes."
            }
        ],

        correctAnswer: "C",
        
        correctAnswerInformation: {
            title: "Resposta correta!",
            description: "Bom trabalho"
        },
        
        wrongAnswerInformation: {
            title: "Resposta errada!",
            description: String(`RESOLUÇÃO: Quando uma partícula beta é liberada
            apenas o número atômico é modificado, pois um néutron
            acaba sendo convertido em um próton. Quando uma
            partícula alfa é liberada, existe tanto uma modificação no
            número de massa, porque neste caso a partícula liberada é
            bem maior e possui uma massa caracteristica, assim
            quando ela é liberada o elemento fica mais leve e também
            acaba alterando o número atômico, pois neste caso, dois
            prótons compõe a partícula. A alternativa A está incorreta,
            pelo fato de não ter alteração na massa do elemento, logo
            não foi liberado partículas alfas, mas sim uma partícula
            beta. A alternativa B está incorreta, pois, não é liberada
            apenas a partícula beta, mas também partículas alfas.
            Alternativa D está errada, pelo fato de que foram
            exatamente 6 partículas alfas liberadas (24/4 = 6). A
            alternativa E está incorreta, pois na interpretação é capaz
            de determinar a quantidade de partículas alfas e betas que
            foram liberadas neste decaimento radioativo.`).replaceAll('\n', '')
        }
    }
];

export default questions;
