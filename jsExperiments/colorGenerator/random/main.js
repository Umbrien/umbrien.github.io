function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}

function changeColor(){
	function setArrayNum(){
		arrayNum = randomInteger(0, 15);
		if(arrayNum>9){
			switch(arrayNum){
				case 10:
					arrayNum = 'A';
					break;
				case 11:
					arrayNum = 'B';
					break;
				case 12:
					arrayNum = 'C';
					break;
				case 13:
					arrayNum = 'D';
					break;
				case 14:
					arrayNum = 'E';
					break;
				case 15:
					arrayNum = 'F';
					break;
			}
		}
		return arrayNum;
	}
	randArr = ['#'];
	for (var i = 0; i < 6; i++) {
		finalVar = setArrayNum();
		randArr.push(finalVar);
	}
colorArray = randArr[0]+randArr[1]+randArr[2]+randArr[3]+randArr[4]+randArr[5]+randArr[6];
	document.body.style.backgroundColor = colorArray;
	document.getElementById('color').innerHTML =
	document.body.style.backgroundColor+'<br>'+colorArray;
}	
