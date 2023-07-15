console.log("Probando")

function mostrarHora() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
        var horaCompleta = hora + ":" + minutos + ":" + segundos;
        document.getElementById("hora").innerHTML = horaCompleta;
    }
    setInterval(mostrarHora, 1000);

// ------------------------------------------------------------------------

let usuario = "";
while (usuario === "" || usuario === null) {
usuario = prompt("Por favor, ingrese su nombre:");
}
let aceptado = confirm("¡Bienvenido " + usuario + " ! " + "En esta pagina encontraras un celular ideal para ti segun tu presupuesto y necesidadas");
console.log("¡Bienvenido " + usuario + " ! " + "En esta pagina encontraras un celular ideal para ti segun tu presupuesto y necesidadas");
console.log(aceptado);

// ---------------------------------------------------------------------------

// let marca = prompt("Solicitar marca xiaomi, huawui, apple o samsung, sino tiene una marca en especifico dejar vacio y precionar ACEPTAR");
// let min_precio = prompt("Escriba lo minino que piensa pagar, precio espresado en $, sino tiene un minimo dejar vacio y precionar ACEPTAR");
// let max_precio = prompt("Escriba lo maximo que piensa pagar, precio espresado en $, sino tiene un maximo dejar vacio y precionar ACEPTAR");
// let almacenamiento = prompt("cuanto quieres de almacenamiento 65GB, 128GB o 256GB, sino tiene una almacenamiento en especifico dejar vacio y precionar ACEPTAR");

// let datos_solicitados = {
//     usuario: usuario,
//     marca: marca,
// 	almacenamiento: almacenamiento,
// 	minimo: min_precio,
//     maximo: max_precio,
// }
// -----------------------------------------------------------------------------
    const celulares = [
        {marca: "Xiaomi", modelo:"Poco X5 5G", almacenamiento:"256GB", precio: 304.82, stock: 5},
        {marca: "Xiaomi", modelo:"POCO F5", almacenamiento:"256GB", precio: 526.23, stock: 4},
        {marca: "Xiaomi", modelo:"Redmi 12C ", almacenamiento:"64GB ", precio: 124.42, stock: 5},
        {marca: "Xiaomi", modelo:"Redmi Note 12 PRO 5G", almacenamiento:"256GB", precio: 359.97, stock: 3},
        {marca: "Xiaomi", modelo:"Redmi 10 2022", almacenamiento:"128GB", precio: 191.74, stock: 2},
        {marca: "Xiaomi", modelo:"POCO C40", almacenamiento:"64GB", precio: 178.03 , stock: 1},
        {marca: "Xiaomi", modelo:"POCO F5", almacenamiento:"256GB", precio: 520.91 , stock: 1},

        {marca: "Huawei", modelo:"Huawei p30 pro", almacenamiento:"128GB", precio: 348.88, stock: 2},
        {marca: "Huawei", modelo:"Nova Y70", almacenamiento:"128GB", precio: 165.99, stock: 1},
        {marca: "Huawei", modelo:"Y7 2019", almacenamiento:"64GB", precio: 165.44, stock: 5},
        {marca: "Huawei", modelo:"Nova 10 Pro", almacenamiento:"256GB", precio: 526.23, stock: 4},
        {marca: "Huawei", modelo:"Smartphone P50 Pro", almacenamiento:"256GB", precio: 850.09, stock: 3},
        {marca: "Huawei", modelo:"Smartphone P60 Pro", almacenamiento:"256GB", precio: 1151.83, stock: 2},
        {marca: "Huawei", modelo:"Y9a", almacenamiento:"128GB", precio: 1151.83, stock: 1},

        {marca: "Apple", modelo:"iPhone 11", almacenamiento:"64GB", precio: 415.39, stock: 3},
        {marca: "Apple", modelo:"iPhone 13", almacenamiento:"128GB", precio: 886.48, stock: 2},
        {marca: "Apple", modelo:"APPLE iPhone 14", almacenamiento:"128GB", precio: 380.75, stock: 1},
        {marca: "Apple", modelo:"iPhone 13 Pro Max", almacenamiento:"128GB", precio: 1246.73, stock: 5},
        {marca: "Apple", modelo:"Apple iPhone 12", almacenamiento:"128GB", precio: 754.08, stock: 4},
        {marca: "Apple", modelo:"Apple iPhone 14 Pro", almacenamiento:"128GB", precio: 1453.57, stock: 3},

        {marca: "Samsung", modelo:"Galaxy S23 Ultra", almacenamiento:"256GB", precio: 1385.28, stock: 4},
        {marca: "Samsung", modelo:"Galaxy A14", almacenamiento:"128GB", precio: 193.70, stock: 3},
        {marca: "Samsung", modelo:"SAMSUNG Galaxy A34", almacenamiento:" 128GB", precio: 262.98, stock: 2},
        {marca: "Samsung", modelo:"Galaxy S21 FE 5G", almacenamiento:"128GB", precio: 553.95, stock: 1},
        {marca: "Samsung", modelo:"galaxy S20 FE 5G", almacenamiento:"128GB", precio: 3277.32, stock: 5},
        {marca: "Samsung", modelo:"Galaxy A04", almacenamiento:"64GB", precio: 246.60, stock: 4},


        {marca: "", modelo:"777", almacenamiento:"", precio: 777, stock: 777},
        {marca: "", modelo:"Celular de Juegete", almacenamiento:"", precio: 10, stock: 1},
        {marca: "", modelo:"Celular de plastico", almacenamiento:"", precio: 0, stock: 0},
]
// -------------------------------------------------------------------------------
// function filtro_completo(celular) {
// return (datos_solicitados.marca === "" || celular.marca === datos_solicitados.marca || datos_solicitados.marca === undefined || null) &&
//     (datos_solicitados.minimo === "" || parseFloat(celular.precio) >= parseFloat(datos_solicitados.minimo) || datos_solicitados.minimo === undefined || null) &&
//     (datos_solicitados.maximo === "" || parseFloat(celular.precio) <= parseFloat(datos_solicitados.maximo) || datos_solicitados.maximo === undefined || null) &&
//     (datos_solicitados.almacenamiento === "" || celular.almacenamiento === datos_solicitados.almacenamiento || datos_solicitados.almacenamiento === undefined || null);
// }



