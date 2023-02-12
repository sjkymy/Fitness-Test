// import style from "../../assets/logo.png"
// import navigate from "../components/Navigate.js"

export default function splash() {
    const navigate = url => {
        history.pushState(null, null, url);
    }

    document.body.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", (e) => {
            navigate("/posts");  
        });
    })
        
}

// setTimeout(() => {
//     navigate("/posts");
// },1000)