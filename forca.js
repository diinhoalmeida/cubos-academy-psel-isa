function solucao(palpite, palavra) {
    let soma = 0;
	for (i = 0; i < palavra.length; i ++) {
        let letra1 = palavra[i];
        for (l = 0; l < palpite.length; l ++) {
            let letra2 = palpite[l];
            if (letra1 === letra2) {
                soma ++;
            }
        }
    }
    console.log(soma);
}