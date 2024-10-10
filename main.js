// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
 document.body.addEventListener("click", function(event) {
    // Check if the clicked element has the 'like-glyph' class
    if (event.target.classList.contains("like-glyph")) {
      
      // Call the mimicServerCall function
      mimicServerCall()
        .then(response => {
          console.log(response); // Log the response from the server

          // Toggle the 'activated-heart' class to turn the heart red and change the symbol
          if (event.target.classList.contains("activated-heart")) {
            event.target.classList.remove("activated-heart");
            event.target.textContent = EMPTY_HEART;
        } else {
            event.target.classList.add("activated-heart");
            event.target.textContent = FULL_HEART;
        }
        toggleModal("Server call success")
        })
        .catch(error => {
          console.error("Server call failed: ", error);

          toggleModal("Failed to reach server")
        });
    }
  });
  //toggle the modal on/off
  function toggleModal(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.classList.toggle("hidden");
    setTimeout(()=>{
      modal.classList.toggle("hidden");
    }, 3000)
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
