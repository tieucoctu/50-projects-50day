const smallcup = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percent = document.getElementById('percent');
const remained = document.getElementById('remained');

updatebigcup();

smallcup.forEach((cup, idx) =>{
    cup.addEventListener('click', ()=> highlighcup(idx))
})

function highlighcup(idx){
    if(smallcup[idx].classList.contains('full') && !smallcup[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }
    smallcup.forEach((cup, idx2) =>{
        if(idx2<=idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
    updatebigcup();
}
function updatebigcup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length;
    const totalcup = smallcup.length;
    if(fullcups ===0){
        percent.style.visibility ='hidden';
        percent.style.height= 0;
    }else{
        percent.style.visibility = 'visible';
        percent.style.height = `${fullcups/ totalcup * 330}px`;
        percent.innerText = `${fullcups / totalcup *100}%`;
    }
    if(fullcups === totalcup){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = 'visible';
        listers.innerText = `${2 -(250*fullcups/1000)}L`
    }
}
