
function Privatize(obj) {
	//Privatize!
	var v = randomInt(10, 100) //minimum age of our user data is 10, maximum age is 100
	var p = randomInt(0, 100)  //probability
	
	if(p<=5){ //with probability less then or equal to %5 we say the truth
		return obj
	}else{ //we transform the truth to a random value 
		obj = v
		return obj
	}
	
	return obj
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}



export{ Privatize };
