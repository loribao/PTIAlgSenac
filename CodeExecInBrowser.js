let main = () => {
    let querFazerOutroCalculo = false;
        let eficiencia = 0.7;
        let calcular = (alcool, gasolina) => {
            let relacao = parseFloat(alcool) / parseFloat(gasolina);
            if (relacao > eficiencia) {return "Vale a pena a gasolina."}
            else if (relacao == eficiencia) {return "Tanto faz abastecer com um ou outro"}
            return "vale a pena o álcoo"
        }
        let validaEntrada = (entrada) => !isNaN(parseFloat(entrada)) || typeof (entrada) == 'boolean' ? true : false
    do {        
        let lerDoNavegadorViaPrompt = prompt//arrumando a nomenclatura
        let precoAlcool = lerDoNavegadorViaPrompt("Qual é o valor do alcool? ");
        if (!validaEntrada(precoAlcool)) {
            alert('Apenas valores decimais ou inteiros. Ex: 10.50');return;
        }
        let precoGasolina = lerDoNavegadorViaPrompt("Qual é o valor da gasolina? ");
        if (!validaEntrada(precoGasolina)) {
            alert('Apenas valores decimais ou inteiros. Ex: 10.50'); return;
        }
        alert(calcular(precoAlcool, precoGasolina))
        querFazerOutroCalculo = window.confirm('Fazer outro calculo? ');
        if (!validaEntrada(querFazerOutroCalculo)) return;
    } while (querFazerOutroCalculo);
}
main()
