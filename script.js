import{loanpaymentcalc} from "./loanpayment.js";
import{interestcalc} from "./interestrate.js";
import{investmentreturncalc} from "./investmentreturn.js";

//validate inputs function

function validateInput(){
    if (isNaN(inputs) )return('invalid input, please enter numbers ')

}
//Interest Calc/Display
document.getElementById('InterestCalculator').addEventListener('click', () =>{
    const principal= parsefloat(document.getElementById)('principalinterest').value;
    const rate=parseFloat(document.getElementById)('interestrate').value;
    const time=parsefloat=(document.getElementById)('interesttime');
if(validateInput(principal,rate,time)); document.getElementsById('interest value').textcontent='Interest: ${value}';


})

//Investment Return Calc/Display

document.getElementById('InvestmentCalculator').addEventListener('click' ,() => { 
const principal=parseFloat(document.getElementById('interestprincipal').value);
const rate= parseFloat(document.getElementById('interestrate').value);
const time= parseFloat(document.getElementById('interestime').value);
const compound= parseFloat(document.getElementById('compoundreturn').value);

if(validateInput(principal,rate,time, compound));document.getElementById('investment value').textcontent='Investment value: ${value.toFixed(2)}';
});

    

//Loan Payment Calc/Display

document.getElementById('LoanCalculator').addEventListener('click', ()=> {
    const principal= parseFloat(document.getElementById('loanprinciple').vlaue);
    const rate=parseFloat(document.getElementById('loanpayrate').value)
    const time= parseFloat(document.getElementById('loantime').value);
    const payrate=parseFloat(document.getElementById('payrate').value);
    if(validateInput(principle, rate, time, payrate));
    document.getElementById('loan value').textContent='Payment per month: ${value.toFixed(2)}';





})
