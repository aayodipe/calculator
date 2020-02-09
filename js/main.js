const divItem = (item) => {
    return document.querySelector(item)
}
const resultDiv = divItem('.screen')
const calc = divItem('.calc');
const button = divItem('button').tagName;
const symbol = divItem('.symbol');
const clearButton = divItem('.data-clear');
const removeLastNumber = divItem('.data-back');
const times = divItem('.data-times');
const minus = divItem('.data-minus');
const divide = divItem('.data-divide');
const add = divItem('.data-add');
const equal = divItem('.data-equal');
let firstValue = 0;
let secondValue = 0
let sign;


calc.addEventListener('click', (e) => {

    let buttonClicked = e.target.innerText
    let buttonClickedTagName = document.querySelector(e.target)
    console.log(buttonClickedTagName)
    switch (buttonClickedTagName) {
        case 'number':

    }


})
