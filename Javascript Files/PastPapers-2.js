/* Functions that run when window opens */
window.onload = function(){
	"use strict";
	extended();
	animationdelay();
};

/* To show extended papers but hide core papers at the start of the window */
function extended(){
	"use strict";
	var counter, counterCore, counterExtended;
	const year = document.querySelectorAll(".PastPapers-Dropdown-Contents");
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