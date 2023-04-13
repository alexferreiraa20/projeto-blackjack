console.log("Bem-vindo ao jogo de Blackjack!");

let iniciarRodada = true
let jogarNovamente = true

while (iniciarRodada) {
  
  const jogar = confirm("Deseja iniciar uma nova rodada?")

  if(!jogar){
      iniciarRodada = false;
      console.log("Fim do jogo!")
  }

  let baralho = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"
  ];

  
  let maoJogador = [baralho[Math.floor(Math.random() * baralho.length)], 
  baralho[Math.floor(Math.random() * baralho.length)]]
  let maoComputador = [baralho[Math.floor(Math.random() * baralho.length)], ""]


  while (maoJogador.includes("A") && maoJogador.reduce((a, b) => parseInt(a) + parseInt(b), 0) > 21) {
    maoJogador = [baralho[Math.floor(Math.random() * baralho.length)], 
    baralho[Math.floor(Math.random() * baralho.length)]];
  }

 
  maoComputador[1] = baralho[Math.floor(Math.random() * baralho.length)]

  console.log("Mão do jogador: " + maoJogador.join(", "))
  console.log("Carta do computador: " + maoComputador[0])

  let comprarCarta = true;

  while (comprarCarta && maoJogador.reduce((a, b) => parseInt(a) + parseInt(b), 0) < 21) {
    comprarCarta = confirm("Deseja comprar mais uma carta?");

    if (comprarCarta) {
      maoJogador.push(baralho[Math.floor(Math.random() * baralho.length)]);
      console.log("Mão do jogador: " + maoJogador.join(", "))
    }
  }

  while (maoComputador.reduce((a, b) => parseInt(a) + parseInt(b), 0) < 17) {
    maoComputador.push(baralho[Math.floor(Math.random() * baralho.length)])
  }

  console.log("Mão do jogador: " + maoJogador.join(", "))
  console.log("Mão do computador: " + maoComputador.join(", "))

  if (maoJogador.reduce((a, b) => parseInt(a) + parseInt(b), 0) > 21) {
    console.log("O jogador perdeu!")
  } else if (maoComputador.reduce((a, b) => parseInt(a) + parseInt(b), 0) > 21) {
    console.log("O computador perdeu!")
  } else if (
      maoJogador.reduce((a, b) => parseInt(a) + parseInt(b), 0) > maoComputador.reduce((a, b) => parseInt(a) + parseInt(b), 0)) {
      console.log("O jogador ganhou!")
  } else {
    console.log("O computador ganhou!")
  }
}
