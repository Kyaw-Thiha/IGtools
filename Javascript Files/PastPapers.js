/* Functions that run when window opens */
window.onload = function(){
	animationdelay();
};

/* Function to add animation delays to each past paper elements */
function animationdelay(){
	"use strict";
	const parent = document.getElementsByClassName("PastPapers-Dropdown-Contents");
	var counter,counter2; 
	
	for(counter=0; counter<parent.length;counter++){
		var delay = 0;
		var elements = parent[counter].querySelectorAll(".PastPapers-PastPaper");
		for(counter2=0; counter2<elements.length; counter2++){
			var delayStr = delay.toString();
			elements[counter2].style.animationDelay = delayStr.concat("s");
			delay = delay + 0.05;
		}
	}
}

/* Function to toggle dropdown of years */
function displayPapers(index){
	$(".PastPapers-Dropdown-Contents:eq("+index+")").slideToggle("slow");
}

/* Creating functions for opening and closing side navigation bar */
function sideNav(){
	var sideNavContent = document.getElementById("sideNavContent");
	var openIcon = document.getElementById("openArrow");
	var closeIcon = document.getElementById("closeArrow");
	var main = document.getElementsByTagName("Main");
	
	if (sideNavContent.style.width == "100%"){
		sideNavContent.style.width = "0";
		openIcon.style.display = "inline-block";
		closeIcon.style.display = "none";
	} else {
		sideNavContent.style.width = "100%";
		openIcon.style.display = "none";
		closeIcon.style.display = "inline-block";
	}
}

/* Creating functions for toggling between core and extended papers */
function coreRadio(Id){
	"use strict";
	var counter, counterCore, counterExtended;
	const variant = document.getElementById(Id);
	const year = variant.querySelectorAll(".PastPapers-Dropdown-Contents");
	
	for(counter=0; counter<year.length; counter++){
		var paper = year[counter].children;
		var index = (paper.length-2)/2;
		
		for(counterCore=0; counterCore<index; counterCore++){
			paper[counterCore].style.display = "block";
		}
		
		for(counterExtended=index; counterExtended<paper.length-2; counterExtended++){
			paper[counterExtended].style.display = "none";
		}
	}
}

function extendedRadio(Id){
	"use strict";
	var counter, counterCore, counterExtended;
	const variant = document.getElementById(Id);
	const year = variant.querySelectorAll(".PastPapers-Dropdown-Contents");
	
	for(counter=0; counter<year.length; counter++){
		var paper = year[counter].children;
		var index = (paper.length-2)/2;

		for(counterCore=0; counterCore<index; counterCore++){
			paper[counterCore].style.display = "none";
		}

		for(counterExtended=index; counterExtended<paper.length-2; counterExtended++){
			paper[counterExtended].style.display = "block";
		}
	}
}

/* */
function coreRadioVary(Id,num){
	"use strict";
	var counter, counterCore, counterExtended;
	const variant = document.getElementById(Id);
	const year = variant.querySelectorAll(".PastPapers-Dropdown-Contents");
	
	for(counter=0; counter<year.length; counter++){
		var paper = year[counter].children;
		var index = (paper.length-num)/2;
		
		for(counterCore=0; counterCore<index; counterCore++){
			paper[counterCore].style.display = "block";
		}
		
		for(counterExtended=index; counterExtended<paper.length-num; counterExtended++){
			paper[counterExtended].style.display = "none";
		}
	}
}

function extendedRadioVary(Id,num){
	"use strict";
	var counter, counterCore, counterExtended;
	const variant = document.getElementById(Id);
	const year = variant.querySelectorAll(".PastPapers-Dropdown-Contents");
	
	for(counter=0; counter<year.length; counter++){
		var paper = year[counter].children;
		var index = (paper.length-num)/2;

		for(counterCore=0; counterCore<index; counterCore++){
			paper[counterCore].style.display = "none";
		}

		for(counterExtended=index; counterExtended<paper.length-num; counterExtended++){
			paper[counterExtended].style.display = "block";
		}
	}
}