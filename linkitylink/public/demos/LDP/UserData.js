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

    TODO: FIND INDEX OF "AGE" IN THE FIRST ROW

    TODO: Make UserData ON EVERY ["AGE"] in tableData, and collect into an Array

    return Array

    //REST OF THE CODE GOES IN Simulation.js
    //Privatize Array
    //Send to Histogram
    //Compare results?
}

export{ UserData, UserDataReader };