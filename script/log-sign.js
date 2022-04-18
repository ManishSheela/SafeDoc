function register(){
	var name = btoa(document.getElementById("username").value);
	var email = btoa(document.getElementById("email").value);
	var pwd = btoa(document.getElementById("password").value);
	var mobile = btoa(document.getElementById("mobile").value);
    
  if(name != '' && email != ' ' && pwd != ' ' && mobile != ' ') {
   	var user_data = {name:name,email:email,password:pwd,mobileNumber:mobile};
    var user_data_text = JSON.stringify(user_data);
    localStorage.setItem(email,user_data_text);

  var success_Box =  document.getElementsByClassName("signup_success");
  success_Box[0].style.display = "flex";
  document.getElementById("username").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("mobile").value = "" ;
}
	return false;
	}

 // user Exist already

	document.getElementById("email").onblur = function(){
		var email = btoa(document.getElementById("email").value);
       	
       	if(localStorage.getItem(email) != null){

	    document.getElementsByClassName("reg-email-tooltip")[0].style.display = "block";
	    document.getElementById("password").disabled = true;
	    document.getElementById("mobile").disabled = true;
	    document.getElementById("signup_btn").disabled = true;
	    document.getElementById("signup_btn").style.cursor="not-allowed";
	    
	    document.getElementById("email").onclick = function(){
	    this.value=" ";
	    document.getElementsByClassName("reg-email-tooltip")[0].style.display = "none";
	    document.getElementById("password").disabled = false;
	    document.getElementById("mobile").disabled = false;
	    document.getElementById("signup_btn").disabled = false ;
	    document.getElementById("signup_btn").style.cursor="pointer";
}
}
}

function login(){
	var login_email = btoa(document.getElementById("login-email").value);
	var login_pwd = btoa(document.getElementById("login-pwd").value);
	var login_data = {email:login_email,password:login_pwd};
	var login_data_text = JSON.stringify(login_data);
  sessionStorage.setItem(login_email,login_data_text);
	var session_data = sessionStorage.getItem(login_email);

	var user_data = JSON.parse(session_data);

	if(localStorage.getItem(user_data.email) == null){
		document.getElementsByClassName("email-tooltip")[0].style.display = "block";
		document.getElementById("login-email").onclick = function(){
	  this.value = " ";
	  document.getElementsByClassName("email-tooltip")[0].style.display = "none";
		}}
	else{
		if(localStorage.getItem(user_data.email).match(user_data.password)){
			sessionStorage.setItem('user_mail',login_email);
			location.replace("../profile/profile.html");
		}
		else{
		document.getElementsByClassName("pwd-tooltip")[0].style.display = "block";

		document.getElementById("login-pwd").onclick = function(){
	  this.value = ' ';
	  document.getElementsByClassName("pwd-tooltip")[0].style.display = "none";}}}

 return false;
}
