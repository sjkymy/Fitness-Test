# 부르스카디오(Bruce-Cardio)
동일 연령대 및 성별 안에서 개인의 심폐체력과 근지구력 수준을 확인할 수 있는 서비스.

+ Vanilla JavaScript로 SPA(Single Page Application) 구현.
+ Chart.js와 D3.js를 이용하여 데이터 시각화.
+ Firebase Cloud를 이용하여 테이터베이스를 만들고 데이터를 저장.
+ 반응형 디자인 구현.

<br />

## 1. 기술스택(Stack)
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white">

<br />

## 2. 페이지 미리보기(Preview)
<div>
  <p>(1) 랜딩페이지 첫 화면</p>
  <img src="https://user-images.githubusercontent.com/112460273/222768278-e625cbbd-d632-482e-a80b-c620824c854a.png" width="70%" />
</div>
<br />
<div>
  <p>(2) 체력 수준 평가 페이지 정보 입력 화면 및 결과 화면</p>
  <span>
    <img src="https://user-images.githubusercontent.com/112460273/222768350-c13f2d87-9ccb-4580-86b1-25a587b31834.png" width="30%" />
  </span>
  <span>
    <img src="https://user-images.githubusercontent.com/112460273/222768362-7f0884dd-9d1a-4053-bd8b-da6baf46fb1b.png" width="30%" />
  </span>
  <span>
    <img src="https://user-images.githubusercontent.com/112460273/222771543-83ff9f38-15a4-4233-8ead-4ddd70981c02.png" width="30%" />
  </span>
</div>

## 3. 개발환경
### (1) 라우팅 시스템 (index.js)
history API(브라우저 라우터)를 이용하여 라우팅 개발했다.
라우팅 개발에는 history API(브라우저 라우터)와 Fragment hash(해시 라우터)가 있다.
- history API를 이용한 이유 <br />
**첫 번째**, URL이 깔끔하다. hash는 URL 창에 해시(#)가 들어간다. history는 일반적으로 볼 수 있는 형태다. <br />
**두 번째**, pushState 메서드를 통해 url이 업데이트 될 때마다 브라우저 방문 기록이 남는다.(세션에 이전상태를 기록) <br />
**세 번째**, SEO에 유리하다. 해시 뒷 부분은 브라우저에서 탐색이 가능하지만 서버에서는 인식을 못한다. 검색엔진은 서버를 탐색하기 때문에. <br />
**네 번째**, Redirection이 발생했을 때, 해시 라우터는 이전의 도메인 주소로 요청되어 페이지 오류가 발생하지 않지만 잘못된 경로 혹은 오류가 있을 경우 아무 정보가 없는 것 보다 404 에러를 유저에게 전달하는 것이 필요하다.(대부분 단점이라고 말하지만 필요한 부분이라고 생각됨.) <br />
**다섯 번째**, 가장 보편화 되어 있음.

### (2) 서버 구동 (server.js)
node.js 프레임워크 express를 설치하고 서버를 구축했다. <br />
<code>npm init</code> // package.json 생성.<br />
<code>npm install express</code> // express 설치.
```javascript
// frontend -> static 폴더로 이어지는 절대경로에서 static 폴더안에 정적 파일(이미지, CSS 및 JS) 사용하기.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))
// get요청 후 응답 방법. 모든 경로에 index.html 파일 제공.
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"))
});
// port를 생성하고 서버 실행하기. localhost:5001
app.listen(process.env.PORT || 5001, () => console.log("Server running..."));
```

### (3) 데이터 시각화 (Chart.js / muscleChart.js)
조건문으로 

+ D3.js  https://d3js.org <br />
  - 체력 수준에 따라 배경색과 텍스트가 다르게 나타난다.
  - 아래 코드 index.html에 추가.
  ```javascript
  <script src="https://d3js.org/d3.v7.min.js"></script>
  ```

+ Chart.js  https://github.com/haiiaaa/chartjs-gauge <br />
  - bar 형태의 그래프를 통해 동일 연령대 및 성별에서의 평균값과 사용자의 결과값을 비교한다. <br />
  - gauge 형태의 그래프를 통해 5개로 구분된 체력 등급 중 해당하는 등급에 표시된다.
  - 아래 코드 index.html에 추가.
  ```javascript
  <script src="https://unpkg.com/chart.js@2.8.0/dist/Chart.bundle.js"></script>
  <script src="https://unpkg.com/chartjs-gauge@0.3.0/dist/chartjs-gauge.js"></script>
  <script src="https://unpkg.com/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.js"></script>
  ```
