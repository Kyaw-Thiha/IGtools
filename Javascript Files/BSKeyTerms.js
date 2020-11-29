/* Creating function to check user answer */
function checkAnswer(keyword1, keywordAlternative1, keyword2, keywordAlternative2, keyword3, keywordAlternative3, keyword4, keywordAlternative4, nodeIndex){
	var userAnswerRaw = document.getElementsByClassName("Answer-Space");
	var userAnswer = userAnswerRaw[nodeIndex].value.toLowerCase();
	var correctSymbol = document.getElementsByClassName("Symbol-Correct");
	var wrongSymbol = document.getElementsByClassName("Symbol-Wrong");
	var line = document.getElementsByTagName("hr");
	
	if (((userAnswer.indexOf(keyword1) != -1) || (userAnswer.indexOf(keywordAlternative1) != -1)) && ((userAnswer.indexOf(keyword2) != -1) || (userAnswer.indexOf(keywordAlternative2) != -1)) && ((userAnswer.indexOf(keyword3) != -1) || (userAnswer.indexOf(keywordAlternative3) != -1)) && ((userAnswer.indexOf(keyword4) != -1) || (userAnswer.indexOf(keywordAlternative4) != -1))){
		
		$(".Symbol-Correct:eq("+nodeIndex+")").slideDown("slow");
		$(".Symbol-Wrong:eq("+nodeIndex+")").slideUp("slow");
		
		var nextIndex = parseInt(nodeIndex)+1;
		if (nextIndex<userAnswerRaw.length){
			line[nextIndex+1].scrollIntoView({behavior: "smooth", block: "end"});
			setTimeout(function(){userAnswerRaw[nextIndex].focus();},300);
		}
		
	} else {
		$(".Symbol-Correct:eq("+nodeIndex+")").slideUp("slow");
		$(".Symbol-Wrong:eq("+nodeIndex+")").slideDown("slow");
	}
}

/* Creating function to check user answer when he/she presses enter */
function addEnter(nodeIndex){
	var enterKey = document.getElementsByClassName("Answer-Space");
	var button = document.getElementsByClassName("button-blue");
	var correctSymbol = document.getElementsByClassName("Symbol-Correct");
	var container = document.getElementsByClassName("BSKeyTerms-QuestionsAndAnswers-Container");
	
	enterKey[nodeIndex].addEventListener("keyup",function(enter){
		if (enter.keyCode === 13){
			button[nodeIndex].click();
			/*var nextIndex = nodeIndex+1;
			if (nextIndex<enterKey.length){
				if (correctSymbol[nodeIndex].style.display == "block"){
					container[nextIndex].scrollIntoView({behavior: "smooth", block: "end"});
					setTimeout(function(){enterKey[nextIndex].focus();},300);    
				} 
			}*/
		}
	}); 
}

/* Creating a function to show answer to user if asked */
function showAnswer(modelAnswer){
	var modelAnswer = "#" + modelAnswer
	$(modelAnswer).slideToggle("slow");
}