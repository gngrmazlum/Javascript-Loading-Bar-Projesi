const counter=document.querySelector('.counter');
const LoadingBarFront=document.querySelector('.LoadingBarFront');

let number=3;

updateNumber();
function updateNumber(){
    counter.textContent=number + '%';
LoadingBarFront.style.width= number +'%'
    number++;
    if(number<101)
    {
setTimeout(updateNumber,40);
    }

}