let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// if(result.indexOf('/0') != -1){
//     result = undefined
// }
// function evaluate(expression) {
//       if (expression.includes("/0")) {
//       return "Cannot divide by zero";
//       } else {
//         return expression
//       }
// }

let result ='';
let arr = Array.from(buttons);
let count = 0;
let operators = document.querySelectorAll('.operator')
let secondCount = 0;
// let answer = Number(result)

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*' || e.target.innerHTML === '/'){
            count++
            secondCount++
            if(count === 2 && secondCount <= 2){
                result = eval(result)
                input.value = parseFloat(result.toFixed(6))
                count=1
            }
            else if(count === 2 && secondCount > 2){
                result  = eval(result)
                input.value = parseFloat(result.toFixed(6))
                count=1

            }
            // console.log(count)
        }
        if(e.target.innerHTML === '='){
            result = eval(result);
            input.value = parseFloat(result.toFixed(6))
            // result = Number(result)
            
        }

        else if(e.target.innerHTML === 'C'){
            result = '';
            input.value = result;
        }
        else{
            result += e.target.innerHTML;
            input.value = result;
        }
        
    
    })
    
    
})
//////////////////////////////////////////////////
//let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");
// let expression = "";
// let operatorCount = 0;
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     let value = e.target.innerHTML;
//     if (value === "+" || value === "-" || value === "*" || value === "/") {
//       operatorCount++;
//       if (operatorCount === 2) {
//         expression = evaluate(expression);
//         input.value = expression;
//         operatorCount = 1;
//       }
//     }
//     if (value === "=") {
//       expression = evaluate(expression);
//       input.value = expression;
//     }
//     else if (value === "C") {
//       expression = "";
//       input.value = expression;
//     }
//     else if (value === "←") {
//       expression = expression.slice(0, -1);
//       input.value = expression;
//     }
//     else {
//       expression += value;
//       input.value = expression;
//     }
//   });
// });

// function evaluate(expression) {
//   if (!expression || isNaN(expression)) {
//     return "";
//   }
//   if (expression.includes("/0")) {
//     return "Cannot divide by zero";
//   }
//   try {
//     return Math.round(Math.eval(expression) * 100) / 100;
//   } catch (error) {
//     return "Invalid expression";
//   }
// }