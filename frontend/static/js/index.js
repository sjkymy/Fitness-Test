// Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec ---> 콘솔에서 오류 표시가 남. 파일 경로와 확장명을 정확하게 기입해야 함.
import Home from "./pages/Home/Home.js";
import Posts from "./pages/Cardio/Cardio.js";
import Muscle from "./pages/Muscle/Muscle.js";
import NotFound from "./pages/NotFound/NotFound.js";
import homeEffect from "./pages/Home/homeEffect.js";
import fitTest from "./pages/Cardio/FitTest.js";
import muscleFitTest from "./pages/Muscle/muscleFitTest.js";

const router = async () => {
    const routes = [
        { path: "/", view: Home, script: homeEffect },
        { path: "/cardio", view: Posts, script: fitTest },
        { path: "/muscle", view: Muscle, script: muscleFitTest },
        { path: "/404", view: NotFound }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch : true
        }
        const view = new NotFound();
        document.querySelector("#app").innerHTML = await view.getHtml();
    } else {
        const view = new match.route.view();
        document.querySelector("#app").innerHTML = await view.getHtml();
    }

    match.route.script();
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})