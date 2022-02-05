//promedio aritmetica

const lista1 = [
    100,
    200,
    300,
    500,
];

//let = variable que podemos modificar en el futuro
let sumaLista1 = 0;
// for se va a ejecutar hasta que i sea un numero menor al de la lista
    for(let i = 0; i< lista1.length; i ++){
    //lista1 con los [i] llama a la posicion de la lista.
        sumaLista1 = sumaLista1 + lista1[i];
    };

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    //for(let i = 0; i< lista.length; i ++){
     //   sumaLista = sumaLista + lista[i];
    //};


    //---------Metodo reducido para calcular el array----------//
//reduce recibe una funciona y este metodo nos permite ir sumando cada uno de nuestros elementos
    const sumaLista = lista.reduce(
        // valor acumulado es la suma de las iteraciones
function (valorAcumulado = 0, nuevoElemento){
     return valorAcumulado + nuevoElemento;
        }   
    );

const promedioLista = sumaLista / lista.length;
return promedioLista;
}

/// termina promedio aritmetica 



// Promedio Mediana
const lista2 = [
    250,
    160,
    400,
    5000000,
];

const mitadLista2 = lista2.length / 2;

function esPar(numerito){
//esto dice que si al divdir NO tiene decimales es un numero par. => 6/2 = 3 (tres es un numero entero,) 5/2 = 2.5 (2.5 es con decimales)
    if(numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}
//primero que nada tenemos que saber si la lista es par o inpar, si es para el centro de la lista son 2 elementos que se suman y dividen a la mitadLista2

if (lista2 es par?){
    //necesutamos dos elementos
    // -> el promedio
    // -> mediana

}else{
    //posicion mitadLista2 dentro lista2.
}
