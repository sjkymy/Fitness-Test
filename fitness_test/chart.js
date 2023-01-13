export default function resultChart(resultData) {
const labels = ['내 기록', '평균 기록'];

const myData = {
    labels: labels,
    datasets: [{
        labels: "최대산소섭취량(ml/kg/min)",
        backgroundColor: "hotpink",
        data: [resultData, 45]
    }]
};
const config = {
    // 그래프 형태
    type: 'bar',
    data: myData,
    options: {
        plugins: {
            title: {
                display: true,
                text: "체력 수준",
                color: "blue",
                position: "top",
                padding: {
                    top: 10,
                    bottom: 20,
                }
            },
            legend: {
                display: false
            }
        }
    }
};
const twelveBar = new Chart(document.getElementById('twelveBar'), config)
}