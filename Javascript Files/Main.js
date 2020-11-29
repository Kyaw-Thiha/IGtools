/* Creating functions for opening and closing side navigation bar */
function sideNav(){
	const container = document.getElementsByClassName("HeaderAndAside")[0];
	var sideNavContent = document.getElementById("sideNavContent");
	var openIcon = document.getElementById("openArrow");
	var closeIcon = document.getElementById("closeArrow");
	var main = document.getElementsByTagName("Main");
	const nav = document.getElementsByTagName("nav")[0];
	
	if (sideNavContent.style.width == "100%"){
		if(nav.style.display == "none"){
			container.style.zIndex = 0;	
		}
		sideNavContent.style.width = "0";
		openIcon.style.display = "inline-block";
		closeIcon.style.display = "none";
	} else {
		container.style.zIndex = 2;
		sideNavContent.style.width = "100%";
		openIcon.style.display = "none";
		closeIcon.style.display = "inline-block";
	}
}

/* Creating function for opening and closing the main navigation bar*/
function nav(){
	const container = document.getElementsByClassName("HeaderAndAside")[0];
	const nav = document.getElementsByTagName("nav")[0];
	const bars = document.getElementsByClassName("Nav-Icon")[0];
	var sideNavContent = document.getElementById("sideNavContent");
	
	if (nav.style.display == "block"){
		if(sideNavContent.style.display == "none"){
			container.style.zIndex = 0;	
		}
		nav.style.display = "none";
		bars.style.color = "#A0A0A0";
	} else {
		container.style.zIndex = 2;
		nav.style.display = "block";
		bars.style.color = "#2B82D9";
	}
}
