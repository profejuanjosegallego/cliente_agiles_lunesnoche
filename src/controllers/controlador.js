import {gastos} from "./simuladorAPI.js"

//COMO FILTRO UN ARREGLO?

//para filtrar, recorrer y mapear arreglos
//los programdores de js usan los ARRAY METHODS

//APLICAR UN FLITRO PARA OBTENER LOS GASTOS mayores a 8000 pesos
let filtro=gastos.filter((gasto)=>{
    return gasto.valor>8000
})


//aplicando traversing para manipular la GUI
//1. Para aplicar traversing normalmente necesito recorrer una
//fuente de datos

let fila=document.getElementById("fila")

gastos.forEach(function(gasto){
    
    //2. COMIENZO A CREAR ETIQUETAS
    //segun mi necesidad
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow","p-5")

    let descripcion=document.createElement("h3")
    descripcion.classList.add("text-center","fw-bold")
    //manipulando el contenido de texto de cualquier etiqueta
    descripcion.textContent=gasto.descripcion

    let montoGasto=document.createElement("h2")
    montoGasto.classList.add("text-center","fw-bold","text-success")
    montoGasto.textContent="$ "+gasto.valor

    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid")

    if(gasto.categoria=="transporte"){
        imagen.src="../../assets/img/transporte.png"
    }else if(gasto.categoria=="alimentos"){
        imagen.src="../../assets/img/comida-rapida.png"
    }else if(gasto.categoria=="entretenimiento"){
        imagen.src="../../assets/img/mascaras-de-teatro.png"
    }

    

    //3. Ordenar por jerarquias las etiquetas que acabo de crear
    tarjeta.appendChild(descripcion)
    tarjeta.appendChild(montoGasto)
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)



})

