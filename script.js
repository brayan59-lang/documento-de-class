
document.getElementById("calcularCalorBtn").onclick = function(){
    let T0 =
    parseFloat(document.getElementById("par1").value);

    let Ts =
    parseFloat(document.getElementById("ts").value);

    let k =
    parseFloat(document.getElementById("k").value);

    let t =
    parseFloat(document.getElementById("tiempo").value);
    let temperaturaFinal =
    Ts + (T0 - Ts) * Math.exp(-k * t);
    let resultado =
    Math.round(temperaturaFinal);
    document.getElementById("resultadoCalor").innerHTML =
    "Temperatura final: " + resultado + " °C";

};
   

















document.getElementById("calcularCombinacionesBtn").onclick = function(){
    let n1 =
    parseInt(document.getElementById("n1").value);

    let r1 =
    parseInt(document.getElementById("r1").value);

    let n2 =
    parseInt(document.getElementById("n2").value);

    let r2 =
    parseInt(document.getElementById("r2").value);

    function factorial(numero){
  let resultado = 1

 for(let i = 1; i <= numero; i++){

  resultado = resultado * i;
   }
 return resultado;
    }
 let combinacion1 =
factorial(n1) /
(factorial(r1) *
factorial(n1 - r1));
 let combinacion2 =
factorial(n2) /
(factorial(r2) *
 factorial(n2 - r2));
let total = combinacion1 * combinacion2;
 document.getElementById("resultadoCombinaciones").innerHTML =
  "Total de combinaciones: " + total;

};