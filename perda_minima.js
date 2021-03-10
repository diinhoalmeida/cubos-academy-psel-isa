function solucao(precos) {
    let prejuizo_conta = 0;
    let prejuizo_final = 0;
    for (i = 0; i < ((precos.length) - 1); i ++) { // deve começar do primero e ir ate o penultimo
        let a = precos[i];
        for (l = i + 1; l < precos.length; l ++) { // deve começar do segundo e ir ate ao ultimo
            let b = precos[l];
            if (a > b) { //valores negativos não são de interesse, já que queremos saber do MENOR prejuizo
                prejuizo_conta = a - b;
                if (l === 1) {
                    prejuizo_final = Math.max.apply(null, precos); // o prejuizo não ultrapassa o valor maximo da array
                } else if (prejuizo_conta < prejuizo_final) {
                    prejuizo_final = prejuizo_conta; 
                }
            } else if (a < b) {
                if (l === 1) {
                    prejuizo_final = Math.max.apply(null, precos); //null representa o escopo global
                }
            }    
        }
    }
    console.log(prejuizo_final);
}