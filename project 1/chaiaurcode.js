const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector('body')
console.log(body)
const h1=document.querySelector('h1')
const h2=document.querySelector('h2')
const nav=document.querySelector('nav')
const a=document.querySelectorAll('a')
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
       console.log(e)
        console.log(e.target)
        switch(e.target.id){
            case'grey':
            body.style.backgroundColor='grey';
            h2.style.color='yellow';
            h1.style.color='yellow';
            nav.style.backgroundColor='grey';
            a.forEach(function(a){
                a.style.color='yellow'

            })
            
            break;
            case'white':
            body.style.backgroundColor='white';
            h2.style.color='grey';
            h1.style.color='grey';
             nav.style.backgroundColor='white';
            a.forEach(function(a){
                a.style.color='grey'

            })
            break;
            case'blue':
            body.style.backgroundColor='blue';
            h2.style.color='pink';
            h1.style.color='pink';
             nav.style.backgroundColor='blue';
            a.forEach(function(a){
                a.style.color='pink'

            })
            break;
            case'yellow':
            body.style.backgroundColor=e.target.id;//e.target here "e" is event and "target" mtlb event kisko target kr rha h yha span id yellow ko target kr rha h
            h2.style.color='red';
            h1.style.color='red';
             nav.style.backgroundColor='yellow';
            a.forEach(function(a){
                a.style.color='red'

            })

        }//in place of switch we also use if else statement

    })
})
