import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hello World</h1>
            <p>loremloremloremloremloremloremlorem</p>
            <p>
                <a href="/posts" data-link>View recnet posts</a>
            </p>
        `;
    };
}