//Генерация случайного числа
function randomInt(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);	return rand;
}

mail_array = [];

function crypt(method) {
	
	var cryption_method =  randomInt(1,3);

	plain_text = document.getElementById('plain_text');
	plain_Array = plain_text.value.split(''); //Разбитие строки в массив
	key = document.getElementById('key');
	key_Array = key.value.split('');
	
	//decrypting
	if (method == 'decrypt') {

		//Методы шифрования
		if(cryption_method == 1){
			plain_Array.forEach(function(item, i, arr) {
				//item - Значение; i - номер в массиве; arr - полный массив
				if (item == "A") plain_Array[i] = "9";
				if (item == "B") plain_Array[i] = "8";
				if (item == "C") plain_Array[i] = "7";
				if (item == "D") plain_Array[i] = "6";
				if (item == "E") plain_Array[i] = "5";
				if (item == "F") plain_Array[i] = "4";
				if (item == "G") plain_Array[i] = "3";
				if (item == "H") plain_Array[i] = "2";
				if (item == "I") plain_Array[i] = "1";
				if (item == "J") plain_Array[i] = "0";
				if (item == "K") plain_Array[i] = "z";
				if (item == "L") plain_Array[i] = "y";
				if (item == "M") plain_Array[i] = "x";
				if (item == "N") plain_Array[i] = "w";
				if (item == "O") plain_Array[i] = "v";
				if (item == "P") plain_Array[i] = "u";
				if (item == "Q") plain_Array[i] = "t";
				if (item == "R") plain_Array[i] = "s";
				if (item == "S") plain_Array[i] = "r";
				if (item == "T") plain_Array[i] = "q";
				if (item == "U") plain_Array[i] = "p";
				if (item == "V") plain_Array[i] = "o";
				if (item == "W") plain_Array[i] = "n";
				if (item == "X") plain_Array[i] = "m";
				if (item == "Y") plain_Array[i] = "l";
				if (item == "Z") plain_Array[i] = "k";

				if (item == "a") plain_Array[i] = "j";
				if (item == "b") plain_Array[i] = "i";
				if (item == "c") plain_Array[i] = "h";
				if (item == "d") plain_Array[i] = "g";
				if (item == "e") plain_Array[i] = "f";
				if (item == "f") plain_Array[i] = "e";
				if (item == "g") plain_Array[i] = "d";
				if (item == "h") plain_Array[i] = "c";
				if (item == "i") plain_Array[i] = "b";
				if (item == "j") plain_Array[i] = "a";
				if (item == "k") plain_Array[i] = "$";
				if (item == "l") plain_Array[i] = "~";
				if (item == "m") plain_Array[i] = "/";
				if (item == "n") plain_Array[i] = "-";
				if (item == "o") plain_Array[i] = "+";
				if (item == "p") plain_Array[i] = "*";
				if (item == "q") plain_Array[i] = "%";
				if (item == "r") plain_Array[i] = "#";
				if (item == "s") plain_Array[i] = "\"";
				if (item == "t") plain_Array[i] = "'";
				if (item == "u") plain_Array[i] = "]";
				if (item == "v") plain_Array[i] = "[";
				if (item == "w") plain_Array[i] = "}";
				if (item == "x") plain_Array[i] = "{";
				if (item == "y") plain_Array[i] = ")";
				if (item == "z") plain_Array[i] = "(";

				if (item == "0") plain_Array[i] = ">";
				if (item == "1") plain_Array[i] = "<";
				if (item == "2") plain_Array[i] = "?";
				if (item == "3") plain_Array[i] = "!";
				if (item == "4") plain_Array[i] = ",";
				if (item == "5") plain_Array[i] = ".";
				if (item == "6") plain_Array[i] = "Z";
				if (item == "7") plain_Array[i] = "Y";
				if (item == "8") plain_Array[i] = "X";
				if (item == "9") plain_Array[i] = "W";

				if (item == ".") plain_Array[i] = "V";
				if (item == ",") plain_Array[i] = "U";
				if (item == "!") plain_Array[i] = "T";
				if (item == "?") plain_Array[i] = "S";
				if (item == "<") plain_Array[i] = "R";
				if (item == ">") plain_Array[i] = "Q";
				if (item == "(") plain_Array[i] = "P";
				if (item == ")") plain_Array[i] = "O";
				if (item == "{") plain_Array[i] = "N";
				if (item == "}") plain_Array[i] = "M";
				if (item == "[") plain_Array[i] = "L";
				if (item == "]") plain_Array[i] = "K";
				if (item == "'") plain_Array[i] = "J";
				if (item == "\"") plain_Array[i] = "I";
				if (item == "#") plain_Array[i] = "H";
				if (item == "%") plain_Array[i] = "G";
				if (item == "*") plain_Array[i] = "F";
				if (item == "+") plain_Array[i] = "E";
				if (item == "-") plain_Array[i] = "D";
				if (item == "/") plain_Array[i] = "C";
				if (item == "~") plain_Array[i] = "B";
				if (item == "$") plain_Array[i] = "A";
			});
			key.value = key.value + 1;
		} else if (cryption_method == 2){
			plain_Array.reverse();
			key.value = key.value + 2;
		} 

		plain_text.value = plain_Array.join(''); //Склеивание массива в строку

	//encrypting
} else if (method == 'encrypt') {
	key_Array.forEach(function(key_item, key_i, key_arr) {
		
		if(key_item == 1){
			plain_Array.forEach(function(item, i, arr) {
				if (item == "9") plain_Array[i] = "A";
				if (item == "8") plain_Array[i] = "B";
				if (item == "7") plain_Array[i] = "C";
				if (item == "6") plain_Array[i] = "D";
				if (item == "5") plain_Array[i] = "E";
				if (item == "4") plain_Array[i] = "F";
				if (item == "3") plain_Array[i] = "G";
				if (item == "2") plain_Array[i] = "H";
				if (item == "1") plain_Array[i] = "I";
				if (item == "0") plain_Array[i] = "J";

				if (item == "z") plain_Array[i] = "K";
				if (item == "y") plain_Array[i] = "L";
				if (item == "x") plain_Array[i] = "M";
				if (item == "w") plain_Array[i] = "N";
				if (item == "v") plain_Array[i] = "O";
				if (item == "u") plain_Array[i] = "P";
				if (item == "t") plain_Array[i] = "Q";
				if (item == "s") plain_Array[i] = "R";
				if (item == "r") plain_Array[i] = "S";
				if (item == "q") plain_Array[i] = "T";
				if (item == "p") plain_Array[i] = "U";
				if (item == "o") plain_Array[i] = "V";
				if (item == "n") plain_Array[i] = "W";
				if (item == "m") plain_Array[i] = "X";
				if (item == "l") plain_Array[i] = "Y";
				if (item == "k") plain_Array[i] = "Z";
				if (item == "j") plain_Array[i] = "a";
				if (item == "i") plain_Array[i] = "b";
				if (item == "h") plain_Array[i] = "c";
				if (item == "g") plain_Array[i] = "d";
				if (item == "f") plain_Array[i] = "e";
				if (item == "e") plain_Array[i] = "f";
				if (item == "d") plain_Array[i] = "g";
				if (item == "c") plain_Array[i] = "h";
				if (item == "b") plain_Array[i] = "i";
				if (item == "a") plain_Array[i] = "j";

				if (item == "$") plain_Array[i] = "k";
				if (item == "~") plain_Array[i] = "l";
				if (item == "/") plain_Array[i] = "m";
				if (item == "-") plain_Array[i] = "n";
				if (item == "+") plain_Array[i] = "o";
				if (item == "*") plain_Array[i] = "p";
				if (item == "%") plain_Array[i] = "q";
				if (item == "#") plain_Array[i] = "r";
				if (item == "\"") plain_Array[i] = "s";
				if (item == "'") plain_Array[i] = "t";
				if (item == "]") plain_Array[i] = "u";
				if (item == "[") plain_Array[i] = "v";
				if (item == "}") plain_Array[i] = "w";
				if (item == "{") plain_Array[i] = "x";
				if (item == ")") plain_Array[i] = "y";
				if (item == "(") plain_Array[i] = "z";
				if (item == ">") plain_Array[i] = "0";
				if (item == "<") plain_Array[i] = "1";
				if (item == "?") plain_Array[i] = "2";
				if (item == "!") plain_Array[i] = "3";
				if (item == ",") plain_Array[i] = "4";
				if (item == ".") plain_Array[i] = "5";

				if (item == "Z") plain_Array[i] = "6";
				if (item == "Y") plain_Array[i] = "7";
				if (item == "X") plain_Array[i] = "8";
				if (item == "W") plain_Array[i] = "9";
				if (item == "V") plain_Array[i] = ".";
				if (item == "U") plain_Array[i] = ",";
				if (item == "T") plain_Array[i] = "!";
				if (item == "S") plain_Array[i] = "?";
				if (item == "R") plain_Array[i] = "<";
				if (item == "Q") plain_Array[i] = ">";
				if (item == "P") plain_Array[i] = "(";
				if (item == "O") plain_Array[i] = ")";
				if (item == "N") plain_Array[i] = "{";
				if (item == "M") plain_Array[i] = "}";
				if (item == "L") plain_Array[i] = "[";
				if (item == "K") plain_Array[i] = "]";
				if (item == "J") plain_Array[i] = "\'";
				if (item == "I") plain_Array[i] = "\"";
				if (item == "H") plain_Array[i] = "#";
				if (item == "G") plain_Array[i] = "%";
				if (item == "F") plain_Array[i] = "*";
				if (item == "E") plain_Array[i] = "+";
				if (item == "D") plain_Array[i] = "-";
				if (item == "C") plain_Array[i] = "/";
				if (item == "B") plain_Array[i] = "~";
				if (item == "A") plain_Array[i] = "$";
			});
		} else if(key_item == 2) {
			plain_Array.reverse();
		} 
		document.getElementById('key').value = '';
	});
plain_text.value = plain_Array.join('');
}
}
