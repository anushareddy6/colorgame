var numSq = 6;
var colors = generateColor(numSq);
  var modeButtons = document.querySelectorAll(".mode");
  var squares = document.querySelectorAll(".square")
  var pickedColor=pickColor();
  var colorDisplay=document.getElementById("colorDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1= document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var easyBtn = document.querySelector("#easyBtn");
  var hardBtn = document.querySelector("#hardBtn");

  for(var i=0;i<modeButtons.length;i++){
  	modeButtons[i].addEventListener("click",function(){
  		modeButtons[0].classList.remove("selected");
  		modeButtons[1].classList.remove("selected");
  		this.classList.add("selected");

  		this.textContent === "Easy"? numSq=3:numSq=6;
  		// if(this.textContent==="Easy"){
  		// 	numSq=3;
  		// }else{numSq=6}
  		reset();
  	})
  }

  function reset(){
  	colors = generateColor(numSq);
  	pickedColor=pickColor();
  	colorDisplay.textContent=pickedColor;
  	messageDisplay.textContent="";
  	resetButton.textContent="NEW COLORS";
  	for(var i=0;i<squares.length;i++){
  		if (colors[i]) {
  			squares[i].style.backgroundColor="block";
  			squares[i].style.backgroundColor=colors[i];
  		}else{
  			squares[i].style.display="none"
  		} 		
  	}
  	h1.style.backgroundColor="steelblue";  
  }

  // easyBtn.addEventListener("click",function(){
  // 	easyBtn.classList.add("selected")
  // 	hardBtn.classList.remove("selected")
  // 	numSq=3
  // 	colors = generateColor(numSq);
  // 	pickedColor=pickColor();
  // 	colorDisplay.textContent=pickedColor;
  // 	for(var i=0;i<squares.length;i++){
  // 		if(colors[i]){
  // 			squares[i].style.backgroundColor=colors[i];
  // 		}else{
  // 			squares[i].style.display = "none";
  // 		}
  // 	}
  // });

  //  hardBtn.addEventListener("click",function(){
  //  	easyBtn.classList.remove("selected")
  // 	hardBtn.classList.add("selected")
  // 	numSq=6
  // 	colors = generateColor(numSq)
  // 	pickedColor=pickColor();
  // 	colorDisplay.textContent=pickedColor;
  // 	for(var i=0;i<squares.length;i++){
  //  			squares[i].style.backgroundColor=colors[i];
  //  			squares[i].style.display = "block";
  // 	}
  // });

  resetButton.addEventListener("click",function(){
  	reset();
  	// colors = generateColor(numSq);
  	// pickedColor=pickColor();
  	// colorDisplay.textContent=pickedColor;
  	// messageDisplay.textContent="";
  	// this.textContent="NEW COLORS"
  	// for(var i=0;i<squares.length;i++){
  	// 	squares[i].style.backgroundColor=colors[i];
  	// }
  	// h1.style.backgroundColor="steelblue";
  });

  colorDisplay.textContent=pickedColor;

for(var i=0;i<colors.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "CORRECT!!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColor(num){

	var arr = [];
	for(i=0;i<num;i++){
		arr.push(random());
	}
	return arr;
}

function random(){
	//red
	var r = Math.floor(Math.random()*256);
	//green
	var g = Math.floor(Math.random()*256);
	//blue
	var b = Math.floor(Math.random()*256);
	return "rgb(" +r + ","+" "+g + ","+" "+b +")";
}