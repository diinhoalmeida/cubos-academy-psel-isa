function solucao(velocidade, aceleracao, distanciaObjeto) {
    const distanciaDerrap = -(velocidade * velocidade) / (2 * aceleracao);
    if (distanciaDerrap > distanciaObjeto) {
        console.log("COLISAO A FRENTE");
    } else if (distanciaDerrap === distanciaObjeto) {
        console.log("NAO ACELERE");
    } else {
        console.log("CAMINHO SEGURO");
    }
}