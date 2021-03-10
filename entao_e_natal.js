function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    let val_ini = 0;
    let val_ini_desc = 0;
    let val_ini1 = 0;
    let val_ini_desc1 = 0;
    let val_ini2 = 0;
    let val_ini_desc2 = 0;
    let val_ini3 = 0;
    let val_tot_cents = 0;
    let val_tot_real = 0;
    let dist = distanciaRestaurante * (1.20 * 100);
    let valor_final = 0;
    let val_tot_cents1 = 0;

    for (i = 0; i < produtos.length; i ++) { //RESULTADOS EM CENTS
        if (produtos[i].categoria === "SALGADO") {
            val_ini = produtos[i].valor * produtos[i].quantidade;
            val_ini_desc = val_ini - ((10 / 100) * val_ini);
        } else if (produtos[i].categoria === "BEBIDA") {
            val_ini1 = produtos[i].valor * produtos[i].quantidade;
            val_ini_desc1 = val_ini1 - ((30 / 100) * val_ini1);    
        } else if (produtos[i].categoria === "DOCE") {
            val_ini2 = produtos[i].valor * produtos[i].quantidade;
            val_ini_desc2 = val_ini2 - ((15 / 100) * val_ini2);    
        } else {
            val_ini3 = produtos[i].valor * produtos[i].quantidade;
        }
    }
    val_tot_cents = val_ini_desc + val_ini_desc1 + val_ini_desc2 + val_ini3;
    val_tot_real = (val_ini_desc + val_ini_desc1 + val_ini_desc2 + val_ini3) / 100;
    if (ehPrimeiraCompra === true) {
        if ((val_tot_real > 30) && (val_tot_real < 45)) { //CONDIÇÃO EM $REAIS
            valor_final = val_tot_cents - ((10 / 100) * val_tot_cents) + dist; //CONTAS EM ÇCENTS       
        } else if ((val_tot_real > 45) && (val_tot_real < 60)) {
            valor_final = val_tot_cents - ((20 / 100) * val_tot_cents) + dist;
        } else if ((val_tot_real > 60) && (val_tot_real < 80)) {
            valor_final = val_tot_cents - ((30 / 100) * val_tot_cents) + dist;
        } else if (val_tot_real > 80) {
            valor_final = val_tot_cents - ((30 / 100) * val_tot_cents);
        } else {
            valor_final = val_tot_cents + dist;
        }
    } else {
        valor_final = val_tot_cents + dist;    
    }
    console.log(valor_final);
}