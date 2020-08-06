var datosGrafico = [];


function graficarPuntos() {

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

    var ctx = document.getElementById('myC').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datos,
            datasets: [{
                label: "Grafico de Puntos",
                data: datos,
                lineTension: 0,
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                pointBorderColor: 'orange',
                pointBackgroundColor: 'rgba(255,150,0,0.5)',
                pointRadius: 5,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: 'rectRounded'
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
