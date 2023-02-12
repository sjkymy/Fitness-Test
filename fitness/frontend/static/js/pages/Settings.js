import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <div class="splash">
                <!-- <img src="../../assets/logo.png" alt="zz"> -->
            </div>
        `;
    };
}