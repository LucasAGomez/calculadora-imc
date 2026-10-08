function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    
    let imc = (peso / altura**2)
    let resultado = massaCorporal(imc)

    if(isNaN(imc) || peso < 1 || altura < 1) {
        document.getElementById("imc").textContent = "Algum dos valores foi digitado incorretamente."
        document.getElementById("resultado").textContent = "Revise os valores e tente novamente!"
    } else {
        document.getElementById("imc").textContent = `Seu imc está em ${imc.toFixed(2)}.`
        document.getElementById("resultado").textContent = resultado
    }

}

function massaCorporal (imc) {

    if (imc < 18.6) {
        return "Você está abaixo do peso."
    } else if(imc >= 18.6 && imc < 25) {
        return "Seu peso está normal."
    } else if(imc >= 25 && imc < 30) {
        return "Você está acima do peso."
    } else if(imc >= 30 && imc < 35) {
        return "Você está com obesidade grau 1."
    } else if(imc >= 35 && imc < 40) {
        return "Você está com obesidade grau 2(severa)."
    } else {
        return "Você está com obesidade grau 3(mórbida)."
    }
}