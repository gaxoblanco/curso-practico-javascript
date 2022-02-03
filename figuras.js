// condigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
};

//console.log("El perimetro del cuadrado es: :" + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
};
console.groupEnd();



console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
};

function areaTriangulo (base, altura){
    return (base * altura) / 2;
};

console.groupEnd();


// condigo del Circulo

console.group("Circulo");

function diametroCirculo (radio){
    return radio * 2;
};
//console.log("El Diametro del Circulo es: " + diametroCirculo + "cm");
const pi = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//console.log("El Perimetro del Circulo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio *radio) *pi
}
//console.log("El Area del Circulo es: " + areaCirculo + "cm");

console.groupEnd();


//llamado funciones cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById ("InputCuadrado");
    const value = input.value;

    const perimetrocuadrado = perimetroCuadrado(value);
    alert(perimetrocuadrado);
}

function calcularAreaCuadrado(){
    const input = document.getElementById ("InputCuadrado");
    const value = input.value;

    const areacuadrado = areaCuadrado(value);
    alert(areacuadrado);
}

//llamado funciones triangulo
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById ("InputTrianguloA");
    const inputB = document.getElementById ("InputTrianguloB");
    const inputC = document.getElementById ("InputTrianguloC");
    const inputAltura = document.getElementById ("InputTrianguloAltura");
    
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueC = inputC.value;
    const valueAltura = inputAltura.value;


    const perimetrotriangulo = perimetroTriangulo(valueA, valueB, valueC);
    alert(perimetrotriangulo);
}

function calcularAreaTriangulo(){
    const inputA = document.getElementById ("InputTrianguloA");
    const inputB = document.getElementById ("InputTrianguloB");
    const inputC = document.getElementById ("InputTrianguloC");
    const inputAltura = document.getElementById ("InputTrianguloAltura");
    
    const valueA = inputA.value;
    const valueB = inputB.value;
    const valueC = inputC.value;
    const valueAltura = inputAltura.value;


    const areatriangulo = areaTriangulo(valueC, valueAltura);
    alert(areatriangulo);
}

//llamado funciones Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById ("InputCirculo");
    const value = input.value;

    const diametrocirculo = diametroCirculo(value);
    alert(diametrocirculo);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById ("InputCirculo");
    const value = input.value;

    const perimetrocirculo = perimetroCirculo(value);
    alert(perimetrocirculo);
}

function calcularAreaCirculo(){
    const input = document.getElementById ("InputCirculo");
    const value = input.value;

    const areacirculo = areaCirculo(value);
    alert(areacirculo);
}


