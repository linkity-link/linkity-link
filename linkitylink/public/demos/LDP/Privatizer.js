
function Privatize(obj) {
	//Privatize!
	
	var p = randomInt(0, 101);  //probability
	
	if(p<50){ //with probability less then or equal to %20 we say the truth
		return obj;
	}else{ //we transform the truth to a random value

		var v = randomInt(1,11)*10; //minimum age of our user data is 10, maximum age is 100
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
