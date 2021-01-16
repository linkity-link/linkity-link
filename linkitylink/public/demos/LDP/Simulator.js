
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

  //DEFINE EPS UNTIL READABLE
  this.eps = 1.0;

  this.ticks = 0;

  this.ready = function(){
  	console.log("Simulator LOADED file!");
  }

  this.send = function(X){
  	this.samples = X;
  }

  this.i = 0;
  this.j = 0;

  this.update = function(X){
  	//TODO: Replace T with the next sample from this.samples
  	//var T = randomInt(1,11)*10;
	if (this.i == this.limit){

	  	if (this.j < this.repeat){
	  		this.j+=1;
	  		this.i=0;
	  	}
	  	else{
	  		this.i += 1;
	  		//remove bias when done

        //MODIFY TO TAKE CUSTOM EPS
	  		H1.RemoveBias();
	  	}
	}
	else if (this.i < this.limit){
		var T=this.samples[this.i];

    //Pass eps to Privatize and H1?

    //MODIFY TO TAKE CUSTOM EPS
    var clientresult=Privatize(T);
    H1.send(clientresult);
		H2.send(T);
		this.i+=1;
	}

  }

   this.UDR = new UserDataReader(this.input,this.limit,this);
   /*UDR.onload = function (e) {
   	console.log("LOADED UDR");
   }*/

};

export{ Simulator };