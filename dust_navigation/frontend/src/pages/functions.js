// 구현할 함수 list
// 1. 대기정보 결과 좋음/나쁨 표시
// 2. 결과에 따른 바 색깔 조정

export function getRating_pm10(value) {
    // console.log("getRating_pm10 함수 실행");

    const result = (
        value >= 0 && value <= 30 ? "좋음" :
        value >= 31 && value <= 80 ? "보통" :
        value >= 81 && value <= 150 ? "나쁨" :
        value >= 151 ? "매우 나쁨" : "null"
    )
    // console.log(result);
    return result;
};

export function getRating_pm25(value) {
    // console.log("getRating_pm25 함수 실행");

    const result = (
        value >= 0 && value <= 15 ? "좋음" :
        value >= 16 && value <= 35 ? "보통" :
        value >= 36 && value <= 75 ? "나쁨" :
        value >= 76 ? "매우 나쁨" : "null"
    )
    // console.log(result);
    return result;
};

export function getRating_co(value) {
    // console.log("getRating_co 함수 실행");

    const result = (
        value >= 0 && value <= 2 ? "좋음" :
        value >= 2.1 && value <= 9 ? "보통" :
        value >= 9.1 && value <= 15 ? "나쁨" :
        value >= 15.1 ? "매우 나쁨" : "null"
    )
    // console.log(result);
    return result;
};

// dustResult 등급 설정을 기반으로 ranking bar style background를 setting 해주는 function
export function getBarColor(value) {
    // console.log("getBarColor 함수 실행");
    // console.log("getBarColor's parameter value:", value);
    let color = "white"; // default color

    const result = (
        value === "좋음" ? color = "lightblue" :
        value === "보통" ? color = "lightgreen" :
        value === "나쁨" ? color = "yellow" :
        value === "매우 나쁨" ? color = "red" : "null"
    )
    const style = {background: color};
    // console.log("bar style is: ",style);
    return style;
};