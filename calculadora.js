function adicionarNumeros(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 + num2;

    document.getElementById("resultado").value = resultado;

}

function subtrairNumeros(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado").value = resultado;
}