import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Hello World</h1>
            <p>여기는 Home입니다.</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    };
}