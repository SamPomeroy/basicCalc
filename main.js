let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// if(string.indexOf['/0'] != -1){
//     string = 'error'
// }

let string ='';
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
                string = eval(string)
                input.value = string
                if(string.indexOf['/0'] != -1){
                    string = undefined
                }
                count=1
            }
            else if(count === 2 && secondCount > 2){
                string = eval(string)
                input.value = string
                count=1

            }
            console.log(count)
        }
        if(e.target.innerHTML === '='){
            string = eval(string);
            input.value = string;
            if(string.indexOf['/0'] != -1){
                string = undefined
            }
        }

        else if(e.target.innerHTML === 'C'){
            string = '';
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
    
})
