

function calcularPrecioConDescuento (precio, descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
};


function ButtonPricesDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
//Opcion para cupones
    const cupones= ["Platzi10", "Platzi15", "Platzi25", "Platzi30", "Platzi50"];
    
    if (InputDiscount = 15 ){
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio final es $" + precioConDescuento;
    }else {
        if(!copunes.includes(InputDescuento)){
        resultP.innerText = "Cupon Invalido" + precioConDescuento;
            }else{switch (InputDescuento){
                case "Platzi10":
                    const precioConDescuento = calcularPrecioConDescuento (priceValue, 10);
                    const resultP = document.getElementById("ResultP");
                    resultP.innerText = "El precio final es $" + precioConDescuento;
                break;

                case "Platzi15":
                    const precioConDescuento = calcularPrecioConDescuento(priceValue, 15);
                    const resultP = document.getElementById("ResultP");
                    resultP.innerText = "El precio final es $" + precioConDescuento;
                break;

                case "Platzi25":
                    const precioConDescuento = calcularPrecioConDescuento(priceValue, 25);
                    const resultP = document.getElementById("ResultP");
                    resultP.innerText = "El precio final es $" + precioConDescuento;
                break;

                case "Platzi30":
                    const precioConDescuento = calcularPrecioConDescuento(priceValue, 30);
                    const resultP = document.getElementById("ResultP");
                    resultP.innerText = "El precio final es $" + precioConDescuento;
                break;

                case "Platzi50":
                    const precioConDescuento = calcularPrecioConDescuento(priceValue, 50);
                    const resultP = document.getElementById("ResultP");
                    resultP.innerText = "El precio final es $" + precioConDescuento;
                break;
                }
            }

    }

}


