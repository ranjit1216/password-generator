//dom element
const resultEle=document.getElementById('result');
const lengthEle=document.getElementById('length')
const uppercaseEle=document.getElementById('uppercase')
const lowercaseEle=document.getElementById('lowercase')
const numberEle=document.getElementById('numbers')
const symbolEle=document.getElementById('symbols')
const generateEle=document.getElementById('generate')
const clipboardEle=document.getElementById('clipboard')

const randomFunc ={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}
//genertate event
generateEle.addEventListener('click',()=>{
    const length= +lengthEle.value;
    const hasLower=lowercaseEle.checked;
    const hasUpper=uppercaseEle.checked;
    const hasNumber=numberEle.checked;
    const hasSymbol=symbolEle.checked;
    
    resultEle.innerText=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

});

//generate passwordfun
function generatePassword(lower, upper, number, symbol, length) {
        //1 initolize pw variable
        // 2 filter out of unchecked type
        //3 loop over length call generate fun for each type
        //4 add final pw to the pw varoable and return 

        let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
   // console.log(typesCount);
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
        //console.log(typesArr);

        for(let i=0; i<length; i+=typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
               // console.log(funcName);
                generatedPassword += randomFunc[funcName]();
            });
        }
        const finalPassword=generatedPassword.slice(0,length);

        return finalPassword;
	}

//function generate
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random()*symbols.length)];
}
