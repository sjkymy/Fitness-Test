
    const Wrapper = document.querySelector(".wrapper");
    const Form = document.createElement("form");
    Form.setAttribute("id", "testForm");
    const Div1 = document.createElement("div");
    Div1.classList.add("gender_age_group");
    Form.appendChild(Div1);
    Wrapper.appendChild(Form)
    Div1.innerHTML = `
        <p class="tit_gender">성별을 선택하세요</p>
        <select name="gender" id="selecGender">
            <option value='' selected>-- 성별 --</option>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
        </select>
        <p class="tit_age">연령대를 선택하세요</p>
        <select name="age" id="selecAge">
            <option value='' selected>-- 연령대 --</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
        </select>
    `;

    const Div2 = document.createElement("div");
    Div2.classList.add("twelve");
    Form.appendChild(Div2);
    Div2.innerHTML = `
        <label for="twelveRun">12분 동안 몇 미터(m)를 달렸나요?</label>
        <input type="number" name="twelve" id="twelveRun" oninput="handleOnInput(this, 4)" placeholder="예) 3000" />미터(m)
    `;

    const Btn1 = document.createElement("button");
    const Btn1Txt = document.createTextNode("결과보기");
    Btn1.appendChild(Btn1Txt);
    Btn1.setAttribute("id", "btnSubmit");
    Form.appendChild(Btn1);

    // 결과 로딩 화면
    const Section1 = document.createElement("section");
    Section1.classList.add("cont-result-loading");
    Form.appendChild(Section1);
    Section1.innerHTML = `
        <h2 class="ir">결과 확인 로딩중</h2>
        <div class="progress_bar"></div>
    `;
    

    // 결과 화면
    const Section2 = document.createElement("section");
    Section2.classList.add("vo2_max");
    Form.appendChild(Section2);
    Section2.innerHTML = `
        <div class="inp_result">
            <label for="inpVoMax">나의 <strong>VO<sub>2max</sub></strong> 결과</label>
            <input type="text" name="voMax" id="inpVoMax" readonly>ml/kg/min
        </div>
        <div id="canvasGrade" class="canvas_grade"></div>
    `;

    const Section3 = document.createElement("section");
    Section3.classList.add("sec_chart");
    Form.appendChild(Section3);
    Section3.innerHTML = `
        <div class="chart_bar">
            <canvas id="canvasBar"></canvas>
        </div>
        <div class="bar_comment"></div>
        <div class="chart_gauge">
            <canvas id="gaugeChart"></canvas>
        </div>
        <div class="gauge_comment"></div>
    `;
