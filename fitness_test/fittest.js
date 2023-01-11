const Form = document.querySelector("#Form")
const inpGroup = Form.querySelector(".twelve")
const inpTwelve = Form.querySelector("#twelveRun");
const voMax = Form.querySelector("#voMax");
const btnSubmit = Form.querySelector("#btnSubmit");

inpTwelve.addEventListener("input", (e) => {
    // 숫자가 아니면 초기화하고 에러메세지 추가
    const temp = document.createElement("p");
    temp.classList.add("temp_color")
    const textnode = document.createTextNode("*숫자만 입력 가능합니다.");
    if (!parseInt(e.target.value)) {
        inpTwelve.value = null;
        temp.appendChild(textnode)
        inpGroup.appendChild(temp)
    };    
}, { once : true});

// 숫자 5자리까지만 입력 가능한 함수
function handleOnInput(e, maxlength) {
    if(e.value.length > maxlength)  {
      e.value 
        = e.value.substr(0, maxlength);
    }
};

// 버튼 클릭하면 VO2max input에 계산된 결과 전달
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    voMax.value = (inpTwelve.value - 504.9)/44.73
    console.log(typeof(voMax.value));
})