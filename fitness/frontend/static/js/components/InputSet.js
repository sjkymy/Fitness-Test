// 숫자 4자리까지만 입력 가능한 함수(fittest.js에서 오류가 나서 현재 파일로 옮김)
function handleOnInput(e, maxlength) {
    if (e.value.length > maxlength)  {
      e.value = e.value.substr(0, maxlength);
    }
};