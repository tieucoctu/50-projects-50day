const sounds = ['black_friday','community','fuck','nioce','goofy','roblox'];

sounds.forEach(sound =>{
    const btn = document.createElement('button');//khoi tao phan tu the button.
    btn.classList.add('btn');//them class btn vao the button
    btn.innerText = sound//cac class doi thanh ten sound
    btn.addEventListener('click',()=>{
        stopsongs();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
})
function stopsongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}