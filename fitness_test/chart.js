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

////////////////////
//
// var width = 90;
// var height = 90;

// var data = ["부족"];
// var colors = ['#ffffcc','#c2e699','#78c679','#31a354','#006837'];

// var svg = d3.select(".canvas_grade")
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height);

// var g = svg.selectAll("g")
//             .data(data)
//             .enter()
//             .append("g")
//             // .attr("transform", function(d, i) {
//             //     return "translate(0,0)";
//             // })

//     g.append("circle")
//       .attr("cx", 45)
//       .attr("cy", 45)
//       .attr("r", 45)
//       .attr("fill", "red")

//     g.append("text")
//     .attr("class", "txt_circle")
//      .attr("x", 18)
//      .attr("y", 55)
//      .attr("fill", "#fff")
//      .attr("font-size", "30px")
//      .text("부족");
//////////////

// Gauge chart
const config = {
  type: 'gauge',
  data: {
    labels: ['매우부족', '부족', '보통', '우수', '매우우수'],
    datasets: [{
      data: ['10', '20', '30', '40', '50'],
      value: 15,
      backgroundColor: ['#D7540B', '#F7955F', '#FFCD56', '#BFD0EB', '#89A6DB'],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: '심폐체력 등급'
    },
    layout: {
      padding: {
        bottom: 30
      }
    },
    needle: {
      radiusPercentage: 1.2,
      widthPercentage: 2.5,
      lengthPercentage: 40,
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
          size: 20,
          weight: 'bold'
        }
      }
    }
  }
};

const gaugeGrade = new Chart(document.getElementById('gaugeChart').getContext('2d'), config);

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
        plugins: {
            title: {
                display: false,
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
const Comment = sectionChart.querySelector(".comment")
const P1 = document.createElement("p");
const P2 = document.createElement("p");
const P3 = document.createElement("p");

// 심폐체력 등급
cardioGrade(selecGender, selecAge, myCardioData, divVomax)

// 버튼 클릭 시 VO2max 결과 수치 보여주기 
divVomax.classList.add("show")

// 그래프 밑에 설명 문구
P1.classList.add("result_p1");
const txtResult1 = document.createTextNode(`▶ 회원님의 VO2max는 ${myCardioData}ml/kg/min 입니다.`);
P1.appendChild(txtResult1);1
Comment.append(P1);

P2.classList.add("result_p2");
const txtResult2 = document.createTextNode(`▶ ${selecAge.value}대 ${selecGender.value} 적정 VO2max는 ${aveData}ml/kg/min 입니다.`);
P2.appendChild(txtResult2);
Comment.append(P2);
};