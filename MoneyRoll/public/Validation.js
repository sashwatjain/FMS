/**
 * 
 */
 
 
 function checkEmptyField(fieldId) {
 
 	alert('checkEmptyField '+fieldId);
 	
 }
 
 function validate() {
				var x=document.getElementById('uname').value;
				var y=document.getElementById('upass').value;
				
				console.log('value of x '+x);
				console.log('value of y '+y);

				if(x =="") {
					//alert('Username cannot be blank');	
					document.getElementById("nameErr").innerHTML="Username cannot be blank";
					return false;
				}		
				
				if(y =="") {
					//alert('Password cannot be blank');	return false
					document.getElementById("passErr").innerHTML="Password cannot be blank";
					return false;
				}			
				return true;
			}	
 
 function clearTheForm() {
				document.getElementById('uname').value="";
				document.getElementById('upass').value="";
				
}

function clearpassErrMsg(){
	document.getElementById('upass').innerHTML="";
}

function clearEmailErrMsg(){
	document.getElementById('emailErr').innerHTML="";
}

function clearDateErrMsg()
{
	document.getElementById('dobErr').innerHTML="";
}

function clearNmErrMsg(){
	document.getElementById('nmErr').innerHTML="";
}

function clearNameErrMsg() {
				document.getElementById('nameErr').innerHTML="";

}
			
function clearPassErrMsg() {
				document.getElementById('passErr').innerHTML="";

}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isUserAbove18(birthdate) {
  const birthdateDate = new Date(birthdate);
  const currentDate = new Date();
  const ageDifferenceInMilliseconds = currentDate - birthdateDate;
  const ageDifferenceInYears = ageDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return ageDifferenceInYears >= 18;
}

function isAlphabeticName(name) {
  const namePattern = /^[A-Za-z]+$/;
  return namePattern.test(name);
}


function passCheck(y){
     
       if(y==""){
             document.getElementById("passErr").innerHTML="Password cannot be blank";
             return false;
       }
       
       if (y.length < 8) {
             document.getElementById("passErr").innerHTML="Password cannot be less than 8 characters";
                return false;
    }
    if (!/[A-Z]/.test(y)) {
             document.getElementById("passErr").innerHTML="Password must have uppercase letter";
                return false;
    }
       if (!/[a-z]/.test(y)) {
             document.getElementById("passErr").innerHTML="Password must have lowercase letter";
                return false;
    }
    if (!/[!@#$%^&*]/.test(y)) {
             document.getElementById("passErr").innerHTML="Password must have alphanumeric value";
                return false;
    }
    return true;
}

function registrationDetails() {
				var x=document.getElementById('uemail').value;
				var y=document.getElementById('udob').value;
				var z=document.getElementById('name').value;
				var a=document.getElementById('upass').value;
				
				console.log('mail id '+x);
				console.log('dob y '+y);
				console.log('name entered '+z);
				

				if(!isValidEmail(x)) {
					document.getElementById("emailErr").innerHTML="Wrong mail id";
					return false;
				}		
				
				if(!isUserAbove18(y)) {
				
					document.getElementById("dobErr").innerHTML="user's age cannot be less than 18 years";
					return false;
				}	
				else{
					document.getElementById("dobErr").innerHTML="";
				}
				
				if(!isAlphabeticName(z))	{
						document.getElementById("nmErr").innerHTML="only aphabatic names are accapted";
					return false;
				}	
				if(!passCheck(a))	{
				
					return false;
				}	
				
				return true;
			}	
