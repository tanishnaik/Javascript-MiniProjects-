let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    //To prevent the form from default submission
    event.preventDefault();
    let input=document.querySelector("input");
    let result=document.getElementById("result");
    let pound;
    if(input.value<=0 || isNaN(input.value)){
        result.classList.add("error");
        result.innerHTML=`<p>Enter a valid weight</p>`;
        //To clear the input field
        input.value='';
    }
    else{
        pound=Number(input.value)/2.2;
        result.classList.add("no-error");
        result.innerHTML=`<span>${pound}</span>`;
        input.value='';
    }
})