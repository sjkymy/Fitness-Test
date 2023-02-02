const toggleBtn = document.querySelector(".btn_toggle");
const navMenu = document.querySelector(".menu_list");
const navIcon = document.querySelector(".link_icon");
const topBar = document.querySelector(".topbar");
const Main = document.querySelector("main");
const twelveTitle = Main.querySelector(".twelve_title");
const twelveIntro = Main.querySelector(".twelve_intro")
const twelveDesc = Main. querySelector(".twelve_desc");

// 스크롤 내리면 상단바 배경색 변경
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    // console.log(value);
    if (value >= 100) {
        topBar.style = "background-color: #333333";
    } else {
        topBar.style = "background-color: none";
    };

    if (value <= 1519) {
        twelveTitle.style.animation = "disappear 1.5s ease-out forwards";
        twelveIntro.style.animation = "disappear 1.5s ease-out forwards";
    } else {
        twelveTitle.style.animation = "slide 1.5s ease-out";
        twelveIntro.style.animation = "slide 1.5s ease-out";
    };

    if (value <= 1750) {
        twelveDesc.style.animation = "disappear 1.5s ease-out forwards";
    } else {
        twelveDesc.style.animation = "slide 1.5s ease-out";
    };
})

// 모바일 화면에서 메뉴 버튼 클릭하면 콘텐츠 나타나기
toggleBtn.addEventListener("click", (e) => {
    e.preventDefault()
    navMenu.classList.toggle("active");
    navIcon.classList.toggle("active");
    topBar.style = "background-color: #333333"
})

// 텍스트 애니메이션
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
txtEffect.observe(txtGroup);