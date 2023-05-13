import Chart from 'chart.js/auto';

interface PhotosData {
    date: string;
    photos: number;
}

interface PhotoSizesData {
    date: string;
    size: number;
}

const photosData: PhotosData[] = JSON.parse((document.getElementById('photos-data') as HTMLScriptElement).innerHTML);
const photoSizesData: PhotoSizesData[] = JSON.parse((document.getElementById('photo-sizes-data') as HTMLScriptElement).innerHTML);

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
                    yAxisID: 'y',
                },
                {
                    label: 'Photo size',
                    data: photoSizesData.map(td => td.size / 1024 / 1024 / 1024),
                    borderColor: '#ffcd56',
                    type: 'line',
                    yAxisID: 'y1',
                },
            ],
        },
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Photos taken and total storage size per day',
                },
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: true,
                    position: 'left',
                },
                y1: {
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'GB',
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                },
            },
        },
    }
);
