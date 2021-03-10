function solucao(ganhos, serasaScore, mesesParaPagar) {
    let juros = 0;
    let parcela = 0;
    if (serasaScore < 300) {
        juros = 3;
        parcela = (((ganhos * 3) + (ganhos * (juros / 100))) / mesesParaPagar);
    } else if (serasaScore < 700) {
        juros = 9;
        parcela = (((ganhos * 3) + (ganhos * (juros / 100))) / mesesParaPagar);
    } else {
        juros = 15;
        parcela = (((ganhos * 3) + (ganhos * (juros / 100))) / mesesParaPagar);
    }
    console.log(parcela);
}