// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDolar){
    // convertimos el valor a yenes
    let valueInYenes = valueInDolar * 135.9;
    // retornamos el valor
    return valueInYenes;
}

// declaramos una funcion con el mismo nombre "romYenToPound"
const fromYenToPound = function(valueInYenes){
    // convertimos el valor a libras esterlinas
    let valueInGBP = valueInYenes * 0.006;
    // retornamos el valor
    return valueInGBP;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }