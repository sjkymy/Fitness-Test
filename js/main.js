const modalOpen = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const modalClose = () => {
    document.querySelector(".modal").classList.add("hidden");
}

const modalOpenBtn = document.querySelector(".btn_start");
modalOpenBtn.addEventListener("click", modalOpen);

const modalCloseBtn = document.querySelector(".btn_close");
modalCloseBtn.addEventListener("click", modalClose)