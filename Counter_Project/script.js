let counter=0;
let increment=document.getElementById("increment");

let decrement=document.getElementById("decrement");
let reset=document.getElementById("reset");
let counterDisplay=document.getElementById("counter");
increment.addEventListener("click",()=>{
    counter++;
    counterDisplay.textContent=counter;
});
decrement.addEventListener("click",()=>{
    counter--;
    counterDisplay.textContent=counter;
});
reset.addEventListener("click",()=>{
    counter=0;
    counterDisplay.textContent=counter;
})