// -------------------------------------------------------------------------------------



// if(respuesta){
//     console.log("El usuario ha aceptado");
//     if("El usuario ha aceptado"){
//         correo = prompt("Ingrese su correo");
//         console.log("Datos de celulares enviado a su correo"+ " " + usuario + " " + correo);
//         alert("Datos de celulares enviado a su correo"+ " " + correo + ": usuario, " + usuario);
//     }
// }else{
//     console.log("Muchas gracias por visitar");
// }



// ---------------------------------------------------------------
let vuelta = true;

while(  aceptado === true || vuelta === true){

    if( aceptado === true || vuelta === true){
    let marca = prompt("Solicitar marca Xiaomi, Huawei, Apple o Samsung, sino tiene una marca en especifico dejar vacio y precionar ACEPTAR");
    let min_precio = prompt("Escriba lo minino que piensa pagar, precio espresado en $, sino tiene un minimo dejar vacio y precionar ACEPTAR");
    let max_precio = prompt("Escriba lo maximo que piensa pagar, precio espresado en $, sino tiene un maximo dejar vacio y precionar ACEPTAR");
    let almacenamiento = prompt("cuanto quieres de almacenamiento 64GB, 128GB o 256GB, sino tiene una almacenamiento en especifico dejar vacio y precionar ACEPTAR");

// RESPUESTA DE CADA PREFUNTA - FILTRACION

console.log("Esta es la marca que escojistes: " + marca);
console.log("Esta es el precio maximo que escojistes: " + min_precio);
console.log("Esta es el precio minimo que escojistes: " + max_precio);
console.log("Esta es el almacenamiento que escojistes: " + almacenamiento);

// ---------------------------------------------------------------------
        let datos_solicitados = {
            usuario: usuario,
            marca: marca,
            almacenamiento: almacenamiento,
            minimo: min_precio,
            maximo: max_precio,
        }

        function filtro_completo(celular) {
            return (datos_solicitados.marca === "" || celular.marca === datos_solicitados.marca || datos_solicitados.marca === undefined || null) &&
            (datos_solicitados.minimo === "" || parseFloat(celular.precio) >= parseFloat(datos_solicitados.minimo) || datos_solicitados.minimo === undefined || null) &&
            (datos_solicitados.maximo === "" || parseFloat(celular.precio) <= parseFloat(datos_solicitados.maximo) || datos_solicitados.maximo === undefined || null) &&
            (datos_solicitados.almacenamiento === "" || celular.almacenamiento === datos_solicitados.almacenamiento || datos_solicitados.almacenamiento === undefined || null);
        }

        let celularesFiltrados = celulares.filter(filtro_completo);
        console.log("Esto es todo lo que se filtro");
        console.log("-----------------------------------------------------")

        function mostrar_celulares(celulares){
            celulares.forEach( celular => {
                console.log("MARCA: " + celular.marca + " " + "MODELO: " + celular.modelo + " " + "ALMACENAMIENTO: " + celular.almacenamiento + " " + "PRECIO: $" + celular.precio  + " STOCK: " + celular.stock);
                console.log("------------------------------------------------------------");
                // document.write("<p></p>")
            })
        }
        console.log(celularesFiltrados);

        let respuesta = confirm(usuario + " estos son todos los celulares a su disposicion, ¿Desea que estos datos se envie a su correo.?");
        console.log(usuario + " estos son todos los celulares a su disposicion, ¿Desea que estos datos se envie a su correo.?")

        if(respuesta === true) {
            console.log("El usuario ha aceptado");

            let correo = "";
            while (correo === "" || correo === null) {
                correo = prompt("Ingrese su correo");
                console.log("Se envio a su correo los datos")
            }

            alert(usuario + " " + ", los datos de celulares se ha enviado a su correo:"+ " "  + correo);
            vuelta = confirm("Desea hacer otra consulta");
            console.log("El usuario quiere hacer otra consulta")
            if(vuelta == true){
                console.log("Hacer otra consulta");
                continue
            }
            else{
                console.log("El usuario ha cancelado")
                break
            }
        } 

        if(respuesta === false) {
            console.log("El usuario ha cancelado");
            vuelta = confirm("Desea hacer otra consulta");
            console.log("El usuario quiere hacer otra consulta")
            if(vuelta == true){
                console.log("¿El usuario quiere hacer otra consulta?");
                console.log("Hacer otra consulta");
                continue
            }
            else{
                console.log("El usuario ha cancelado")
                break
            }
        } 

        else {
            console.log("El usuario ha cancelado");
            alert("Muchas gracias por visitar")
            break;
        }
    }  
    // break
}

// FUNCION CONSTRUCTORA SOLICITADA UTILIZANDO FORREACH-----------------------------------


class Objeto {
    constructor(nombre, apellido, anios) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anios = anios;
    }
    saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}. Tengo ${this.anios} años.`);
    }
}


const objeto1 = new Objeto("Pepe", "Ramirez", 10);
const objeto2 = new Objeto("Juan", "Perez", 20);
const objeto3 = new Objeto("Daniel", "Ramos", 30);
const objeto4 = new Objeto("Jhunior", "Ramos", 40);

const arrayObjetos = [];
arrayObjetos.push(objeto1);
arrayObjetos.push(objeto2);
arrayObjetos.push(objeto3);
arrayObjetos.push(objeto4);

arrayObjetos.forEach(objeto => {
    objeto.saludar();
});

console.log(arrayObjetos);



// -----------------------------------------------------------------

function Gracias(guion){
    this.guion = guion;

}
