export default function cardioGrade(gender, age, cardioValue, data) {
    if (gender.value === "남성" && age.value === "20") {
        (cardioValue >= 0 && cardioValue < 38.1) ? data.push("매우 부족")
        : (cardioValue >= 38.1 && cardioValue < 44.9) ? data.push("부족")
        : (cardioValue >= 44.9 && cardioValue < 50.2) ? data.push("보통")
        : (cardioValue >= 50.2 && cardioValue < 57.1) ? data.push("우수")
        : (cardioValue >= 57.1) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    };

    if (gender.value === "남성" && age.value === "30") {
        (cardioValue >= 0 && cardioValue < 34.1) ? data.push("매우 부족")
        : (cardioValue >= 34.1 && cardioValue < 39.6) ? data.push("부족")
        : (cardioValue >= 39.6 && cardioValue < 45.2) ? data.push("보통")
        : (cardioValue >= 45.2 && cardioValue < 51.6) ? data.push("우수")
        : (cardioValue >= 51.6) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "40") {
        (cardioValue >= 0 && cardioValue < 30.5) ? data.push("매우 부족")
        : (cardioValue >= 30.5 && cardioValue < 35.7) ? data.push("부족")
        : (cardioValue >= 35.7 && cardioValue < 40.3) ? data.push("보통")
        : (cardioValue >= 40.3 && cardioValue < 46.7) ? data.push("우수")
        : (cardioValue >= 46.7) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "50") {
        (cardioValue >= 0 && cardioValue < 26.1) ? data.push("매우 부족")
        : (cardioValue >= 26.1 && cardioValue < 30.7) ? data.push("부족")
        : (cardioValue >= 30.7 && cardioValue < 35.1) ? data.push("보통")
        : (cardioValue >= 35.1 && cardioValue < 41.2) ? data.push("우수")
        : (cardioValue >= 41.2) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "남성" && age.value === "60") {
        (cardioValue >= 0 && cardioValue < 22.4) ? data.push("매우 부족")
        : (cardioValue >= 22.4 && cardioValue < 26.6) ? data.push("부족")
        : (cardioValue >= 26.6 && cardioValue < 30.5) ? data.push("보통")
        : (cardioValue >= 30.5 && cardioValue < 36.1) ? data.push("우수")
        : (cardioValue >= 36.1) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "20") {
        (cardioValue >= 0 && cardioValue < 28.6) ? data.push("매우 부족")
        : (cardioValue >= 28.6 && cardioValue < 34.6) ? data.push("부족")
        : (cardioValue >= 34.6 && cardioValue < 40.6) ? data.push("보통")
        : (cardioValue >= 40.6 && cardioValue < 46.5) ? data.push("우수")
        : (cardioValue >= 46.5) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "30") {
        (cardioValue >= 0 && cardioValue < 24.1) ? data.push("매우 부족")
        : (cardioValue >= 24.1 && cardioValue < 28.2) ? data.push("부족")
        : (cardioValue >= 28.2 && cardioValue < 32.2) ? data.push("보통")
        : (cardioValue >= 32.2 && cardioValue < 37.5) ? data.push("우수")
        : (cardioValue >= 37.5) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "40") {
        (cardioValue >= 0 && cardioValue < 21.3) ? data.push("매우 부족")
        : (cardioValue >= 21.3 && cardioValue < 24.9) ? data.push("부족")
        : (cardioValue >= 24.9 && cardioValue < 28.7) ? data.push("보통")
        : (cardioValue >= 28.7 && cardioValue < 34) ? data.push("우수")
        : (cardioValue >= 34) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "50") {
        (cardioValue >= 0 && cardioValue < 19.1) ? data.push("매우 부족")
        : (cardioValue >= 19.1 && cardioValue < 21.8) ? data.push("부족")
        : (cardioValue >= 21.8 && cardioValue < 25.2) ? data.push("보통")
        : (cardioValue >= 25.2 && cardioValue < 28.6) ? data.push("우수")
        : (cardioValue >= 28.6) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }

    if (gender.value === "여성" && age.value === "60") {
        (cardioValue >= 0 && cardioValue < 16.5) ? data.push("매우 부족")
        : (cardioValue >= 16.5 && cardioValue < 18.9) ? data.push("부족")
        : (cardioValue >= 18.9 && cardioValue < 21.2) ? data.push("보통")
        : (cardioValue >= 21.2 && cardioValue < 24.6) ? data.push("우수")
        : (cardioValue >= 24.6) ? data.push("매우 우수") : alert("입력값이 없습니다.");
    }
}