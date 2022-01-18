const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=>{
        toggle.parentNode.classList.toggle('active')//.parentNode có tác dụng thay đổi class của thẻ cha cua thẻ có class= toggle.
    })
})