import createRouter from "./createRouter.js";

const Container = document.querySelector(".container")
const pages = {
    melon: () => Container.innerHTML = "<p>melon page</p>"
}

const router = createRouter();

router.addRoute("#/melon", pages.melon)
     .start();