//Clase constructora de productos
class Productos {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria.toUpperCase();
        this.cantidad = 0;
        this.stock = true;
    }
    sinStock() {
        this.stock = false;
    }
}
//Crea los productos
function getProductos(listaProductos) {
    let compu = new Productos("Computadora", 70000, "Computadora");
    let celu = new Productos("Iphone X", 200000, "Celular");
    let marvo = new Productos("Marvo", 6000, "Auriculares");
    listaProductos[0] = compu;
    listaProductos[1] = celu;
    listaProductos[2] = marvo;
}
//pushea el producto al carrito
const carrito = function (miCarrito, producto) { miCarrito.push(producto); }
//Suma el precio 
const suma = (n1, n2) => n1 + n2;


//Muestra la cuenta en un alert
function showCarrito(miCarrito) {
    let string = "Su pedido es:\n";
    const precioFinal = miCarrito.reduce((acumulador, producto) => acumulador += (producto.precio * producto.cantidad), 0);
    for (let i = 0; i < miCarrito.length; i++) {
        string = string + miCarrito[i].cantidad + " " + miCarrito[i].nombre + ":" + " $" + (miCarrito[i].precio * miCarrito[i].cantidad) + "\n";
    }
    string = string + "El valor final es : $" + precioFinal;
    return string;
}
//Agrega una cantidad al producto y si es 0 llama a la funcion para ponerlo en el carrito
function agregar(producto, miCarrito, cantidad) {
    if (producto.cantidad == 0) {
        carrito(miCarrito, producto);
    }
    producto.cantidad += cantidad;
}
//Resta la cantidad de productos y si es igual a 0 se saca el producto del carrito
function sacar(producto, miCarrito, cantidad) {

    if (producto.cantidad >= cantidad) {
        producto.cantidad -= cantidad;
        if (producto.cantidad == 0) {
            miCarrito.splice(miCarrito.indexOf(producto), 1);
        }
    }

}
//Ingresar los distintos productos que tiene para elegir
function llenarCarrito(listaProductos, miCarrito) {
    let compra = true;
    while (compra) {
        let opcion = prompt("Opciones 1-3 y x para terminar pedido\nLos productos son:\n" + listaProductos[0].nombre + ": " + "$" + listaProductos[0].precio + "\n" + listaProductos[1].nombre + ": " + "$" + listaProductos[1].precio + "\n" + listaProductos[2].nombre + ": " + "$" + listaProductos[2].precio + "\n" + showCarrito(miCarrito));
        switch (opcion) {
            case "1":
                agregar(listaProductos[0], miCarrito, valiCant());
                break;
            case "2":
                agregar(listaProductos[1], miCarrito, valiCant());
                break;
            case "3":
                agregar(listaProductos[2], miCarrito, valiCant());
                break;
            case "x":
                compra = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
function valiCant() {
    let cant;
    while (true) {
        cant = parseInt(prompt("Ingrese La cantidad"));
        if (isNaN(cant) || cant <= 0) {
            alert('ingrese un número válido.');
        } else {
            return cant;
        }
    }
}

//Ingresar la opcion de los productos a borrar
function vaciarCarrito(miCarrito) {
    let compra = true;
    while (compra) {
        let opcion = prompt("Opciones 1-3 y x para salir \n" + showCarrito(miCarrito));
        switch (opcion) {
            case "1":
                if (miCarrito[0] != undefined) {
                    sacar(miCarrito[0], miCarrito, valiCant());
                }
                break;
            case "2":
                if (miCarrito[1] != undefined) {
                    sacar(miCarrito[1], miCarrito, valiCant());
                }
                break;
            case "3":
                if (miCarrito[2] != undefined) {
                    sacar(miCarrito[2], miCarrito, valiCant());
                }
                break;
            case "x":
                compra = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
//Home
function home() {
    const miCarrito = [];
    const listaProductos = [];
    getProductos(listaProductos);
    alert("Bienvenido a TecnoPress");
    let comprando = true;
    while (comprando == true) {
        let op = prompt("Opciones\n1-Llenar el carrito\n2-Borrar productos del carrito\n3-Terminar compra ahora");
        switch (op) {
            case "1":
                llenarCarrito(listaProductos, miCarrito);
                break;
            case "2":
                vaciarCarrito(miCarrito)
                break;
            case "3":
                alert(showCarrito(miCarrito));
                comprando = false;
                break;
            default:
                alert("La opcion ingresada fue invalida intentelo de nuevo.");
        }
    }
}
home();