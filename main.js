// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

const hearts = document.getElementsByClassName('like-glyph');

for(let heart of hearts){
  heart.addEventListener('click', function(event){
      console.log(heart);
      mimicServerCall()
      .then(event => {
        if(!heart.classList.contains('activated-heart')){
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');

        }else{
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        errorModal.classList.remove('hidden');
             
        errorModal.innerHTML = `
          <p>${error.message}</p>
        `;
        setTimeout( function() {
          errorModal.classList.add('hidden')
        },3000)
      })
    })
  }
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
