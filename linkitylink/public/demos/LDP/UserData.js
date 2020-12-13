function UserData(id,age) {
    this.id = id;
    this.age = age;
};

 
function UserDataReader(input, maxsize, callback) {
    //console.log(input)

    this.input = input;
    this.maxsize = maxsize;
    this.callback = callback;
    this.contents = [];

    //console.log("loading file...");
    //console.log(input, maxsize,callback);

    var getAgeData = function(data, maxsize) {
    console.log('reading table');
    //console.log("Ignoring maxsize for now")
    let tableData = [];
    let lbreak = data.split("\n");
    //console.log(lbreak.length)
    lbreak.forEach(res => {
        tableData.push(res.split(","));
    });
    console.log('still reading table');
    
    //tableData.push(res.split(","));
    //console.table(tableData);
    //console.log(tableData.length)

    //TODO: FIND INDEX OF "AGE" IN THE FIRST ROW

    var indexOfAge = 0;
    var i;
    for(i = 0; i < tableData[0].length; i++) {
        if(tableData[0][i] == "Age") {
            indexOfAge = i;
        }
    }
    console.log('read table');

    var cut = Math.min(maxsize + 1, tableData.length);

    tableData = tableData.slice(1,cut);

    //TODO: Make UserData ON EVERY ["AGE"] in tableData, and collect into an Array
    //console.table(tableData);

    var ageArray = [];
    var ageTensDigit = 0;
    var newAge = 0;
    var j;
    for(j = 0; j < cut-1; j++) {
        //console.log(tableData[j]);
        //convert to number
        ageTensDigit = parseInt((Number(tableData[j][indexOfAge]))/10);
        newAge = ageTensDigit * 10;
        ageArray.push(newAge);
    }

    //finding min and max in ageArray
    
    var minAge = Math.min.apply(Math, ageArray);
    var maxAge = Math.max.apply(Math, ageArray);

    //console.log("Pass minAge, maxAge? or just hard-code it?")

    //console.log(ageArray);
    //return {"ages": ageArray, "minAge": minAge, "maxAge": maxAge};

    //REST OF THE CODE GOES IN Simulation.js
    //Privatize Array
    //Send to Histogram
    //Compare results?
    //console.log(ageArray);
    //this.contents=ageArray;
    return ageArray;
    }



    if (input.files && input.files[0]) {
        //console.log("I'm in...")
    let reader = new FileReader();
    reader.readAsBinaryString(input.files[0]);
    var CB = this.callback;
    reader.onload = function (e) {
        //console.log(e.target.result, maxsize)
        //getData(e.target.result, maxsize);
        //rows = getAgeData(e.target.result, maxsize);
        //console.log(rows);
        //return rows;
        //console.log("oops");
        //console.log("file loaded...");
        //console.log('loading age data...');
        CB.send(getAgeData(e.target.result, maxsize));
        //console.log("got data");
        //console.log(CB);
        CB.ready();
    }  
    }

}

export{ UserData, UserDataReader };