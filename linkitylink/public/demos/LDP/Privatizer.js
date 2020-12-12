
function Privatize(obj) {
	//Privatize!
	var v = randomInt(10, 101); //minimum age of our user data is 10, maximum age is 100
	var p = randomInt(0, 101);  //probability
	
	if(p<=4){ //with probability less then or equal to %5 we say the truth
		return obj;
	}else{ //we transform the truth to a random value 
		obj = v;
		return obj;
	}
	
	return obj;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

export{ Privatize, randomInt };
