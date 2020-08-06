var datosGrafico = [];


function graficar() {

    datosGrafico = datos_agrupados;
    let datos = [];
    let frecuencia = [];

    for (let i = 0; i < datosGrafico.length; i++) {
        datos.push(datosGrafico[i].dato);
        frecuencia.push(datosGrafico[i].frecuencia);
        console.log(datos);
        console.log(frecuencia);
        
    }
    console.log(datosGrafico);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos,
            datasets: [{
                label: 'Frecuencia de Datos',
                data: frecuencia,
                backgroundColor: ['rgba(0, 0, 1, 0.1)'],
                borderColor: [ ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}
