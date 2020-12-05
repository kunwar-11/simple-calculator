//references
var output = document.querySelector('.display-screen');
var result = document.querySelector('.display-output');
var calc = document.querySelector('.eval');
var calcBtn = document.querySelectorAll('.btn');

//console.log(output , calc , calcBtn);
function display(event) {
    //console.log(event.target.value);
        if((output.value!== "") && (result.value!== "")) {
            output.value = "";
            result.value = "";
            //output.value = event.target.value;
            console.log(event.target.value);
        }
        if(event.target.value === 'C') {
            output.value = "";
            result.value = "";
        }
        else {
            output.value += event.target.value;
        }
    }



function calculate(event) {
    var sol = eval(output.value);
    result.value = sol;
}

for(var j=0 ; j<calcBtn.length;j++) {
    calcBtn[j].addEventListener('click' , display);
}

calc.addEventListener('click',calculate)