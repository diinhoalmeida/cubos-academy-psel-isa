function solucao(stringCorrompida) {
    const dicio = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]; //dicionario de caracteres a serem retirados
    let frase = stringCorrompida; 
    for (i=0; i < frase.length; i++) { 
        for (l=0; l < dicio.length; l++) { //comparação da letra do primeiro for com cada uma do 'dicio'
            if (frase[i] === dicio[l]) {
                frase = frase.replace(dicio[l], "") //se letra igual a do 'dicio', entao replace por vazio   
            }
        }
    }
    console.log(frase); //imprime frase limpa de caracteres do dicio
}