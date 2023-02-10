import AbstractView from "./AbstractView.js";
// import AbstractView from "../components/FitTest";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <form id="testForm">
            <legend>심폐체력 등급</legend>
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
            <section class="twelve">
                <label for="twelveRun">12분 동안 몇 미터(m)를 달렸나요?</label>
                <input type="number" name="twelve" id="twelveRun" oninput="handleOnInput(this, 4)" placeholder="예) 3000" />미터(m)
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
            <section class="vo2_max">
                <div class="inp_result">
                    <label for="inpVoMax">나의 <strong>VO<sub>2max</sub></strong> 결과</label>
                    <input type="text" name="voMax" id="inpVoMax" readonly>ml/kg/min
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
        `;
    };
};