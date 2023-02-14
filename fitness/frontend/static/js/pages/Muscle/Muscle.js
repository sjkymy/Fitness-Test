import AbstractView from "../AbstractView/AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Muscle");
    }

    async getHtml() {
        return `
            <form id="testForm">
            
                <legend><a href="/" class="iconHome" data-link><i class="fa-solid fa-house"></i></a>근지구력 등급</legend>
                <!-- 정보 입력 -->
                <section class="gender_age_group">
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
                </section>
                <section class="sec_pushup">
                    <label for="inpPushup">팔굽혀펴기를 최대 몇 회 하셨나요?</label>
                    <input type="number" name="pushup" id="inpPushup" oninput="handleOnInput(this, 2)" placeholder="예) 10" />회
                </section>
                <button id="btnSubmit">결과보기</button>
                <!-- //정보 입력 -->

                <!-- 결과 로딩 화면 -->
                <section class="cont-result-loading">
                    <h2 class="ir">결과 확인 로딩중</h2>
                    <div class="progress_bar"></div>
                </section>
                <!-- //결과 로딩 화면 -->

                <!-- 결과 화면 -->
                <section class="sec_resultPushup">
                    <div class="inp_result">
                        <label for="inpResultPushup">나의 <strong>팔굽혀펴기</strong> 결과</label>
                        <input type="text" name="pushup" id="inpResultPushup" readonly>회
                    </div>
                    <div id="canvasGrade" class="canvas_grade"></div>
                </section>
                
                <section class="sec_chart">
                    <div class="chart_bar">
                        <canvas id="canvasBar"></canvas>
                    </div>
                    <div class="bar_comment"></div>
                    <div class="chart_gauge">
                        <canvas id="gaugeChart"></canvas>
                    </div>
                    <div class="gauge_comment"></div>
                </section>
                <!-- //결과 화면 -->
            </form>
        <nav class="tab_bar">
            <a href="/cardio" class="nav__link" data-link><i class="fa-solid fa-person-running"></i>심폐체력</a>
            <a href="/muscle" class="nav__link" data-link><i class="fa-solid fa-dumbbell"></i>근지구력</a>
        </nav>
        `;
    };
}