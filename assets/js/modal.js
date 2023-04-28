var modal = document.getElementById("myModal");

window.onclick = function(event) {

 	if (event.target.classList.contains("call-modal")) {
	  	modal.style.display = "block";
 	}

	if (event.target.classList.contains("close")) {
	  	modal.style.display = "none";
	}	

	if (event.target == modal) {
	  modal.style.display = "none";
	}
	
}