const jokes = document.getElementById('joke');
const btnjoke = document.getElementById('jokeBtn');

btnjoke.addEventListener('click', generateJoke)

generateJoke();

//Using ASYNC/AWAIT
/* async function generateJoke(){
    const config= {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
  
    const data = await res.json()
  
    jokes.innerHTML = data.joke
} */
//using then
function generateJoke(){
    const config = {
        headers : {
            Accept: 'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res)=> res.json())
    .then((data) =>{
        jokes.innerHTML = data.joke
    })
}