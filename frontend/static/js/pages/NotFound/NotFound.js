export default class {
    constructor() {
        document.title = "404 Not found";
    }
    async getHtml() {
        return `
            <h1>여기는 404</h1>
            <i class="fa-solid fa-heart-crack"></i>
            <p>페이지 없음</p>
        `;
    }
}