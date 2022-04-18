function stop_upload(){
	if(localStorage.getItem(sessionStorage.getItem('user_mail') + 'img_url') != null){
		document.getElementsByClassName("upload_back")[0].style.display = "none";
	}
}
stop_upload();

// if url copy and paste to the another tab
if(sessionStorage.length <= 0){
	$("main").css("display","none");
	$("body").css({"background":"black","color":"white","text-align":"center"});
	$("body").html("<h1>illegal action performed</h1>");
}

function upload(){

	var input = document.getElementById("upload_btn");
	var back_img = document.getElementsByClassName("pic_upload_box");
	if(input.files[0].size <= 512000){
	var freader = new FileReader();
	freader.readAsDataURL(input.files[0]);
	freader.onloadend = function(event){
		var upload_btn = document.getElementsByClassName("fa-upload");
		var img_url = event.target.result;
		back_img[0].style.background = "url("+img_url+")"
		back_img[0].style.backgroundPosition = "center";
		back_img[0].style.backgroundSize = "100px 100px";
		back_img[0].style.backgroundRepeat = "none";
		upload_btn[0].style.display="none";
        document.getElementById("arrow").style.display = "block";

        $("#arrow").click(function(){
        localStorage.setItem(sessionStorage.getItem('user_mail') + 'img_url',img_url);
	    $(".upload_back").fadeOut(500);
        
      });

    }
	}
	else{
		alert("Please Upload less than 512 kb size Photo");
	}
}

function profile(){
	var username = document.getElementsByClassName("user_name");
	var user = sessionStorage.getItem('user_mail');
	var data =  localStorage.getItem(user);
	var user_name = JSON.parse(data);
	username[0].innerHTML = 'Welcome' + " " + atob(user_name.name);
}
profile();


