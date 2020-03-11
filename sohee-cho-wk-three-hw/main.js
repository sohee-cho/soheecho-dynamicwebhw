
const addNums = () => { 
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = parseInt(num1, 10) + parseInt(num2, 10);
    document.getElementById("result").innerHTML = sum;
};

const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click", addNums);

const multiplyNums = () => {
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let multiply = num3 * num4;
    document.getElementById("result2").innerHTML = multiply;
};

const btnMultiply = document.getElementById("multiply");
btnMultiply.addEventListener("click", multiplyNums);

const divideNums = () => {
    const num5 = document.getElementById("num5").value;
    const num6 = document.getElementById("num6").value;
    const divide = num5 / num6;
    document.getElementById("result3").innerHTML = divide;
};

const btnDivide = document.getElementById("divide");
btnDivide.addEventListener("click", divideNums);


const subtractNums = () => {
    const num7 = document.getElementById("num7").value;
    const num8 = document.getElementById("num8").value;
    const subtract = num7 - num8;
    document.getElementById("result4").innerHTML = subtract;
};

const btnSubtract = document.getElementById("subtract");
btnSubtract.addEventListener("click", subtractNums);


const divideNumsFixed = () => {
    const num9 = document.getElementById("num9").value;
    const num10 = document.getElementById("num10").value;
    const divide = num9 / num10;
    const divideFixed = divide.toFixed(2);
    document.getElementById("result5").innerHTML = divideFixed;
};

const btnDivideFixed = document.getElementById("dividefixed");
btnDivideFixed.addEventListener("click", divideNumsFixed);

const leftOver = () => {
    const firstNum = document.getElementById("firstNum").value;
    const secondNum = document.getElementById("secondNum").value;
    const remainder = firstNum % secondNum;
    document.getElementById("remainder").innerHTML = remainder;
};

const btnModulo = document.getElementById("modulo");
btnModulo.addEventListener("click", leftOver);



