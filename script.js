const imgContainer = document.querySelector('.insta-img');
const heart = document.querySelector('i');

imgContainer.addEventListener('dblclick', ()=>{
   var heartAni = setInterval(() => {
    heart.style.display = 'block';
    

   }, 50)

   console.log("Heart is popped")
    setTimeout(() => {
        clearInterval(heartAni);
        heart.style.display = 'none';

    },500)
})