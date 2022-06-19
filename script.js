let quantidadeCartas = prompt("Quantas cartas para o jogo?");
while (quantidadeCartas % 2 != 0 || quantidadeCartas > 14){
    alert("insira um numero valido. 14 ou menos e par!");
    quantidadeCartas = prompt("Quantas cartas para o jogo?");
}