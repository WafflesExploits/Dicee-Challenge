var dice1, dice2;
function getDicee(){
  dice1 = Math.floor((Math.random() * 6));
  dice2 = Math.floor((Math.random() * 6));
  if(dice1 === 0){
    dice1 = 1;
  }else if(dice2=== 0){
    dice2 = 1;
  }else if(dice1>6){
    dice1=6;
  }else if(dice2>6){
    dice2=6;
  }
}
