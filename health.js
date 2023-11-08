/**
 * APP Health
 * @author Professor José de Assis
 */

let peso, altura, idade, imc, fcm;

function calcularIMC() {
    peso = frmIMC.txtPeso.value;
    altura = frmIMC.txtAltura.value;
    idade = frmIMC.txtIdade.value
    imc = peso / (altura * altura)
    //validação dos usuarios

    if (frmIMC.txtIdade.value === "") {
        alert("Preencha a idade")
        frmIMC.txtIdade.focus()
    } else if (frmIMC.txtAltura.value === "") {
        alert("Preencha a Altura")
        frmIMC.txtAltura.focus()
    } else if (frmIMC.txtPeso.value === "") {
        alert("Preencha o Peso")
        frmIMC.txtPeso.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o Sexo")
    } else if (frmIMC.nivel.value === "") {
        alert("Selecione o nivel de atividade")
        frmIMC.nivel.focus()
    } else {
        //adiciona um texto no documento com o id #imc
        document.getElementById("imc").innerHTML = (`IMC: ${imc.toFixed(2)}`)
        if (imc < 18.5) {
            document.getElementById('status').innerHTML = "Status: Abaixo do Peso";
            document.getElementById('grafico').src = "icons/baixo.png"
        } else if (imc < 25) {
            document.getElementById('status').innerHTML = "Status: Peso Normal";
            document.getElementById('grafico').src = "icons/normal.png"
        } else if (imc < 30) {
            document.getElementById('status').innerHTML = "Status: Sobrepeso";
            document.getElementById('grafico').src = "icons/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById('status').innerHTML = "Status: Obesidade Grau I";
            document.getElementById('grafico').src = "icons/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById('status').innerHTML = "Status: Obesidade Grau II";
            document.getElementById('grafico').src = "icons/obesidade2.png"
        } else {
            document.getElementById('status').innerHTML = "Status: Obesidade severa";
            document.getElementById('grafico').src = "icons/obesidadeExtrema.png"
        }

        //FCM - Formula de Tanaka
        fcm = 208 - (0.7 * idade)
        document.getElementById('freq').innerHTML = (fcm)
        document.getElementById('freq').src = "icons/heart.png.png"

        //TMB - Formula de Harris Benedict
        //Variaveis locais para capturar o conteúdo da lista (vetor)
        let select = document.getElementById("atividade")
        let opcaoValor = Number(select.options[select.selectedIndex].value)
        // let opcao = select.options[select.selectedIndex].text

        if (document.getElementById("m").checked === true) {
            tmb = 66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade)) * opcaoValor
        }
        if (document.getElementById("m").checked === true) {
            tmb = 655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade)) * opcaoValor
        }

        document.getElementById("calorias").innerHTML = (tmb.toFixed(2)+"Kcal")

    }
}

function limpar() {
    document.getElementById("imc").innerHTML = "IMC: "
    document.getElementById('status').innerHTML = "Status:";
    document.getElementById('freq').innerHTML = "";
    document.getElementById('grafico').src = "icons/reset.png";
}
