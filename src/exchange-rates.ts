import Chart from 'chart.js/auto';

interface ExchangeRatesData {
    date: string;
    rate: number;
}

const exchangeRatesData: ExchangeRatesData[] = JSON.parse((document.getElementById('exchange-rates-data') as HTMLScriptElement).innerHTML);

new Chart(
    document.getElementById('exchange-rate') as HTMLCanvasElement,
    {
        type: 'line',
        data: {
            labels: exchangeRatesData.map(td => td.date),
            datasets: [
                {
                    label: 'JPY to GBP exchange rate',
                    data: exchangeRatesData.map(td => td.rate),
                    borderColor: '#ff9f40',
                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'JPY to GBP exchange rate',
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
