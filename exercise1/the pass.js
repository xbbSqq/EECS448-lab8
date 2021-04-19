function validate() { 
 let str1 = document.getElementById("entry1").value 
 let str2 = document.getElementById("entry2").value 
 let feedback = document.getElementById("feedback") 
 if(!(str1 === str2)) { 
 // if display error - not matching 
 feedback.style.color = 'red' 
 feedback.innerHTML = "The passwords is not correct. do it again." 
 } else if(str1.length < 8) { 
 // if display error - not long enough 
 feedback.style.color = 'red' 
 feedback.innerHTML = "The password must be at least 8 characters long. do it again." 
 } else { 
 feedback.style.color = 'green' 
 feedback.innerHTML = "This password is good." 
 }  
   } 

   