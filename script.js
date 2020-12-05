//references
var output = document.querySelector('.display-screen');
var calc = document.querySelector('.eval');
var calcBtn = document.querySelectorAll('.btn');

//console.log(output , calc , calcBtn);
function display(event) {
    //console.log(event.target.value);
        if(event.target.value === 'C') {
            output.value = "";
        }
        else {
            output.value += event.target.value;
        }
    }

function calculate(event) {
    var sol = eval(output.value);
    output.value = sol;
}
for(var j=0 ; j<calcBtn.length;j++) {
    calcBtn[j].addEventListener('click' , display);
}

calc.addEventListener('click',calculate)