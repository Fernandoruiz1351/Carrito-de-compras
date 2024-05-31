function round(numero, decimales = 2) {
    const factor = Math.pow(10, decimales);
    return Math.round(numero * factor) / factor;
}

function item(id,categoria,marca,color,precio){
    this.id= id,
    this.categoria= categoria,
    this.marca=marca,
    this.color=color,
    this.precio=precio
}

let raqueta1= new item(1,"raqueta","Babolat","azul",800);
let raqueta2= new item(2,"raqueta","Wilson","roja",1000);
let raqueta3= new item(3,"raqueta","Head","blanca",1200);
let pelota1=new item(4,"pelota","Penn","verde",300);
let pelota2=new item(5,"pelota","Wilson","verde",350);
let pelota3=new item(6,"pelota","Head","verde",400);
let grip1=new item(7,"grip","Acord","rojo",100);
let grip2=new item(8,"grip","Wilson","azul",120);
let grip3=new item(9,"grip","Prismian","blanco",100);

let items = [raqueta1,raqueta2,raqueta3,pelota1,pelota2,pelota3,grip1,grip2,grip3]

let interes={
    3:5,
    6:7,
    9:9,
    12:11
}

let total = 0;
let carrito=[];
let filtrado=[];

function aplicarFiltro(){
    const filtros= prompt('¿Desea aplicar un filtro? Ingrese "SI" o "NO"').toLocaleLowerCase();

        if(filtros==="si"){
            console.log("**Si desea filtrar por categoría ingrese CAT**")
            console.log("**Si desea filtrar por precio ingrese PRECIO**")
            const filtro= prompt('Ingrese CAT o PRECIO').toLocaleLowerCase();
                if(filtro === "cat"){
                    console.log("**Puede filtrar por Raqueta,Pelota o Grip")
                    const cat= prompt('Ingrese "Raqueta","Pelota" o "Grip"').toLocaleLowerCase();
                    let filtrado = items.filter((fil) => fil.categoria.includes(cat))
                    for(let i in filtrado){ 
                        console.log(`${filtrado[i].id}:${filtrado[i].categoria} ${filtrado[i].marca} color ${filtrado[i].color}. Valor $${filtrado[i].precio}`);
                    }                  
                }
                else if(filtro=== "precio"){
                    const precio= parseInt(prompt('Ingrese el valor máximo de precio:'));
                    let filtrado = items.filter((fil) => fil.precio <= precio)
                    for(let i in filtrado){ 
                        console.log(`${filtrado[i].id}:${filtrado[i].categoria} ${filtrado[i].marca} color ${filtrado[i].color}. Valor $${filtrado[i].precio}`);
                    }
                }
        }
}

function agregarProducto(){
    console.log("*****PRODUCTOS DISPONIBLE*****")
        for(let i in items){   
            console.log(`${items[i].id}:${items[i].categoria} ${items[i].marca} color ${items[i].color}. Valor $${items[i].precio}`)
        }
        
        aplicarFiltro();

        const prod= parseInt(prompt('Seleccione el producto deseado en base a su numero:')-1);
        console.log(`Usted a seleccionado ${items[prod].categoria} ${items[prod].marca} color ${items[prod].color}. Valor $${items[prod].precio} `)
        total += items[prod].precio;
        carrito.push(items[prod])
        
}

function verCarrito(){
    console.log("*****CARRITO DE COMPRAS*****")
            for(let c in carrito){
                console.log(`${Number(c)+1} - ${carrito[c].categoria} ${carrito[c].marca} color ${carrito[c].color}. Valor $${carrito[c].precio}`)
            }
            console.log(`Total parcial $${total}`)
}

function eliminarProducto(){
    for(let c in carrito){
        console.log(`${Number(c)+1} - ${carrito[c].categoria} ${carrito[c].marca} color ${carrito[c].color}. Valor $${carrito[c].precio}`)
    }
    const elim = parseInt(prompt('Ingrese el numero del producto a eliminar:'))-1;
    total -= carrito[elim].precio;
    carrito.splice(elim,1)
    console.log("*****CARRITO DE COMPRAS ACTUALIZADO*****")
    for(let c in carrito){
        console.log(`${Number(c)+1} - ${carrito[c].categoria} ${carrito[c].marca} color ${carrito[c].color}. Valor $${carrito[c].precio}`)
    }
    console.log(`Total parcial $${total}`)
}

function pagoCuotas(){
    
    const cuotas = parseInt(prompt('Puede pagar en 3,6,9 o 12 cuotas¿En cuántas cuotas desea pagar?'));
    console.log(`la tasa de interes en ${cuotas} cuotas es de ${interes[cuotas]}%`)
    const totalInteres = round(total * (1+(interes[cuotas]/100)),2);
    const valorCuota= round(totalInteres/cuotas,2)
    console.log(`El total a pagar con interes es $${totalInteres} en ${cuotas} cuotas de $${valorCuota}`)
    console.log("Gracias por su compra")
}

function carritoCompra(){
    console.log("**********BIENVENIDO A NUESTRA TIENDA VIRTUAL**********")

    while(true){

        console.log("**Si desea agregar un producto al carrito ingrese A**")
        console.log("**Si desea ver el carrito de compras ingrese B**")
        console.log("**Si desea eliminar un producto del carrito ingrese C**")
        console.log("**Si desea finalizar la compra ingrese D**")

        let selector = prompt('Ingrese la opcion desada').toLowerCase();

        if (selector === "a"){
            agregarProducto();
        }

        else if(selector ==="b"){
            verCarrito();
        }

        else if(selector === "c"){
            eliminarProducto();
        }

        else if(selector === "d"){
            break
        }
        
    }

    console.log(`El valor total de su compra es de $${total} pagando en efectivo.`)
    console.log("**Si desea pagar en efectivo ingrese E**")
    console.log("**Si desea pagar en cuotas ingrese F**")
    const pago= prompt('Seleccione la forma de pago:').toLocaleLowerCase();
    if (pago === "e"){
        console.log(`El valor total de su compra es de $${total}.`)
        console.log("Gracias por su compra")
    }
    else if(pago==="f"){
        pagoCuotas();
    }
}

carritoCompra();