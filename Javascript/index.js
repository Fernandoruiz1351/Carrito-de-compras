let precio = {
    Raqueta:800,
    Pelota:500,
    Grip:100
}

let interes =[5,7,9,11]

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
            precioItem = precio.Raqueta;
        } 
        else if (producto === "pelota") {
            precioItem = precio.Pelota;
        } 
        else {
            precioItem = precio.Grip;
        }

        total += precioItem;
    }

    console.log(`El total a pagar es: $${round(total,2)}`);

    const cuotas = parseInt(prompt('Puede pagar en 3,6,9 o 12 cuotas¿En cuántas cuotas desea pagar?'));
    if (cuotas===3){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes[0]}%.`);  
        const totalInteres = total * (1+(interes[0]/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else if (cuotas===6){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes[1]}%.`);  
        const totalInteres = total * (1+(interes[1]/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else if (cuotas===9){
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes[2]}%.`);  
        const totalInteres = total * (1+(interes[2]/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }
    else{
        console.log(`la taza de interes para ${cuotas} cuotas es ${interes[3]}%.`);  
        const totalInteres = total * (1+(interes[3]/100));
        const valorCuota= round(totalInteres/cuotas,2)
        console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    }

}

calcularCompra();


