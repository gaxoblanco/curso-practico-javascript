// condigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: :" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: :" + areaCuadrado + "cm2");
console.groupEnd();

// condigo del triangulo

console.group("Triangulo");

const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const BaseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " 
    + ladoTrianguloA + "cm, " 
    + ladoTrianguloB + "cm, " 
    + BaseTriangulo + "cm"
);

console.log("El Area del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + BaseTriangulo
console.log("El perimetro del Triangulo es: :" + perimetroTriangulo + "cm");


const areaTriangulo = (BaseTriangulo * alturaTriangulo) /2;
console.log("El Area del Triangulo es: " + areaTriangulo + "cm");

console.groupEnd();

// condigo del Circulo

console.group("Circulo");

const radio = 4;
console.log("El Radio del Circulo es: " + radio + "cm");
const diametroCirculo = radio * 2;

console.log("El Diametro del Circulo es: " + diametroCirculo + "cm");
const pi = Math.PI;
console.log("PI es: " + radio + "pi");

const perimetroCirculo = diametroCirculo * pi;
console.log("El Perimetro del Circulo es: " + perimetroCirculo + "cm");

const areaCirculo = (radio * radio) * pi;
console.log("El Area del Circulo es: " + areaCirculo + "cm");

console.groupEnd();