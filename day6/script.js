const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkbox);


function checkbox(){
    const triggerbottom = window.innerHeight/5*4;
    boxes.forEach(box => {
        const topbox = box.getBoundingClientRect().top;

        if(topbox < triggerbottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}