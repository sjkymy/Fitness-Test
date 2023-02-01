// 운동 전 설문지 모달창
const modalOpen = () => {
    document.querySelector(".modal").classList.remove("hidden");
    // 모달창 뒷 배경 스크롤 막기
    document.body.style = `overflow: hidden`;
}

const modalClose = () => {
    document.querySelector(".modal").classList.add("hidden");
    document.body.style= `overflow: scroll`;
}

const modalOpenBtn = document.querySelector("#btnStart");
modalOpenBtn.addEventListener("click", modalOpen);

const modalCloseBtn = document.querySelector("#btnClose");
modalCloseBtn.addEventListener("click", modalClose);

const modalBox = document.querySelector(".modalBox");
const btnSubmit = modalBox.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", (e) => {
    const Inputs = 'input[name="riskCheck"]:checked';
    const result = modalBox.querySelectorAll(Inputs);
    e.preventDefault()
    if (result.length >= 1) {
        confirm("지금 운동 못해요")
    } else {
        alert('체력 등급 확인하러 갑시다!')
        console.log("해당사항 없음.");
    }
});