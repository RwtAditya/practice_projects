let numGlobal;
let secNumGlobal;
let expression = [];

let screen = document.querySelector('.input_screen');

function calculate(operator){
    console.log(expression);
    if(expression[1] == '+'){
        let answer = Number(expression[0]) + Number(expression[2]);
        screen.innerHTML = answer.toString();
        expression.splice(0,3);
        expression[0] = answer.toString();
        expression[1] = operator;
        numGlobal = undefined;
        console.log(answer);
    }else if(expression[1] == '-'){
        let answer = Number(expression[0]) - Number(expression[2]);
        screen.innerHTML = answer.toString();
        expression.splice(0,3);
        expression[0] = answer.toString();
        expression[1] = operator;
        numGlobal = undefined;
        console.log(answer);
    }else if(expression[1] == 'X'){
        let answer = Number(expression[0]) * Number(expression[2]);
        screen.innerHTML = answer.toString();
        expression.splice(0,3);
        expression[0] = answer.toString();
        expression[1] = operator;
        numGlobal = undefined;
        console.log(answer);
    }else if(expression[1] == '%'){
        let answer = Number(expression[0]) / Number(expression[2]);
        screen.innerHTML = answer.toString();
        expression.splice(0,3);
        expression[0] = answer.toString();
        expression[1] = operator;
        numGlobal = undefined;
        console.log(answer);
    }else if(expression[1] == '='){
        let answer = Number(expression[0]) + Number(numGlobal);
        screen.innerHTML = answer.toString();
        expression.splice(0,3);
        numGlobal = undefined;
        console.log(answer);
    }
}

function initialZero(){
    screen.innerHTML = '0';
}

initialZero()


let btns = document.querySelectorAll('button');
btns.forEach((item) => {
    item.addEventListener('click', () => {
        let classNm = item.getAttribute("class");
        if(classNm == '+' || classNm == '-' || classNm == '%' || classNm == 'X'){
            if(numGlobal == undefined){
                screen.innerHTML = 'ERROR';
            }else if(expression.length == 0){
                expression[0] = numGlobal;
                expression[1] = classNm;
                numGlobal = undefined;
            }
            else{
                expression[2] = numGlobal;
                calculate(classNm);
            }
        }
        else if(classNm == '='){
            calculate();
        }
        else{
            if(numGlobal == undefined){
                screen.innerHTML = classNm;
                numGlobal = classNm;
            }
            else{
                screen.innerHTML += classNm;
                numGlobal += classNm;
            }

        }
    })
});
