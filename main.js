var datos = [];

function calcularMedia(){
    let suma = 0;
    for (let i = 0; i < datos.length; i++){
        suma+=datos[i];
    }
    return suma/datos.length;
}

function calcularMediana(){
    if(datos.length%2 == 0){
        return (datos[datos.length/2] + datos[(datos.length/2)-1])/2;
    } else {
        return datos[(datos.length-1)/2];
    }
}

function calcularModa(){
    let conjunto = [];
    
    let anterior = 0;
    let siguiente = 0;
    for (let i = 0; i < datos.length; i++) {
        let moda=0;
        if ( i < datos.length )
        if( datos[i] == datos[i+1]){
            conjunto = push(i);
        }
    }
    console.log(conjunto);
}


function extraerDatos(){
    var datos_locales = []
    datos = [];
    let datos_input = document.querySelector('input');
    datos_locales = datos_input.value.split(',');

    for (let i = 0; i < datos_locales.length; i++){
        datos.push(parseFloat(datos_locales[i]));
    }

    document.getElementById('datos').innerText = `DATOS: [${datos}]`;
    document.getElementById('mediana').innerText = `Mediana: ${calcularMediana()}`;
    document.getElementById('media').innerText = `Media: ${calcularMedia()}`;

    calcularModa();
}

function main(){
    
}