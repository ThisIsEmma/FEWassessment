/*const bodyTest = document.getElementById('thisBody')
bodyTest.innerHTML = '<h1>TEST ! </h1>'*/

const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const colorInput = document.getElementById('color');


const widthOutput = document.getElementById('display-width');
widthOutput.innerText = 'Please enter width';
const heightOutput = document.getElementById('display-height');
heightOutput.innerText = 'Please enter Height';
const colorOutput = document.getElementById('display-color');
colorOutput.innerText = 'Please pick a color';

let userInputWidth = 0;
let userInputHeight = 0;
let userInputColor = '';

widthInput.onchange = function(evt) {
    let userInputWidth = parseInt(evt.target.value);
    widthOutput.innerText = userInputWidth + 'px';
    let strUserInputWidth = userInputWidth.toString();
    document.getElementById('color-display').style.width = strUserInputWidth+'px';
}

heightInput.onchange = function(evt) {
    let userInputHeight = parseInt(evt.target.value);
    heightOutput.innerText = userInputHeight + 'px';
    let strUserInputHeight = userInputHeight.toString();
    document.getElementById('color-display').style.height = strUserInputHeight+'px';
}

colorInput.onchange = function(evt) {
    let userInputColor = evt.target.value;
    colorOutput.innerText = userInputColor;
    document.getElementById('color-display').style.backgroundColor = userInputColor;

}