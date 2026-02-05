const clock=document.getElementById('clock');
//or
//const clock=document.querySelector('#clock');
setInterval(function(){
let date = new Date();
console.log(date.toLocaleTimeString())//displays on console
clock.innerHTML = date.toLocaleTimeString();//displays on browser
}, 1000);//setinterval event ko handle krta  h jo btate h kitne interval tk aap continuously program run kr skte h kr skte h is used to change the the time in miliseconds