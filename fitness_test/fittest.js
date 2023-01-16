import resultChart from "./chart.js";

const Form = document.querySelector("#Form")
const inpGroup = Form.querySelector(".twelve")
const inpTwelve = Form.querySelector("#twelveRun");
const voMax = Form.querySelector("#voMax");
const btnSubmit = Form.querySelector("#btnSubmit");

// 숫자가 아니면 초기화하고 에러메세지 추가
inpTwelve.addEventListener("input", (e) => {
    const temp = document.createElement("p");
    temp.classList.add("temp_error")
    const textnode = document.createTextNode("*숫자만 입력 가능합니다.");

    if (!parseInt(e.target.value)) {
        inpTwelve.value = null;
        temp.appendChild(textnode)
        inpGroup.appendChild(temp)
    };
}, { once : true}); // 이벤트가 한번만 발생하게 하기 위해서 once 사용

// 버튼 클릭하면 VO2max input에 계산된 결과 전달
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    voMax.value = ((inpTwelve.value - 504.9)/44.73).toFixed(1);
    const maxValue = voMax.value;
    if (!inpTwelve.value) {
        alert("입력안함")
    }

    // chart.js
    // HTML에 따로 js를 추가하려 했지만 버튼을 클릭하면 발생하는 이벤트이므로 버튼 클릭 이벤트에 import 했음.
    resultChart(maxValue)
})