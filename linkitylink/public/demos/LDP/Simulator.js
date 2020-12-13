
import {UserData, UserDataReader} from './UserData.js';
import {Privatize, randomInt} from './Privatizer.js';
import {Histogram} from './Histogram.js';

function Simulator(input,limit, repeat,H1,H2) {
  
  //input file
  this.input = input;
  //SAMPLES LOADED FROM INPUT FILE (USE THIS)
  this.samples = [];
  //LIMIT ON SAMPLES
  this.limit = limit;
  //TIMES TO REPEAT A GIVEN SAMPLE
  this.repeat = repeat;  
  //HISTOGRAMS
  this.H1 = H1;
  this.H2 = H2;

  this.ticks = 0;

  this.ready = function(){
  	console.log("Simulator LOADED file!");
  }

  this.send = function(X){
  	this.samples = X;
  }

  this.update = function(X){

  	TODO FIX HERE

  	//TODO: Replace T with the next sample from this.samples
  	//var T = randomInt(1,11)*10;
	H1.send(Privatize(T));
	H2.send(T);
  	

	if (ticks == duration){
	  	//remove bias when done
	  	H1.RemoveBias();
	  	this.ticks += 1;
	}
	else if (ticks < duration){
		this.ticks+=1;
	}

  }

   this.UDR = new UserDataReader(input,1000,this);
   /*UDR.onload = function (e) {
   	console.log("LOADED UDR");
   }*/

};

export{ Simulator };