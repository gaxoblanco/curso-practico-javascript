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