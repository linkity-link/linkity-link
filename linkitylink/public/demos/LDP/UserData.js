function UserData(id,age) {
    this.id = id;
    this.age = age;
};

 
function UserDataReader(input, maxsize) {
    //console.log(input)
    console.log("loading file...")
 if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.readAsBinaryString(input.files[0]);
    reader.onload = function (e) {
        //console.log(e.target.result, maxsize)
        //getData(e.target.result, maxsize);
        getAgeData(e.target.result, maxsize);
    }  
    }
}
 
function getAgeData(data, maxsize){
    //console.log("Ignoring maxsize for now")
    let tableData = [];
    let lbreak = data.split("\n");
    //console.log(lbreak.length)
    lbreak.forEach(res => {
        tableData.push(res.split(","));
    });
    
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

    console.log("Pass minAge, maxAge? or just hard-code it?")

    //console.log(ageArray);
    //return {"ages": ageArray, "minAge": minAge, "maxAge": maxAge};

    //REST OF THE CODE GOES IN Simulation.js
    //Privatize Array
    //Send to Histogram
    //Compare results?
}

export{ UserData, UserDataReader };