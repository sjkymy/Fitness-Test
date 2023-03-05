const express = require("express");
const path = require("path");

const app = express();

// frontend -> static 폴더로 이어지는 절대경로에서 static 폴더안에 정적 파일(이미지, CSS 및 JS) 사용하기.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))
// get요청 후 응답 방법. 모든 경로에 index.html 파일 제공.
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"))
});
// port를 생성하고 서버 실행하기. localhost:5001
app.listen(process.env.PORT || 5001, () => console.log("Server running..."));