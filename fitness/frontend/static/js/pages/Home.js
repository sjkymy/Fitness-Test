import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <header class="topbar">
            <nav class="menu">
                <h1 class="logo"><a href="#home"><img src="../../static/assets/logo.png" alt="체력수준 평가 사이트 로고 브루스카디오"></a></h1>
                <ul class="menu_list">
                    <li><a href="#home">심폐체력 검사하기</a></li>
                    <li><a href="#VO2maxSection">최대산소섭취량</a></li>
                    <li><a href="#secMeasure">12분 달리기</a></li>
                </ul>
                <ul class="link_icon">
                    <a href="https://github.com/sjkymy"><i class="fa-brands fa-github" name="깃허브 주소"></i></a>
                    <a href="https://www.youtube.com/@healthchanger6509" name="유튜브 주소"><i class="fa-brands fa-youtube"></i></a>
                </ul>
                <a href="#" class="btn_toggle"><i class="fa-solid fa-bars"></i></a>
            </nav>
        </header>
    
        <main>
            <section class="sec_home" id="home">
                <h2 class="title">지금 당신의 <strong>체력수준</strong>을 확인해보세요!</h2>
                <button class="btn_start" id="btnStart"><a href="/posts" class="nav__link" data-link>시작하기</a></button>
                <p>삼성 혹은 애플 운동앱을 켜고 12분 동안 달린 거리를 측정해보세요.</p>
                <p>달린 거리를 입력하고 결과를 확인하세요.</p>
                <p>연령, 성별 대비 체력 수준을 확인할 수 있어요.</p>
            </section>

            <section class="sec_cardio">
                <h2 class="ir">왜 심폐체력인가?</h2>
                <div class="txt_group" id="txtGroup">
                    <p><strong>바디프로필 몸매</strong>보다</p>
                    <p><strong>3대 운동 무게</strong>보다</p>
                    <p>더 중요한 <strong class="pointword">심폐체력</strong></p>
                </div>
            </section>
            <section class="sec_cardio_desc" id="VO2maxSection">
                <div class="tit_group">
                    <h2 class="sec_desc_title">최대산소섭취량을 향상 시키자!</h2>
                    <p>심폐체력 지표로 사용되는 <strong>'최대산소섭취량'</strong></p>
                    <p>건강상태를 예측하는 중요한 지표입니다.</p>
                </div>
                <div class="effect_group">
                    <div class="effect one">
                        <h3>최대산소섭취량이 낮으면</h3>
                        <p>심혈관질환 위험 증가</p>
                        <p>대사질환 위험 증가</p>
                        <img src="../../static/assets/ECG.jpg" alt="">
                    </div>
                    <div class="effect two">
                        <h3>최대산소섭취량이 향상되면</h3>
                        <p>심혈관질환 위험 감소</p>
                        <p>대사질환 위험 감소</p>
                        <img src="../../static/assets/aerobic.png" alt="">
                    </div>
                </div>
            </section>
            <section class="sec_measure" id="secMeasure">
                <h3 class="twelve_title">12분 달리기</h3>
                <p class="twelve_intro">12분 달리기 검사는 최대산소섭취량을 예측할 수 있어요!</p>
                <p class="twelve_desc">💡 12분 검사는 12분 안에 최대한 먼 거리를 이동하는 것입니다.</p>
            </section>
            <section class="sec_contact">
                <div class="content_group">
                    <h3>출시 후 알림받기</h3>
                    <form class="form_info">
                        <label class="check_label" for="gender">성별</label>
                        <select class="gender_select" id="gender" required>
                            <option selected>성별 선택</option>
                            <option value="m">남성</option>
                            <option value="w">여성</option>
                        </select>
                        <label class="check_label" for="age">나이</label>
                        <select class="age_select" id="age" required>
                            <option selected>연령대 선택</option>
                            <option value="20">20대</option>
                            <option value="30">30대</option>
                            <option value="40">40대</option>
                            <option value="50">50대</option>
                            <option value="60">60대</option>
                        </select>
                        <label class="check_label" for="email">이메일</label>
                        <input class="inp_email" type="email" id="email" placeholder="예) bruce@naver.com" required>
                        <div class="agree_group">
                            <input type="checkbox" id="information" required>
                            <label for="information">[필수] 개인정보 수집 및 활용 동의</label>
                        </div>
                        <div class="agree_box">
                            <p>서비스 출시 알림을 위해 아래와 같이 개인정보를 수집 및 이용합니다.</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>개인정보 수집 및 이용목적</th>
                                        <td>출시 알림 신청</td>
                                    </tr>
                                    <tr>
                                        <th>수집하는 개인정보 항목</th>
                                        <td>이메일</td>
                                    </tr>
                                    <tr>
                                        <th>개인정보 보유 및 이용기간</th>
                                        <td>출시 알림 전송 후 1개월 이내 폐기 (출시 알림 전송에 상관없이 신청 이후 3개월 이내 폐기)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>귀하는 서비스 이용에 필요한 최소한의 개임정보 수집 및 이용에 동의하지 않을 수 있으나, 동의를 거부 할 경우 서비스 이용이 불가합니다.</p>
                        </div>
                        <button class="btn_contact">확인</button>
                    </form>
                </div>
            </section>
        </main>
        <footer>
            wer
        </footer>
        `;
    };
}