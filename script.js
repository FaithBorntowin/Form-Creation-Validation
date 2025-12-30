document.addEventListener("DOMContentLoaded", function ()  {
  const form = document.getElementById("registration-form") 
  const feedbackDiv = document.getElementById("form-feedback")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = document.getElementById("username").value.trim()
    const email = document.getElementById("email").value.trim()
    const password = document.getElementById("password").value.trim()
    let isValid = true
    let messages = []
    if ( username.length < 3) {
      isValid = false
      messages.push("your usename is too short,you must have atleast 6 characters")
      

    }
    if (!email.length.include("@") && !email.length.include(".")){
      isValid = false
      messages.push("email must contain @ and .")
    }
    if ( password.length < 8  ) {
      isValid = false 
      messages.push("password must have atleast 8 characters")
    }
    feedbackDiv.style.display = "block"
    if (isValid) {
      feedbackDiv.textContent = "Registration successful"
      feedbackDiv.style.color =  "#28a745"

    }  
    if(!isValid) {
      feedbackDiv.innerHTML = messages.join("<br>")
      feedbackDiv.style.color = "#dc3545"
    }
     
  })
   


})
