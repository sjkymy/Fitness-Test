import cardioGrade from "./cardioGrade.js"

export default function resultChart(myCardioData, aveData) {
    
const selecGender = Form.querySelector("#selecGender");
const selecAge = Form.querySelector("#selecAge");

// 동일 연령별 및 성별 평균 값
if (selecGender.value === "남성") {
    (selecAge.value === "20") ? (aveData = 47.1)
    : (selecAge.value === "30") ? (aveData = 41.8)
    : (selecAge.value === "40") ? (aveData = 37.3)
    : (selecAge.value === "50") ? (aveData = 32.2)
    : (selecAge.value === "60") ? (aveData = 27.8)
    : aveData = 0
};

if (selecGender.value === "여성") {
    (selecAge.value === "20") ? (aveData = 36.8)
    : (selecAge.value === "30") ? (aveData = 29.7)
    : (selecAge.value === "40") ? (aveData = 26.3)
    : (selecAge.value === "50") ? (aveData = 23.1)
    : (selecAge.value === "60") ? (aveData = 19.8)
    : aveData = 0
};

if (!selecGender.value && !selecAge.value) {
    console.log("성별 및 연령을 선택하세요.");
    aveData = 0
};

// 심폐체력 등급
cardioGrade(selecGender, selecAge, myCardioData)

// chart.js
const labels = ['내 기록', '평균 기록'];

const myData = {
    labels: labels,
    datasets: [{
        labels: "최대산소섭취량(ml/kg/min)",
        backgroundColor: ["#ed6f63", "#263343"],
        data: [myCardioData, aveData]
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
                color: "#ed6f63",
                position: "top",
                padding: {
                    top: 10,
                    bottom: 10,
                }
            },
            legend: {
                display: false
            }
        }
    }    
};

const twelveBar = new Chart(document.getElementById('twelveBar').getContext('2d'), config);

// 결과 안내문구 첫 번째
const sectionChart = document.querySelector(".sec_chart");
const P1 = document.createElement("p");
const P2 = document.createElement("p");
const P3 = document.createElement("p");

P1.classList.add("result_p1");
const txtResult1 = document.createTextNode(`회원님의 VO2max는 ${myCardioData}ml/kg/min 입니다.`);

P1.appendChild(txtResult1);1
sectionChart.append(P1);

P2.classList.add("result_p2");
const txtResult2 = document.createTextNode(`${selecAge.value}대 ${selecGender.value} 평균 VO2max는 ${aveData}ml/kg/min 입니다.`);

P2.appendChild(txtResult2);
sectionChart.append(P2);
};