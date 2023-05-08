import Chart from 'chart.js/auto';

interface TemperatureData {
    date: string;
    max_temp: number;
    min_temp: number;
}

const temperaturesData: TemperatureData[] = JSON.parse((document.getElementById('temperatures-data') as HTMLScriptElement).innerHTML);

new Chart(
    document.getElementById('temperatures') as HTMLCanvasElement,
    {
        type: 'line',
        data: {
            labels: temperaturesData.map(td => td.date),
            datasets: [
                { label: 'Min temp', data: temperaturesData.map(td => td.min_temp) },
                { label: 'Max temp', data: temperaturesData.map(td => td.max_temp) },
            ],
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: false,
                    text: 'Temperature per day',
                }
            },
            scales: {
                x: {
                    display: false,
                },
                y: {
                    title: {
                        display: true,
                        text: '°C'
                    }
                },
            },
        },
    }
);
