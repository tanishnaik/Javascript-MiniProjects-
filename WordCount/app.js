let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    let word=document.getElementById("str").value;
    let count=word.length;
    let outputDiv=document.getElementById("output");
    outputDiv.innerHTML=`
    <h1>The number of words is ${count}</h1>`;
    

})