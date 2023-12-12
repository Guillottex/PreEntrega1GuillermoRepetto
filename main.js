let cliente = prompt("Buenos días. ¿Cuál es tu nombre?");

function bienvenido() {
    let acumulado = {}; // Objeto para acumular el pedido

    alert(`Hola ${cliente}. Nuestro menú para el día de hoy es:\n\n1. Empanada de carne\n2. Empanada de jamón y queso\n3. Empanada de pollo`);

    let a = "si";

    while (a === "si") {
        let pedido = prompt("Indícanos el número del menú para seleccionar tu pedido");
        let cantidad = prompt("¿Qué cantidad de empanadas?");
        
        // Acumular el pedido en el objeto
        if (acumulado[pedido]) {
            acumulado[pedido] += parseInt(cantidad);
        } else {
            acumulado[pedido] = parseInt(cantidad);
        }

        a = prompt("¿Te podemos ayudar con algo más? SI o NO").toLowerCase();
    }

    // Mostrar el resumen del pedido
    let total = 0;
    for (let tipo in acumulado) {
        let precioUnitario = 1000; // Precio por empanada
        let subtotal = acumulado[tipo] * precioUnitario;
        total += subtotal;

        alert(`Pedido acumulado:\n${acumulado[tipo]} empanadas de tipo ${tipo}. Subtotal: $${subtotal}`);
    }

    alert(`Gracias ${cliente} por tu compra. Tu pedido total es de ${total} empanadas
        \n El total suma $${total} 
        \n Por pago en efectivo, tienes un 10% de descuento, quedando en $${total * 0.9}`);
}

bienvenido();
