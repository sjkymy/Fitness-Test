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
### (1) 라우팅 시스템
history API(브라우저 라우터)를 이용하여 라우팅 개발했다.
라우팅 개발에는 history API(브라우저 라우터)와 Fragment hash(해시 라우터)가 있다.
- history API를 이용한 이유 <br />
**첫 번째**, URL이 깔끔하다. hash는 URL 창에 해시(#)가 들어간다. history는 일반적으로 볼 수 있는 형태다. <br />
**두 번째**, pushState 메서드를 통해 url이 업데이트 될 때마다 브라우저 방문 기록이 남는다.(세션에 이전상태를 기록) <br />
**세 번째**, SEO에 유리하다. 해시 뒷 부분은 브라우저에서 탐색이 가능하지만 서버에서는 인식을 못한다. 검색엔진은 서버를 탐색하기 때문에. <br />
**네 번째**, Redirection이 발생했을 때, 해시 라우터는 이전의 도메인 주소로 요청되어 페이지 오류가 발생하지 않지만 잘못된 경로 혹은 오류가 있을 경우 아무 정보가 없는 것 보다 404 에러를 유저에게 전달하는 것이 필요하다.(대부분 단점이라고 말하지만 필요한 부분이라고 생각됨.) <br />
**다섯 번째**, 가장 보편화 되어 있음.

### (2) 서버 구동
node.js 프레임워크 express를 설치하고 서부를 구축했다.
