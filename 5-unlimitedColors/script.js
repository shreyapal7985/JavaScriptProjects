const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];//hex is string that's why we use rectangular bracket to treat it as a array
        console.log(color)
         }
    return color;
};
let intervalID;//making it global so that we can use it in clearInterval
 const startChangingColor=function(){
    const changecolor=function(){
        document.body.style.backgroundColor=randomColor();
    }
    intervalID=setInterval(changecolor,1000);
 };
 const stopChangingColor=function(){
clearInterval(intervalID)
 };
 document.querySelector('#start').addEventListener('click',startChangingColor);
 document.querySelector('#stop').addEventListener('click',stopChangingColor);