
function Privatize(eps,obj) {
//function Privatize(obj) {
	//Privatize!

	//Todo: add in eps as argument

	//var p = randomInt(0, 101);  //probability
	var sample = Math.random(); //[0,1)

	//var p = 0.5;
	let d = 10; //?
	var p = Math.pow(Math.E, eps)/( Math.pow(Math.E, eps) + d - 1) ;

	//console.log(eps);
	//console.log(p);
	
	if(sample < p){ //with probability %50 we say the truth
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
