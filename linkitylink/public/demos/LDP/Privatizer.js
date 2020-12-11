
function Privatizer(obj) {
	//Privatize!
	var v = randomInt(1, 100)
	var p = randomInt(0, 100)
	
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
