const counter =document.querySelectorAll('.counter');

counter.forEach(count =>{
    count.innerText ='0';
    
    const updatecounter = () =>{
        const target = count.getAttribute('data-target');//lay gia tri cua thuoc tinh trong the.
        const c = +count.innerText;
        const increment = target/200;
        if(c < target){
            count.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updatecounter, 1);
        }
        else{
            count.innerText = target;
        }
    }
    updatecounter();
})