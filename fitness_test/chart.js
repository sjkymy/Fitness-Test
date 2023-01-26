import cardioGrade from "./cardioGrade.js";

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
    aveData = 0, myCardioData = 0
};

// D3 js
let width = 120;
let height = 90;

const dataGrade = [];
cardioGrade(selecGender, selecAge, myCardioData, dataGrade)

const colors = ['#D7540B','#F7955F','#FFCD56','#BFD0EB','#89A6DB'];

const svg = d3.select(".canvas_grade")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

const g = svg.selectAll("g")
            .data(dataGrade)
            .enter()
            .append("g")

    g.append("rect")
      .attr("x", 0)
      .attr("y", 20)
      .attr("width", width)
      .attr("height", 50)
      .attr("fill", 
        (dataGrade.includes("매우 우수")) ? "#89A6DB" :
        (dataGrade.includes("우수")) ? "#BFD0EB" :
        (dataGrade.includes("보통")) ? "#FFCD56" :
        (dataGrade.includes("부족")) ? "#F7955F" :
        (dataGrade.includes("매우 부족")) ? "#D7540B" :
        console.log("입력 값 없음")
      )

    g.append("text")
      .attr("class", "txt_circle")
      .attr("x", 60)
      .attr("y", 54)
      .attr("text-anchor", "middle")
      .attr("fill", "#263343")
      .attr("font-size", "1.5rem")
      .text(dataGrade);

// Gauge chart
const config = {
  type: 'gauge',
  data: {
    labels: ['매우부족', '부족', '보통', '우수', '매우우수'],
    datasets: [{
      data: ['10', '20', '30', '40', '50'],
      value: 
      (dataGrade.includes("매우 우수")) ? 45 :
      (dataGrade.includes("우수")) ? 35 :
      (dataGrade.includes("보통")) ? 25 :
      (dataGrade.includes("부족")) ? 15 :
      (dataGrade.includes("매우 부족")) ? 5 :
      console.log("입력 값 없음"),
      backgroundColor: ['#D7540B', '#F7955F', '#FFCD56', '#BFD0EB', '#89A6DB'],
      borderWidth: 3
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: '심폐체력 등급',
      font: {
        size: 18
      }
    },
    layout: {
      padding: {
        bottom: 30
      }
    },
    needle: {
      radiusPercentage: 1.2,
      widthPercentage: 2.5,
      lengthPercentage: 35,
      color: 'rgba(0, 0, 0, 1)'
    },
    valueLabel: {
      display: false
    },
    plugins: {      
      datalabels: {
        display: true,
        formatter:  function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
        color: 'rgba(0, 0, 0, 1.0)',
        backgroundColor: null,
        font: {
          size: 17
        }
      }
    }
  }
};

const gaugeChart = new Chart(document.getElementById('gaugeChart').getContext('2d'), config);

// Bar chart
const barLabels = ['내 결과', `${selecAge.value}대 ${selecGender.value} 적정 수준`];

const myData1 = {
    labels: barLabels,
    datasets: [{
        labels: "최대산소섭취량(ml/kg/min)",
        backgroundColor: ["#ed6f63", "#263343"],
        data: [myCardioData, aveData]
    }]    
};

const config1 = {
    // 그래프 형태
    type: 'bar',
    data: myData1,
    options: {
      title: {
        display: true,
        text: '심폐체력 수치',
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          display: true,
          ticks: {
              suggestedMin: 0,
              beginAtZero: true
          }
      }]
      }
    }    
};

const twelveBar = new Chart(document.getElementById('canvasBar'), config1);


// 결과 안내문구
const sectionChart = document.querySelector(".sec_chart");
const divVomax = Form.querySelector(".vo2_max")
const barComment = sectionChart.querySelector(".bar_comment")
const gaugeComment = sectionChart.querySelector(".gauge_comment")
const P1 = document.createElement("p");
const P2 = document.createElement("p");
const P3 = document.createElement("p");

// 버튼 클릭 시 VO2max 결과 수치(숫자) 보여주기 
divVomax.classList.add("show")

// bar 그래프 설명 문구
P1.classList.add("result_p1");
const txtResult1 = document.createTextNode(`▶ 회원님의 VO2max는 ${myCardioData}ml/kg/min 입니다.`);
P1.appendChild(txtResult1);1
barComment.append(P1);

P2.classList.add("result_p2");
const txtResult2 = document.createTextNode(`▶ ${selecAge.value}대 ${selecGender.value} 적정 VO2max는 ${aveData}ml/kg/min 입니다.`);
P2.appendChild(txtResult2);
barComment.append(P2);

P3.classList.add("result_p3");
const txtResult3 = document.createTextNode(`▶ 회원님의 체력 수준은 5개의 등급 중 '${dataGrade[0]}' 수준 입니다.`);
P3.appendChild(txtResult3);
gaugeComment.append(P3);
};