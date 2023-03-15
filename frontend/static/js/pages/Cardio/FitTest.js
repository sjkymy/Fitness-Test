import resultChart from "./Chart.js";

// Uncaught TypeError: Cannot read property 'addEventListener' of null 오류로 인해 웹브라우저의 모든 콘텐츠 로드가 끝났을 때 호출되도록 window.onload = function(){} 사용
// 했지만 이 방법 사용 안함(트러블슈팅)

export default function fitTest() {
    const testForm = document.querySelector("#testForm");
    const inpGroup = testForm.querySelector(".twelve");
    const inpTwelve = testForm.querySelector("#twelveRun");
    const voMax = testForm.querySelector("#inpVoMax");
    const btnSubmit = testForm.querySelector("#btnSubmit");
    const btnReset = testForm.querySelector("#btnReset")
    const loadingSection = testForm.querySelector(".cont-result-loading");

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
    btnReset.style.display = "none"
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        loadingSection.style.display = "block";

        // 로딩화면이 보이고 2초 뒤에 결과 나타나기.
        setTimeout(function() {
            loadingSection.style.display = "none";
            btnSubmit.style.display = "none";
            btnReset.style.display = "block";
            
            voMax.value = ((inpTwelve.value - 504.9)/44.73).toFixed(1);
            const maxValue = voMax.value;
            if (!inpTwelve.value) {
                alert("성별 및 연령대를 선택하세요.")
                voMax.value = 0
                return
            }
            
            // chart.js
            // HTML에 따로 js를 추가하려 했지만 버튼을 클릭하면 발생하는 이벤트이므로 버튼 클릭 이벤트에 import 했음.
            resultChart(maxValue)
        }, 2000)
    });
    
    btnReset.addEventListener("click", () => {
        window.location.reload()
    })

    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((e) => {
        if (e.pathname === document.location.pathname) {
            e.style.backgroundColor = "#dfdddd"
        }
    });
}