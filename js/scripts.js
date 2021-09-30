let productos=[];
let total=0;

function agregar(producto, precio) {
    console.log(producto,precio)
    productos.push(producto)
    total=total+precio;
    document.getElementById("carrito").innerHTML = `<i class="bi bi-cart-check"> Pagar $ ${total}</i> `
    document.getElementById("carrito2").innerHTML = `<i class="bi bi-cart-check"> Pagar $ ${total}</i> `
}

function pagar() {
    //console.log(producto,precio)
    window.confirm(productos.join(", \n"));
}