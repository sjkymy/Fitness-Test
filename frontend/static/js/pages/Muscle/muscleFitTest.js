import resultChart from "./muscleChart.js";

export default function muscleFitTest() {
    const Splash = document.querySelector(".splash");
    const testForm = document.querySelector("#testForm");
    const inpGroup = testForm.querySelector(".sec_pushup");
    const inpPushup = testForm.querySelector("#inpPushup");
    const ResultPushup = testForm.querySelector("#inpResultPushup");
    const btnSubmit = testForm.querySelector("#btnSubmit");
    const loadingSection = testForm.querySelector(".cont-result-loading");

    // 숫자가 아니면 초기화하고 에러메세지 추가
    inpPushup.addEventListener("input", (e) => {
        const temp = document.createElement("p");
        temp.classList.add("temp_error")
        const textnode = document.createTextNode("*숫자만 입력 가능합니다.");

        if (!parseInt(e.target.value)) {
            inpPushup.value = null;
            temp.appendChild(textnode)
            inpGroup.appendChild(temp)
        };
    }, { once : true}); // 이벤트가 한번만 발생하게 하기 위해서 once 사용

    // 버튼 클릭하면 VO2max input에 계산된 결과 전달
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        loadingSection.style.display = "block";

        // 로딩화면이 보이고 2초 뒤에 결과 나타나기.
        setTimeout(function() {
            loadingSection.style.display = "none";
            
            ResultPushup.value = inpPushup.value;
            const maxValue = ResultPushup.value;
            if (!inpPushup.value) {
                alert("성별 및 연령대를 선택하세요.")
                ResultPushup.value = 0
                return
            }
            
            // chart.js
            // HTML에 따로 js를 추가하려 했지만 버튼을 클릭하면 발생하는 이벤트이므로 버튼 클릭 이벤트에 import 했음.
            resultChart(maxValue)
        }, 2000)
    });

    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((e) => {
        if (e.pathname === document.location.pathname) {
            e.style.backgroundColor = "#dfdddd"
        }
    });
}