function Histogram(target, name, start, bincount, binsize) {
  
  this.target = document.getElementById(target).getContext('2d');
  this.name = name;
  this.start = start;
  this.bincount = bincount;
  this.binsize = binsize;

  this.samples = [];
  this.bins = [];
  this.counts = new Array(bincount*binsize).fill(0);

  for(var i=0;i < bincount;i++){
  	var t = start + i*binsize;
  	var t2 = t + binsize - 1;

  	if (i != bincount-1) this.bins.push(String(t)+"-"+String(t2));
  	else this.bins.push(String(t)+"+");
  }

  	//Can't own colors, but credit is due where it is due
  	//https://blog.vanila.io/chart-js-tutorial-how-to-make-gradient-line-chart-af145e5c92f9
	var gradientStroke = this.target.createLinearGradient(500, 0, 100, 0);
	gradientStroke.addColorStop(0, "#80f4b6");
	gradientStroke.addColorStop(1, "#f48090");

  this.data = {
  	labels:this.bins,
  	datasets:[{
  		label:"Count",
  		data: new Array(bincount).fill(0),
  		backgroundColor: gradientStroke
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
    	},
    	scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
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
  	this.counts[X-this.start]+=1;
  	//console.log(this.getBin(X));
  	this.Hist.data.datasets[0]["data"][this.getBin(X)] += 1;
  	//Split into bins of 10s and update accordingly
  	this.Hist.update();
  }

  this.RemoveBias = function(eps,useBinSums=true){
  //this.RemoveBias = function(useBinSums=true){

  	let n = this.samples.length;
  	//constant
  	//let p = 0.05; //5%
  	//let q = (1-p)*/90;
  	//let p = 50/100; //50%

    let p = Math.pow(Math.e, eps)/( Math.pow(Math.e, eps) + d - 1) ;
  	let q = (1-p)/9; //1/9

  	var norm = p-q;
  	var bias = n*q;

  	console.log(n, bias, norm);

  	if(useBinSums){
  		//for(var i=0;i<bincount-1;i++){
  		for(var i=0;i<bincount;i++){
  			this.Hist.data.datasets[0]["data"][i] -= bias;
  			this.Hist.data.datasets[0]["data"][i] /= norm;
	  	}
  	}

  	else{
  		for(var i=0;i<bincount-1;i++){
		//this.Hist.data.datasets[0]["data"][i] -= bias;
		//this.Hist.data.datasets[0]["data"][i] /= norm;
		this.Hist.data.datasets[0]["data"][i] = 0;
		}

	  	let hardlimit=Math.min(100-start+1+1,bincount*binsize);

	  	for(var i=start;i<hardlimit;i++){
	  		var X = i-start;
	  		//console.log(i,this.counts[X],bias,norm);
	  		this.Hist.data.datasets[0]["data"][this.getBin(i)] += (this.counts[X]-bias)/norm;
	  	}

  	}

  	//Split into bins of 10s and update accordingly
  	this.Hist.update();
  }

  this.peek= function(X){
  	console.log(this.samples);
  	//console.table(this.Hist.data.datasets[0]["data"]);
  }
};

export{ Histogram };