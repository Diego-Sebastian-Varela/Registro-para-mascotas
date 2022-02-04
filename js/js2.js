let nombre=prompt("Ingresá tu nombre or favor.");
let miDiv=document.getElementById("principal");
miDiv.innerHTML="Hola "+nombre;

let btn=document.getElementById("btn");
btn.addEventListener('click',sumar);


function sumar (){
    let num=Number(prompt("Ingresa tu primer numero"));
    let num2=Number(prompt("Ingresa tu segundo numero"));
    let op= prompt("Escribe \n + para sumar \n - para restar \n * para multiplicar \n / para dividir");
    let resultado=0;
    switch (op) {
        case "+":
            resultado = num+num2;
            miDiv.innerHTML+="<p> El resultado de la suma de "+num+" mas "+num2+ " es: "+resultado+"</p>";
        break;
        case "-":
            resultado = num-num2;
            miDiv.innerHTML+="<p> El resultado de la resta de "+num+" menos "+num2+ " es: "+resultado+"</p>";
        break;
        case "*":
            resultado = num*num2;
            miDiv.innerHTML+="<p> El resultado de multiplicar "+num+" por "+num2+ " es: "+resultado+"</p>";
        break;
        case "/":
            resultado = num/num2;
            miDiv.innerHTML+="<p> El resultado de dividir "+num+" con "+num2+ " es: "+resultado+"</p>";
        break;
        default:
        break;
    }
    
}
