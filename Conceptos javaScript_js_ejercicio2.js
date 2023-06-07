/*Crear una función llamada "calcularDescuento" que tome dos parámetros: un número "precio" y un
objeto "cupon" con las propiedades "codigo" y "descuento". Si el código del cupón es válido
("DESCUENTO20"), la función debe calcular y devolver el precio con el descuento aplicado. Si el
código no es válido, la función debe devolver el precio sin descuento. */

const cupon = {
    codigo: "DESCUENTO20",
    descuento: 50,
}
const precio = 1000

function calcularDescuento(precio, cupon) {
    if (cupon.codigo === "DESCUENTO20") {

        console.log(precio - (precio * cupon.descuento / 100));
    } else {
        console.log("No obtienes descuento tu precio es "+ " "+ precio)
    }
}

calcularDescuento(precio, cupon)