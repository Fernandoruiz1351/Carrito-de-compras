const precioRaqueta = 800;
const precioPelota = 500;
const precioGrip = 100;
const interes3=5
const interes6=7
const interes9=9
const interes12=11
let total = 0;
const productos = parseInt(prompt('Ingrese la cantidad de productos a comprar:'));

function round(numero, decimales = 2) {
    const factor = Math.pow(10, decimales);
    return Math.round(numero * factor) / factor;
}

function calcularCompra() {

    for (let i = 0; i < productos; i++) {
        const producto = prompt(`Los productos disponibles son Raqueta, pelota y grip. ¿Cuál es el producto número ${i + 1}?`).toLowerCase();
        let precioItem;

        if (producto === "raqueta") {
            precioItem = precioRaqueta;
        } 
        else if (producto === "pelota") {
            precioItem = precioPelota;
        } 
        else {
            precioItem = precioGrip;
        }

        total += precioItem;
    }

    console.log(`El total a pagar es: $${round(total,2)}`);

    const cuotas = parseInt(prompt('Puede pagar en 3,6,9 o 12 cuotas¿En cuántas cuotas desea pagar?'));
    if (cuotas===3){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes3}%.`);  
        const totalInteres = total * (1+(interes3/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else if (cuotas===6){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes6}%.`);  
        const totalInteres = total * (1+(interes6/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else if (cuotas===9){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes9}%.`);  
        const totalInteres = total * (1+(interes9/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else{
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes12}%.`);  
        const totalInteres = total * (1+(interes12/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }

}

calcularCompra();


