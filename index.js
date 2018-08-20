function BoardMember (name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  this.veto = function(){
    return "No, I must disagree";
  }

  this.approve = function() {
    return "You can do that!";
  }

  this.doCharity = function() {
    return "You can do that!";
  }

  this.releasePressStatement  = function() {
    return "You will see great things from Scuber.You can do that!";
  }

  this.sayHi  = function() {
    console.log( `Hi, my name is ${this.name}. I am from ${this.homeTown}")
  }


}
