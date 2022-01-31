const form= document.getElementById('form')
const username= document.getElementById('username')
const email= document.getElementById('email')
const password= document.getElementById('password')
const Confirmpassword= document.getElementById('passwordb')

form.onsubmit=function(event){
    event.preventDefault()
    inputValue();
}

function inputValue(){
 const usernameValue = username.value.trim()
 const emailValue = email.value.trim()
 const passwordValue = password.value.trim()
 const ConfirmpasswordValue = Confirmpassword.value.trim()

 if(usernameValue === ''){
     setIncorrectFor(username, 'Username cannot be blank')
 }
 else if(usernameValue.length < 6){
     setIncorrectFor(username, 'username must be up to 6 characters')
 }
 else{
    setCorrect(username);
 }

 if(emailValue === ''){
    setIncorrectFor(email, 'email cannot be blank')
 }
else{
    setCorrect(email);
}

if(passwordValue === ''){
    setIncorrectFor(password, 'Password cannot be blank')
}
else if(passwordValue.length < 6){
    setIncorrectFor(password, 'Password must be up to 6 characters')
}
else{
   setCorrect(passwordValue);
}
if(ConfirmpasswordValue === ''){
    setIncorrectFor(Confirmpassword, 'Password cannot be blank')
}
else if(ConfirmpasswordValue.length < 6){
    setIncorrectFor(Confirmpassword, 'Password must be up to 6 characters')
}
else{
   setCorrect(ConfirmpasswordValue);
}

} 
   


 


function setIncorrectFor(input, message){
    const formOrder= input.parentElement;
    const small= formOrder.querySelector('small')
    small.innerText= message
    formOrder.className = 'form-order b';
}

function setCorrect(input){
  const formOrder = input.parentElement;
  formOrder.className= 'form-order a';
}

