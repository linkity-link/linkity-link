
function Privatizer(obj) {
	//Privatize!
	var v = randomInt(10, 100) //minimum age of our user data is 10, maximum age is 100
	var p = randomInt(0, 100)  //probability
	
	if(p<=5){
		return obj
	}else{
		obj = v
		return obj
	}
	
	return obj
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}



export{ Privatizer };
