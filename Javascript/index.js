// let precio = {
//     Raqueta:800,
//     Pelota:500,
//     Grip:100
// }

// let interes =[5,7,9,11]

// let total = 0;
// const productos = parseInt(prompt('Ingrese la cantidad de productos a comprar:'));



//  {

//     for (let i = 0; i < productos; i++) {
//         const producto = prompt(`Los productos disponibles son Raqueta, pelota y grip. ¿Cuál es el producto número ${i + 1}?`).toLowerCase();
//         let precioItem;

//         if (producto === "raqueta") {
//             precioItem = precio.Raqueta;
//         } 
//         else if (producto === "pelota") {
//             precioItem = precio.Pelota;
//         } 
//         else {
//             precioItem = precio.Grip;
//         }

//         total += precioItem;
//     }

//     console.log(`El total a pagar es: $${round(total,2)}`);

//     const cuotas = parseInt(prompt('Puede pagar en 3,6,9 o 12 cuotas¿En cuántas cuotas desea pagar?'));
//     if (cuotas===3){
//         console.log(`la taza de interes para ${cuotas} cuotas es ${interes[0]}%.`);  
//         const totalInteres = total * (1+(interes[0]/100));
//         const valorCuota= round(totalInteres/cuotas,2)
//         console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
//     }
//     else if (cuotas===6){
//         console.log(`la taza de interes para ${cuotas} cuotas es ${interes[1]}%.`);  
//         const totalInteres = total * (1+(interes[1]/100));
//         const valorCuota= round(totalInteres/cuotas,2)
//         console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
//     }
//     else if (cuotas===9){
//         console.log(`la taza de interes para ${cuotas} cuotas es ${interes[2]}%.`);  
//         const totalInteres = total * (1+(interes[2]/100));
//         const valorCuota= round(totalInteres/cuotas,2)
//         console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
//     }
//     else{
//         console.log(`la taza de interes para ${cuotas} cuotas es ${interes[3]}%.`);  
//         const totalInteres = total * (1+(interes[3]/100));
//         const valorCuota= round(totalInteres/cuotas,2)
//         console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
//     }

// }

// 


function round(numero, decimales = 2) {
    const factor = Math.pow(10, decimales);
    return Math.round(numero * factor) / factor;
}

function item(categoria,marca,color,precio){
    this.categoria= categoria
    this.marca=marca
    this.color=color
    this.precio=precio
}

let raqueta1= new item("raqueta","Babolat","azul",800);
let raqueta2= new item("raqueta","Wilson","roja",1000);
let raqueta3= new item("raqueta","Head","blanca",1200);
let pelota1=new item("pelota","Penn","verde",300);
let pelota2=new item("pelota","Wilson","verde",350);
let pelota3=new item("pelota","Head","verde",400);
let grip1=new item("grip","Acord","rojo",100);
let grip2=new item("grip","Wilson","azul",120);
let grip3=new item("grip","Prismian","blanco",100);

let items = [raqueta1,raqueta2,raqueta3,pelota1,pelota2,pelota3,grip1,grip2,grip3]

let interes={
    3:5,
    6:7,
    9:9,
    12:11
}

let total = 0;

function carritoCompra(){

    while(true){

        const producto = prompt('Bienvenido estimado cliente. Seleccione el producto deseado(Raqueta,Pelota o Grip)').toLowerCase();

        console.log(`En este momento disponemos de las/los siguentes ${producto}s:`)
        for(let i in items){
            if(producto === items[i].categoria)   
                console.log(`${i}:${items[i].marca} color ${items[i].color}. Valor $${items[i].precio}`)
        }

        const prod= parseInt(prompt('Seleccione el producto deseado en base a su numero:'));
        console.log(`Usted a seleccionado ${items[prod].marca} color ${items[prod].color}. Valor $${items[prod].precio} `)
        total += items[prod].precio;

    const addItem= prompt('Si desea agregar otro item ingrese "Si", caso contrario ingrese "No"').toLowerCase();
    if(addItem != "si"){
            break
        }
    }

    console.log(`El valor total de su compra es de ${total} pagando en efectivo.`)
    const cuotas = parseInt(prompt('Puede pagar en 3,6,9 o 12 cuotas¿En cuántas cuotas desea pagar?'));
    console.log(`la tasa de interes en ${cuotas} cuotas es de ${interes[cuotas]}%`)
    const totalInteres = round(total * (1+(interes[cuotas]/100),2));
    const valorCuota= round(totalInteres/cuotas,2)
    console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    console.log("Gracias por su compra")
}

carritoCompra();