let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML =  `<p>${qtdTotalCarne}g de Carne </p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja </p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml de Bebida </p>`
    console.log(qtdTotalCarne)
}

function carnePP(duracao){
    if(duracao >= 6)
        return 650;
    return 400;
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}