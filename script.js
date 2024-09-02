function calculatePercentage1() {
    const percent = document.getElementById('percent1').value;
    const number = document.getElementById('number1').value;
    const result = (percent / 100) * number;
    document.getElementById('result1').value = result.toFixed(2);
}

function calculatePercentage2() {
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;
    const result = (number2 / number3) * 100;
    document.getElementById('result2').value = result.toFixed(2);
}

function calculatePercentageChange() {
    const number4 = document.getElementById('number4').value;
    const number5 = document.getElementById('number5').value;
    const result = ((number5 - number4) / number4) * 100;
    document.getElementById('result3').value = result.toFixed(2);
}
