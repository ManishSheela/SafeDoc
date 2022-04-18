// jQuery code
$(document).ready(function(){
	$(".humburgar").click(function(){
		$(this).toggleClass("click");
		$('.sidebar').toggleClass("show");
	});
});
$(".signup_success_btn").click(function(){
	$(".signup_success").fadeOut(500);
});

// Pure JavaScript	

document.getElementById("login-btn").onclick = function(){
          var regBox = document.getElementById("register");
	   var logBox = document.getElementById("login");
	   var signupBtn = document.getElementById("signup-btn");
       
	   logBox.style.display = "block";
	  
	   regBox.style.display = "none";

	   this.style.transform = "translateY("+15+"px)";
	   this.style.backgroundColor = "white";
	   this.style.color = "#2f2e41";
	   this.style.border = "3px solid #2f2e41";
	   signupBtn.style.transform = "translateY("+ 0 +"px)";
	   signupBtn.style.backgroundColor = "#2f2e41";
	   signupBtn.style.color = "white";
	}

	   document.getElementById("signup-btn").onclick = function(){
	   var regBox = document.getElementById("register");
	   var logBox = document.getElementById("login");
	   var loginBtn = document.getElementById("login-btn");
	   regBox.style.display = "block";
	   logBox.style.display = "none";
       
	   this.style.transform = "translateY("+15+"px)";
	   this.style.backgroundColor = "white";
	   this.style.color = "#2f2e41";
	   this.style.border = "3px solid #2f2e41";

	   loginBtn.style.transform = "translateY("+ 0 +"px)";
	   loginBtn.style.backgroundColor = "#2f2e41";
	   loginBtn.style.color = "white";
	}