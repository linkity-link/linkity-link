//Linear Differntial Privacy Demo!

//IMPORTS
import {UserData, UserDataReader} from './UserData.js';
import {Privatizer} from './Privatizer.js';
import {Histogram} from './Histogram.js';
import {Simulator} from './Simulator.js';

//var H1 = new Histogram(...);

//Run when demo loads:
document.addEventListener("DOMContentLoaded", event=>{

	console.log("Loaded page!");
	//console.log(UserDataReader(1000))

});

//When table uploaded:

document.getElementById('fileupload').onchange = function(){
   UserDataReader(this,10);
}
