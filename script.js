let quantidadeCartas = prompt("Quantas cartas para o jogo?");

let grid = document.querySelector('.grid');

let mesa = document.querySelector('.mesa');

let jogo = [];

let cartas = [
    {nome: "bobrossparrot",
    img: "imagens/bobrossparrot.gif"

    },
    {nome: "bobrossparrot",
    img: "imagens/bobrossparrot.gif"

    },
    {nome: "explodyparrot",
    img: "imagens/explodyparrot.gif"

    },
    {nome: "explodyparrot",
    img: "imagens/explodyparrot.gif"

    },
    {nome: "fiestaparrot",
    img: "imagens/fiestaparrot.gif"

    },
    {nome: "fiestaparrot",
    img: "imagens/fiestaparrot.gif"

    },
    {nome: "metalparrot",
    img: "imagens/metalparrot.gif"

    },
    {nome: "metalparrot",
    img: "imagens/metalparrot.gif"

    },
    {nome: "revertitparrot",
    img: "imagens/revertitparrot.gif"

    },
    {nome: "revertitparrot",
    img: "imagens/revertitparrot.gif"

    },
    {nome: "tripletsparrot",
    img: "imagens/tripletsparrot.gif"

    },
    {nome: "tripletsparrot",
    img: "imagens/tripletsparrot.gif"

    },
    {nome: "unicornparrot",
    img: "imagens/unicornparrot.gif"

    },
    {nome: "unicornparrot",
    img: "imagens/unicornparrot.gif"

    }
]

function comparador() { 
	return Math.random() - 0.5; 
}




function preparaJogo (){


    while (quantidadeCartas % 2 != 0 || quantidadeCartas > 14 || quantidadeCartas < 4){

        alert("insira um numero valido. Entre 14 e 4, e par!");
        quantidadeCartas = prompt("Quantas cartas para o jogo?");
    }

    for (let i = 0; i < quantidadeCartas; i++){
        jogo.push (cartas[i]) 
    } 

    jogo.sort(comparador);

    for (let i = 0; i < quantidadeCartas; i++){
        mesa.innerHTML += `
        <div class="cartas">
            <img class="frente" src="${jogo[i].img}" onclick="mostraCarta(this)" />
            <img class="verso" src="imagens/front.png" onclick="mostraCarta(this)" />
        </div>`;
    }
}

preparaJogo ();


function mostraCarta (elemento){
 elemento.parentNode.classList.toggle('revelada');
}