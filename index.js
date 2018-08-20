function BoardMember (name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  this.veto = function(){
    console.log("No, I must disagree");
  }

  this approve = function() {
    console.log("You can do that!");
  }

  this doCharity = function() {
    console.log("You can do that!");
  }

  this releasePressStatement  = function() {
    console.log("You will see great things from Scuber.You can do that!");
  }

  this sayHi  = function() {
    console.log( `Hi, my name is ${this.name}. I am from ${this.homeTown}")
  }

}
