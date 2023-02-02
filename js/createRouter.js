export default function createRouter() {
    const routes = [];

    const router = {

        // 라우터 기능 1. 애플리케이션의 경로 목록들을 저장한다.
        addRoute(fragment, component) {
            routes.push({fragment, component});
            return this;
        },

        // 라우터 기능 2. 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
        start() {
            // routes 배열에서 현재 브라우저 hash값과 동일한 해시값을 가진 구성 요소를 찾는다.
            const checkRoutes = () => {
                const currentRoute = routes.find(route => route.fragment === window.location.hash);
                currentRoute.component(); // 페이지 이동을 보여주기 위해 innerText를 변경하는 메서드
            };
            window.addEventListener("hashchange", checkRoutes);
            checkRoutes();
        }
    };

    return router;
}