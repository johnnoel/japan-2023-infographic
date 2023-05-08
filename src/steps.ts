import Chart from 'chart.js/auto';

interface StepsData {
    date: string;
    steps: number;
}

const stepsData: StepsData[] = JSON.parse((document.getElementById('steps-data') as HTMLScriptElement).innerHTML);

new Chart(
    document.getElementById('steps') as HTMLCanvasElement,
    {
        type: 'bar',
        data: {
            labels: stepsData.map(td => td.date),
            datasets: [
                {
                    label: 'Step count',
                    data: stepsData.map(td => td.steps),
                    backgroundColor: '#4bc0c0',
                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Step count per day',
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: false,
                },
            },
        },
    }
);
