function solucao(jogadas) {
    let soma = 0;
    let soma1 = 0;
    for (i = 0; i < jogadas.length; i++) {
        let plays = jogadas[i];
        if (plays === 0) {
            soma ++;
        } else {
            soma1++
        }
    }
    if (soma === soma1) {
        console.log("true");
    } else {
        console.log("false");
    }
}