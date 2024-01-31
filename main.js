let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let result ='';
let arr = Array.from(buttons);
let count = 0;
let operators = document.querySelectorAll('.operator')
let secondCount = 0;

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
