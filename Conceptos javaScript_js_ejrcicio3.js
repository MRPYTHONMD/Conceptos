/*Crear una función llamada "convertirPalabra" que tome un string como parámetro y devuelva el mismo
string pero con la primera letra en mayúscula y el resto en minúscula. */
const palabra = "papa"

function convertirPalabra(palabra) {
    console.log(palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).tolowerCase())
    
}
convertirPalabra(palabra)