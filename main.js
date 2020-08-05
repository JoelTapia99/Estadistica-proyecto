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
    let numero=[];
    let moda=[];
    let auxiliar = 0;
    
    for (let i = 0; i < datos.length; i++) {
        numero = datos.filter( num => num == datos[i] );

        if ( numero.length > auxiliar ) {
            auxiliar = numero.length;
            moda = numero;
        } 
    }
    console.log( `numero: ${moda[0]}  auxiliar: ${auxiliar}` );
}


function ordenar( array ){

    

}


function extraerDatos(){
    var datos_locales = []
    datos = [];
    let datos_input = document.querySelector('input');
    datos_locales = datos_input.value.split(',');

    for (let i = 0; i < datos_locales.length; i++){
        datos.push(Number(datos_locales[i]));
    }

    datos.sort();

    document.getElementById('datos').innerText = `DATOS: [${datos}]`;
    document.getElementById('mediana').innerText = `Mediana: ${calcularMediana()}`;
    document.getElementById('media').innerText = `Media: ${calcularMedia()}`;

    calcularModa();
}