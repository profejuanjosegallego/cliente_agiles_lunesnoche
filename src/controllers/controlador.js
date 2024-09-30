import {gastos} from "./simuladorAPI.js"

//COMO FILTRO UN ARREGLO?

//para filtrar, recorrer y mapear arreglos
//los programdores de js usan los ARRAY METHODS

//APLICAR UN FLITRO PARA OBTENER LOS GASTOS mayores a 8000 pesos
let filtro=gastos.filter((gasto)=>{
    return gasto.valor>8000
})
console.log(filtro)