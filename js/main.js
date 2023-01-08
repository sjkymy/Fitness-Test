const modalOpen = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const modalClose = () => {
    document.querySelector(".modal").classList.add("hidden");
}

const modalOpenBtn = document.querySelector("#btnStart");
modalOpenBtn.addEventListener("click", modalOpen);

const modalCloseBtn = document.querySelector("#btnClose");
modalCloseBtn.addEventListener("click", modalClose);


const modalBox = document.querySelector('.modalBox');
const btnSubmit = modalBox.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    const Inputs = 'input[name="riskCheck"]:checked';
    const result = modalBox.querySelectorAll(Inputs);
    e.preventDefault()

    if (result.length >= 1) {
        confirm('지금 운동 못해요')
    } else {
        alert('넘어갑시다.')
        console.log("해당사항 없음.");
    }
})