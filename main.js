let cliente = prompt("Buenos días. ¿Cuál es tu nombre?");

// Array para almacenar los productos
const productos = [
    { id: 1, nombre: "Carne", precio: 1000 },
    { id: 2, nombre: "Pollo", precio: 1000 },
    { id: 3, nombre: "Jamon y Queso", precio: 1000 }
];

// Función para calcular el precio con IVA
function calcularPrecioConIva(cantidad, precioUnitario) {
    const iva = 0.21;
    return cantidad * precioUnitario * (1 + iva);
}

function bienvenido() {
    let pedidoArray = []; // Array para almacenar los pedidos

    alert(`Hola ${cliente}. Nuestro menú para el día de hoy es:\n\n1. ${productos[0].nombre}\n2. ${productos[1].nombre}\n3. ${productos[2].nombre}`);

    let a = "si";

    while (a === "si") {
        let pedidoId = prompt("Indícanos qué tipo de empanada quieres comprar (ingresa el número del producto)\n1. Carne\n2. Pollo\n3. Jamon y Queso");
        let cantidad = prompt("¿Qué cantidad de empanadas?");
        
        // Obtener el producto seleccionado
        let productoSeleccionado = productos.find(producto => producto.id == pedidoId);

        // Agregar el pedido al array
        pedidoArray.push({ tipo: productoSeleccionado.nombre, cantidad: parseInt(cantidad) });

        a = prompt("¿Te podemos ayudar con algo más? SI o NO").toLowerCase();
    }

    // Mostrar el resumen del pedido
    let total = 0;
    for (let pedido of pedidoArray) {
        let precioUnitario = productos.find(producto => producto.nombre === pedido.tipo).precio;

        // Calcular el precio con IVA
        let precioConIva = calcularPrecioConIva(pedido.cantidad, precioUnitario);
        total += precioConIva;

        alert(`Pedido acumulado:\n${pedido.cantidad} empanadas de tipo ${pedido.tipo}. Subtotal con IVA: $${precioConIva.toFixed(2)}`);
    }

    alert(`Gracias ${cliente} por tu compra. Tu pedido suma total es de $${total.toFixed(2)}\niva incluido :-)\n\nPor pago en efectivo, tienes un 10% de descuento, quedando en $${(total * 0.9).toFixed(2)}`);
}

bienvenido();
