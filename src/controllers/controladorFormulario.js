//PASOS PARA CAPTURAR LA INFO DE UN FORMULARIO USANDO JS

//1. SE ALMACENA CADA INPUT/SELECT O TEXT AREA EN UNA VARIABLE

let cajaDescripcion=document.getElementById("descripcion")
let cajaFecha=document.getElementById("fecha")
let cajaValorGasto=document.getElementById("valor")
let cajaCategoria=document.getElementById("categoria")

//2. SE ALMACENA EL BOTON DEL FORM EN UNA VARIABLE
let botonFormulario=document.getElementById("botonRegistro")

//3. SE DETECTAN LOS EVENTOS DEL FORMULARIO
botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()

    //4.SE CAPTURAN LOS DATOS
    let gasto={
        id:5,
        categoria:cajaCategoria.value,
        fecha:cajaFecha.value,
        descripcion:cajaDescripcion.value,
        valor:cajaValorGasto.value
    }

    console.log(gasto)

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });

     

})