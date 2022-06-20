let quantidadeCartas = prompt("Quantas cartas para o jogo?");

let grid = document.querySelector('.grid');

let mesa = document.querySelector('.mesa');

let jogo = [];

let temSelecionado;

let temComparar = false;

let primeiraCarta,segundaCarta;

let contador = 0;

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
            <img class="frente" src="${jogo[i].img}" />
            <img class="verso" src="imagens/front.png" onclick="mostraCarta(this)"  id="${jogo[i].nome}" />
        </div>`;
    }
}

preparaJogo ();

function desvira (){
    primeiraCarta.parentNode.classList.remove('revelada');
    segundaCarta.parentNode.classList.remove('revelada');
}

function vitoria () {
    alert(`Parabeeens!! voce ganhou em ${contador} tentativas`);
}


function mostraCarta (elemento){

    elemento.parentNode.classList.add('revelada');

    if(temComparar == false){
        temComparar = true;
        primeiraCarta = elemento

    } else{
        temComparar = false;
        segundaCarta = elemento;
        contador++

        

        if(primeiraCarta.id !== segundaCarta.id){
            console.log('e diferente');
            console.log(primeiraCarta,segundaCarta)

            setTimeout(desvira, 1000)



        }else{
            console.log('e igual');
        }
    }


    if (document.querySelectorAll('.revelada').length == quantidadeCartas){
        setTimeout(vitoria,500);
    }


}