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
        getData(e.target.result, maxsize)           
    }  
    }
}
 
function getData(data, maxsize){
    console.log("Ignoring maxsize for now")
    let tableData = [];
    let lbreak = data.split("\n");
    //console.log(lbreak.length)
    lbreak.forEach(res => {
        tableData.push(res.split(","));
    });
    
    //tableData.push(res.split(","));
    //console.table(tableData);
    //console.log(tableData.length)

    cut = Math.max(maxsize, tableData.length)

    tableData = tableData.subarray(1,cut)

    //TODO: FIND INDEX OF "AGE" IN THE FIRST ROW

    var indexOfAge = 0;
    var i;
    for(i = 0; i < tableData[0].length; i++) {
        if(tableData[0][i] == "Age") {
            indexOfAge = i;
        }
    }

    //TODO: Make UserData ON EVERY ["AGE"] in tableData, and collect into an Array

    var ageArray = [];
    var j;
    for(j = 1; j < tableData.length; j++) {
        ageArray.push(tableData[j][indexOfAge]);
    }

    //finding min and max in ageArray
    
    var minAge = Math.min.apply(Math, ageArray);
    var maxAge = Math.max.apply(Math, ageArray);

    return ageArray;

    //REST OF THE CODE GOES IN Simulation.js
    //Privatize Array
    //Send to Histogram
    //Compare results?
}

export{ UserData, UserDataReader };