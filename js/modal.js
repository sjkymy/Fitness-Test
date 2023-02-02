// 운동 전 설문지 모달창

const Modal = document.querySelector("#modal");

const modalOpen = () => {
    document.querySelector(".modal").classList.remove("hidden");
    // 모달창 뒷 배경 스크롤 막기
    document.body.style = `overflow: hidden`;

    // 마크업
    const modalForm = document.createElement("form");
    const modalTitle = document.createElement("h2");
    const modalNotice = document.createElement("p");

    modalForm.classList.add("modalBox");
    Modal.appendChild(modalForm);
    modalTitle.innerText = "운동 참여 전 설문지";
    modalForm.appendChild(modalTitle);

    modalNotice.classList.add("msg-notice");
    modalNotice.innerHTML = `아래 <strong>6개</strong>의 질문을 주의 깊게 읽고 해당되는 문항의 체크박스에 표시하세요.`;
    modalForm.appendChild(modalNotice);
    
    const Q1 = document.createElement("div");
    Q1.classList.add("que_group");
    Q1.innerHTML = `
        <label for="inpQ1">1. 현재 심장질환 혹은 만성질환(고혈압, 당뇨 등)이 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ1">`;
    modalForm.appendChild(Q1);

    const Q2 = document.createElement("div");
    Q2.classList.add("que_group");
    Q2.innerHTML = `
        <label for="inpQ2">2. 1번 질문의 질환을 치료하기 위해 현재 복용 중인 약물이 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ2">
    `;
    modalForm.appendChild(Q2);

    const Q3 = document.createElement("div");
    Q3.classList.add("que_group");
    Q3.innerHTML = `
        <label for="inpQ3">3. 일상생활에서 혹은 신체활동(운동)을 할 때 가슴에 통증이 생기는 경우가 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ3">
    `;
    modalForm.appendChild(Q3);

    const Q4 = document.createElement("div");
    Q4.classList.add("que_group");
    Q4.innerHTML = `
        <label for="inpQ4">4. 지난 1년 동안 어지럼증으로 쓰러지거나 의식을 잃은 적이 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ4">
    `;
    modalForm.appendChild(Q4);

    const Q5 = document.createElement("div");
    Q5.classList.add("que_group");
    Q5.innerHTML = `
        <label for="inpQ5">5. 일상활동 중 뼈, 관절, 연부조직(근육, 인대, 건)에 통증 혹은 불편감이 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ5">
    `;
    modalForm.appendChild(Q5);

    const Q6 = document.createElement("div");
    Q6.classList.add("que_group");
    Q6.innerHTML = `
        <label for="inpQ6">6. 의사에게 의료진 없이 운동을 하면 안된다고 들은 적이 있다.</label>
        <input type="checkbox" name="riskCheck" value="yes" id="inpQ6">
    `;
    modalForm.appendChild(Q6);

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn_group");
    btnGroup.innerHTML = `
        <button class="btn_position" id="btnClose">취소</button>
        <button class="btn_position" id="btnSubmit">제출하기</button>
    `;
    modalForm.appendChild(btnGroup);

    const btnSubmit = modalForm.querySelector("#btnSubmit");
    btnSubmit.addEventListener("click", (e) => {
        const Inputs = 'input[name="riskCheck"]:checked';
        const result = modalForm.querySelectorAll(Inputs);
        e.preventDefault()
        if (result.length >= 1) {
            confirm("지금 운동 못해요")
        } else {
            alert('체력 등급 확인하러 갑시다!')
            console.log("해당사항 없음.");
        }
    });
};

const modalOpenBtn = document.querySelector("#btnStart");
modalOpenBtn.addEventListener("click", modalOpen);

const modalClose = () => {
    Modal.classList.add("hidden");
    document.body.style= `overflow: scroll`;
};

const modalCloseBtn = Modal.querySelector("#btnClose");
if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", modalClose);
};