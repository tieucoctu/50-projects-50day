const text = document.getElementById('choice');
const insert = document.getElementById('insert');

text.addEventListener('keydown', ()=>{
    insert.innerHTML = text.value;
})