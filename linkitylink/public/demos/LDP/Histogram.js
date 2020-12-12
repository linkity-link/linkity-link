function Histogram(target, name, start, bincount, binsize) {
  
  this.target = document.getElementById(target).getContext('2d');
  this.name = name;
  this.start = start;
  this.bincount = bincount;
  this.binsize = binsize;

  this.samples = [];
  this.bins = [];
  this.counts = [];

  for(var i=0;i < bincount;i++){
  	var t = start + i*binsize;
  	var t2 = t + binsize - 1;

  	if (i != bincount-1) this.bins.push(String(t)+"-"+String(t2));
  	else this.bins.push(String(t)+"+");
  }

  this.data = {
  	labels:this.bins,
  	datasets:[{
  		label:"Count",
  		data: new Array(bincount).fill(0)
  	}]
  }

  //console.log(this.data)

  this.Hist = new Chart(this.target, {
    type: 'bar',
    data: this.data,
    options: {
    	title:{
    		display:true,
    		text:this.name
    	}
    }
    });
  //this.bins = [];

  this.getBin = function(X){
  	return Math.floor((X-this.start)/this.bincount);
  }

  this.send = function(X){
  	//console.log("Should be updating");
  	this.samples.push(X);
  	this.counts
  	//console.log(this.getBin(X));
  	this.Hist.data.datasets[0]["data"][this.getBin(X)] += 1;
  	//Split into bins of 10s and update accordingly
  	this.Hist.update();
  }

  this.peek= function(X){
  	console.log(this.samples);
  	console.table(this.Hist.data.datasets[0]["data"]);
  }
};

export{ Histogram };