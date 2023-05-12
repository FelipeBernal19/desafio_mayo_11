
// Variables a utilizar
var precio = 0;
var descuento = 0;
var resultado = 0;


function calcular_descuento(){

    precio = document.getElementById("precio").value;
    descuento = document.getElementById("descuento").value;

    if(precio <= 0 || descuento < 0 || descuento > 100){
        document.getElementById("resul").innerHTML = `Los valores ingresados son inválidos!!`;
    }else{
        if(descuento == 0){
            document.getElementById("resul").innerHTML = `El valor del producto sin descuento es ${precio} pesos`;
        }else{
            resultado = precio-(precio*(descuento/100));
            document.getElementById("resul").innerHTML = `El valor del producto aplicando el ${descuento}% de descuento es ${resultado} pesos`;
        }   
    }
}