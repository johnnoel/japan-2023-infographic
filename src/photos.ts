import Chart from 'chart.js/auto';

interface PhotosData {
    date: string;
    photos: number;
}

const photosData: PhotosData[] = JSON.parse((document.getElementById('photos-data') as HTMLScriptElement).innerHTML);

new Chart(
    document.getElementById('photos') as HTMLCanvasElement,
    {
        type: 'bar',
        data: {
            labels: photosData.map(td => td.date),
            datasets: [
                {
                    label: 'Photo count',
                    data: photosData.map(td => td.photos),
                    backgroundColor: '#9966ff',
                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Photos taken per day',
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
