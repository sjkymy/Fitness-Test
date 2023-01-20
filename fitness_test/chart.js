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
////////////
var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.44, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.32, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    
  };
  var target = document.getElementById('canvasGauge'); // your canvas element
  var fitGauge = new Chart(target).setOptions(opts); // create sexy gauge!
  fitGauge.maxValue = 3000; // set max gauge value
  fitGauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  fitGauge.animationSpeed = 56; // set animation speed (32 is default value)
  fitGauge.set(1250); // set actual value



////////////

// const doughnutLabels = ['우수', '매우우수'];

// const myData2 = {
//     labels: [
//       '매우우수',
//       '우수',
//       '보통',
//       '부족',
//       '매우부족'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [10,20,30,40,50],
//       backgroundColor: [
//         'red',
//         'rgb(255, 99, 132)',
//         'rgb(255, 205, 86)',
//         'rgb(54, 162, 235)',
//         'blue'
//       ],
//       hoverOffset: 4
//     }]
//   };

//   const config2 = {
//     type: 'doughnut',
//     data: myData2
//   };

// const gradeDoughnut = new Chart(document.getElementById('canvasGauge'), config2);


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
// const canvas = d3.select('.canvas_grade');
// const svg = canvas
//                 .append('svg')
//                 .attr('width', 90)
//                 .attr('height', 90);
//     svg
//         .append('circle')
//         .attr('cx', 45)
//         .attr('cy', 45)
//         .attr('r', 45)
//         .attr('fill', "red")
        

// chart.js
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