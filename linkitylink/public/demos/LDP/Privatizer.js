
function Privatize(obj) {
	//Privatize!
	
	var p = randomInt(0, 101);  //probability
	
	if(p<20){ //with probability less then or equal to %5 we say the truth
		return obj;
	}else{ //we transform the truth to a random value

		/*var v = randomInt(10, 101); //minimum age of our user data is 10, maximum age is 100

		//TODO: WHILE LOOP UNTIL V!=obj 1/90 instead of 1/91
		
		if (v>=10 && v<20){
		    obj=10;
		    return obj;
		}else if (v>=20 && v<30){
		    obj=20;
		    return obj;
		}else if (v>=30 && v<40){
		    obj=30;
		    return obj;
		}else if (v>=40 && v<50){
		    obj=40;
		    return obj;
		}else if (v>=50 && v<60){
		    obj=50;
		    return obj;
		}else if (v>=60 && v<70){
		    obj=60;
		    return obj;
		}else if (v>=70 && v<80){
		    obj=70;
		    return obj;
		}else if (v>=80 && v<90){
		    obj=80;
		    return obj;
		}else if (v>=90 && v<100){
		    obj=90;
		    return obj;
		}else{
		    obj=100;
	            return obj;
		}*/

		var v = randomInt(1,11)*10;
		while (v == obj){
			v = randomInt(1,11)*10;
		}
		return v;
	}
	return obj;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

export{ Privatize, randomInt };
