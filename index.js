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




}
