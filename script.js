const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const signupCard = document.getElementById("signupCard");
const successCard = document.getElementById("successCard");
const successEmail = document.getElementById("successEmail");
const dismissBtn = document.getElementById("dismissBtn");


function showError (message ){
    emailError.textContent= message;
    emailInput.classList.add("input--error");
}

function clearError (){
    emailError.textContent= "";
    emailInput.classList.remove("input--error");
}

function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
} 


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = emailInput.value.trim();
  
    if (!email) {
      showError("Email is required");
      return;
    }
  
    if (!isValidEmail(email)) {
      showError("Valid email required");
      return;
    }
  
    clearError();
    successEmail.textContent = email;

    signupCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  });

  dismissBtn.addEventListener("click", ()=> {
    successCard.classList.add("hidden");
    signupCard.classList.remove("hidden");

    emailInput.value = "";
    clearError();
    emailInput.focus();
  })

emailInput.addEventListener("input", ()=> {
    clearError();
})