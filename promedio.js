//promedio aritmetica

const lista1 = [
    800,
    650,
    300,
    500,
];
lista1.sort();

//let = variable que podemos modificar en el futuro
let sumaLista1 = 0;
// for se va a ejecutar hasta que i sea un numero menor al de la lista
    for(let i = 0; i< lista1.length; i ++){
    //lista1 con los [i] llama a la posicion de la lista.
        sumaLista1 = sumaLista1 + lista1[i];
    };

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista){
//referencia
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
lista2.sort(
    function (valorAcumulado, nuevoValor){
        valorAcumulado - nuevoValor
    });

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numerito){
//esto dice que si al divdir NO tiene decimales es un numero par. => 6/2 = 3 (tres es un numero entero,) 5/2 = 2.5 (2.5 es con decimales)
    if(numerito % 2 === 0){
        return true;
    } else{
        return false;
    }
}
//primero que nada tenemos que saber si la lista es par o inpar, si es para el centro de la lista son 2 elementos que se suman y dividen a la mitadLista2




function calcularMediana(lista2){
    let mediana; // resultado
    if (esPar(lista2.length)){
        const elemento1 = lista2[mitadLista2 - 1];//necesutamos dos elementos
        const elemento2 = lista2[mitadLista2];
        
        const promedioElemento1y2 = calcularMediaAritmetica([ //llamo la primer funcion, para sacar la aritmetica
            elemento1,
            elemento2,
        ]);
        
        mediana =promedioElemento1y2; // -> mediana
    
    // --------> el promedio
    
    }else{
       mediana = lista2[mitadLista2]; //posicion mitadLista2 dentro lista2. -- guardo la media en media
    }
    return mediana;
};









// ------- Calcular la moda 
function calcularModa(lista3){
    //objeto
    const lista3Count = {};

    lista3.map(
        function(elemento){
            if(lista3Count[elemento]){
                lista3Count[elemento] += 1;
            }else{
                lista3Count[elemento] = 1;
            }
        }
    );
    //convierte el objeto que creamos en array
    const lista3Array = Object.entries(lista3Count).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    )

    const moda = lista3Array[lista3Array.length -1];
    return moda;
}
