const input = document.getElementById('text');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search');


btn.addEventListener('click', ()=> {
    search.classList.toggle('active')
    input.focus();
});
