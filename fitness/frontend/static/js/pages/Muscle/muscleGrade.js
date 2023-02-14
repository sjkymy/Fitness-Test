export default function muscleGrade(gender, age, cardioValue, data) {
    if (gender.value === "남성" && age.value === "20") {
        (cardioValue >= 0 && cardioValue < 17) ? data.push("약함")
        : (cardioValue >= 17 && cardioValue < 22) ? data.push("보통")
        : (cardioValue >= 22 && cardioValue < 29) ? data.push("우수")
        : (cardioValue >= 29 && cardioValue < 36) ? data.push("매우 우수")
        : (cardioValue >= 36) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    };

    if (gender.value === "남성" && age.value === "30") {
        (cardioValue >= 0 && cardioValue < 12) ? data.push("약함")
        : (cardioValue >= 12 && cardioValue < 17) ? data.push("보통")
        : (cardioValue >= 17 && cardioValue < 22) ? data.push("우수")
        : (cardioValue >= 22 && cardioValue < 30) ? data.push("매우 우수")
        : (cardioValue >= 30) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "40") {
        (cardioValue >= 0 && cardioValue < 10) ? data.push("약함")
        : (cardioValue >= 10 && cardioValue < 13) ? data.push("보통")
        : (cardioValue >= 13 && cardioValue < 17) ? data.push("우수")
        : (cardioValue >= 17 && cardioValue < 25) ? data.push("매우 우수")
        : (cardioValue >= 25) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "50") {
        (cardioValue >= 0 && cardioValue < 7) ? data.push("약함")
        : (cardioValue >= 7 && cardioValue < 10) ? data.push("보통")
        : (cardioValue >= 10 && cardioValue < 13) ? data.push("우수")
        : (cardioValue >= 13 && cardioValue < 21) ? data.push("매우 우수")
        : (cardioValue >= 21) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "60") {
        (cardioValue >= 0 && cardioValue < 5) ? data.push("약함")
        : (cardioValue >= 5 && cardioValue < 8) ? data.push("보통")
        : (cardioValue >= 8 && cardioValue < 11) ? data.push("우수")
        : (cardioValue >= 11 && cardioValue < 18) ? data.push("매우 우수")
        : (cardioValue >= 18) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "20") {
        (cardioValue >= 0 && cardioValue < 10) ? data.push("약함")
        : (cardioValue >= 10 && cardioValue < 15) ? data.push("보통")
        : (cardioValue >= 15 && cardioValue < 21) ? data.push("우수")
        : (cardioValue >= 21 && cardioValue < 30) ? data.push("매우 우수")
        : (cardioValue >= 30) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "30") {
        (cardioValue >= 0 && cardioValue < 8) ? data.push("약함")
        : (cardioValue >= 8 && cardioValue < 13) ? data.push("보통")
        : (cardioValue >= 13 && cardioValue < 20) ? data.push("우수")
        : (cardioValue >= 20 && cardioValue < 27) ? data.push("매우 우수")
        : (cardioValue >= 27) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "40") {
        (cardioValue >= 0 && cardioValue < 5) ? data.push("약함")
        : (cardioValue >= 5 && cardioValue < 11) ? data.push("보통")
        : (cardioValue >= 11 && cardioValue < 15) ? data.push("우수")
        : (cardioValue >= 15 && cardioValue < 24) ? data.push("매우 우수")
        : (cardioValue >= 24) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "50") {
        (cardioValue >= 0 && cardioValue < 2) ? data.push("약함")
        : (cardioValue >= 2 && cardioValue < 7) ? data.push("보통")
        : (cardioValue >= 7 && cardioValue < 11) ? data.push("우수")
        : (cardioValue >= 11 && cardioValue < 21) ? data.push("매우 우수")
        : (cardioValue >= 21) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "60") {
        (cardioValue >= 0 && cardioValue < 2) ? data.push("약함")
        : (cardioValue >= 2 && cardioValue < 5) ? data.push("보통")
        : (cardioValue >= 5 && cardioValue < 12) ? data.push("우수")
        : (cardioValue >= 12 && cardioValue < 17) ? data.push("매우 우수")
        : (cardioValue >= 17) ? data.push("매우 훌륭") : alert("입력값이 없습니다.");
    }
}