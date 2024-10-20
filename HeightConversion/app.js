let button=document.getElementById("btn");
let outputDiv=document.getElementById("output-container");
// console.log(button);
button.addEventListener("click",()=>{
    let height=document.getElementById("height");
    let userHeight=parseFloat(height.value);
    height.value='';
    if(userHeight<0 || isNaN(userHeight)){
        
        outputDiv.innerHTML=`<span>${height.value} not a valid input!!</span>`
        outputDiv.classList.add("error");
        
        
    }
    else{
       let inch=userHeight/2.54;
       outputDiv.innerHTML=`<span>${inch.toFixed(2)} in iches</span>`;
       outputDiv.classList.add("right");
       
    }

})