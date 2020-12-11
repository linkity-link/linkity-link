function UserData(id) {
  this.id = 0;
  this.text = function() {
    console.log("USERDATA LOADED")
  }
};

class UserData {
  constructor(id, age) {
    this.id = id;
    this.age = age;
  }
}