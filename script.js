let displayInput = document.getElementById('display');
let buttonStorage = document.querySelectorAll('button');
let buttonArray = Array.from(buttonStorage);
let string='';
buttonArray.forEach(btns => {
    btns.addEventListener('click', (e) => {

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            displayInput.value = string;
        }  else if(e.target.innerHTML == 'RESET'){
            string ='';
            displayInput.value = string;
        }  else if(e.target.innerHTML == '='){
            string = eval(string);
            displayInput.value = string;
        } else {
            string +=e.target.innerHTML;
            displayInput.value = string;
           // console.log(e.target.innerHTML);
        }      
    });
});


