let height=document.getElementById("height");
let weight=document.getElementById("weight");
let outputDiv=document.getElementById("output-container");
let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    let heightValue=(parseFloat(height.value))/100;//Converting in inches
    let weightValue=parseFloat(weight.value);
    let bmi;
    height.value=weight.value='';
    if(heightValue<0 ||isNaN(heightValue)){
        outputDiv.innerHTML=`<span>Enter correct height</span>`

    }
    else if(weightValue<0 ||isNaN(weightValue)){
        outputDiv.innerHTML=`<span>Enter correct weight</span>`

    }
    else{
        bmi=(weightValue/(heightValue**2)).toFixed(2);
        if(bmi<18.5){
            outputDiv.innerHTML=`<span>Underweight</span>`;
            outputDiv.classList.add('underweight');

        }
        else if(bmi>=18.5 && bmi<24.9){
            outputDiv.innerHTML=`<span>Normal</span>`;
            outputDiv.classList.add('normal');
        }
        else{
            outputDiv.innerHTML=`<span>Overweight</span>`;
            outputDiv.classList.add('overweight');
        }
        

    }

})