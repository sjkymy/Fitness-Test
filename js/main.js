const toggleBtn = document.querySelector(".btn_toggle");
const navMenu = document.querySelector(".menu_list");
const navIcon = document.querySelector(".link_icon");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navIcon.classList.toggle("active");
})

const modalOpen = () => {
    document.querySelector(".modal").classList.remove("hidden");
    // 모달창 뒷 배경 스크롤 막기
    document.body.style= `overflow: hidden`;
}

const modalClose = () => {
    document.querySelector(".modal").classList.add("hidden");
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

const txtEffect = new IntersectionObserver((e) => {
    if (e[0].isIntersecting) {
        e[0].target.style.opacity = 1;
        e[0].target.style.transform = "translateZ(0)";
    } else {
        e[0].target.style.opacity = 0;
        e[0].target.style.transform = "translate3d(0, 50%, 0)";
    }
})

const txtGroup = document.querySelector(".txt_group");
txtEffect.observe(txtGroup)