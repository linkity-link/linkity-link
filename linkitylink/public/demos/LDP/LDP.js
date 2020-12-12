//Linear Differntial Privacy Demo!

//IMPORTS
import {UserData, UserDataReader} from './UserData.js';
import {Privatize} from './Privatizer.js';
import {Histogram} from './Histogram.js';
import {Simulator} from './Simulator.js';

//Histograms
var H1 = new Histogram("chartNoisy", "Age Groups (with LDP)", 10, 10, 10);
var H2 = new Histogram("chartReal", "Age Groups (without LDP)", 10, 10, 10);

//Run when demo loads:
document.addEventListener("DOMContentLoaded", event=>{

	console.log("Loaded page!");
	//console.log(UserDataReader(1000))
	H2.send(50);
	H1.send(Privatize(50));
	H2.send(50);
	H1.send(Privatize(50));
	H2.send(50);
	H1.send(Privatize(50));
	console.log(H1.peek());
	console.log(H2.peek());
});

//When table uploaded:

document.getElementById('fileupload').onchange = function(){
   UserDataReader(this,10);
}
