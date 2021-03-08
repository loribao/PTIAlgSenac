const main = () => {
    let querFazerOutroCalculo = false;
    let eficiencia = 0.7;
    let calcular = (alcool, gasolina) => {
        let relacao = alcool / gasolina;
        if (relacao > eficiencia) {
            return "Vale a pena a gasolina."
        }
        else if (relacao == eficiencia) {
            return "Tanto faz abastecer com um ou outro"
        }
        return "vale a pena o álcoo"
    }
    let validaEntrada = (entrada) => typeof (entrada) === 'boolean' || typeof (entrada) === 'number' ? true : false
    try {
        do {
            let lerDoNavegadorViaPrompt = prompt//arrumando a nomenclatura
            let precoAlcool = lerDoNavegadorViaPrompt("Qual é o valor do alcool?");
            if (!validaEntrada(precoAlcool)) {
                return;
            }
            let precoGasolina = lerDoNavegadorViaPrompt("Qual é o valor da gasolina?");
            if (!validaEntrada(precoGasolina)) {
                return;
            }
            alert(calcular(precoAlcool, precoGasolina))
            querFazerOutroCalculo = window.confirm('Fazer outro calculo?');
            if (!validaEntrada(querFazerOutroCalculo)) {
                return;
            }
        } while (querFazerOutroCalculo);
    } catch (error) {
        const readline = require("readline");
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        const lerDoNodeJs = () => {
            rl.question("Qual é o valor do alcool?", function (alcool) {
                rl.question("Qual é o valor da gasolina? ", function (gasolina) {
                    validaEntrada(alcool) && validaEntrada(gasolina) ? console.log(calcular(alcool, gasolina)) : console.log('Apenas valores decimais ou inteiros. Ex: 10.50');
                    rl.question("Digite 's' para repetir ou qualquer tecla para sair ", function (_querFazerOutroCalculo) {
                        querFazerOutroCalculo = _querFazerOutroCalculo
                        rl.pause();
                    });
                });

            });
        }
        lerDoNodeJs();
        rl.on("pause", function () {
            if (querFazerOutroCalculo == 'S' || querFazerOutroCalculo == 's') {
                lerDoNodeJs();
            } else {
                process.exit(0);
            }
        });
    }
}
main();