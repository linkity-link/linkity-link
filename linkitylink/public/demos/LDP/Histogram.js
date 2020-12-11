function Histogram() {
  this.samples = []

  this.send = function(X){
  	samples.push(X)
  }

  this.peek= function(X){
  	console.log(samples)
  }
};

export{ Histogram };