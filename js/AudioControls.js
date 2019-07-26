var array=["/home/sakthiganesh/Desktop/KanneKanne.mp3","/home/sakthiganesh/Desktop/KeralaSong.mp3","/home/sakthiganesh/Desktop/OmanaPenne.mp3"];
var pos=0;
var flag=false;
var size=array.length;
var isPlaying=false;

function nextInQueue(){
  var player=document.getElementById('Player');
  if(!flag)
    flag=!flag;
  if(pos<(size-1)){
    pos=pos+1;
    player.src=array[pos];
  }
  else {
    pos=0;
    player.src=array[pos];
  }
  player.play();
  isPlaying=true;
}

function prevInQueue(){
  var player=document.getElementById('Player');
  if(!flag)
    flag=!flag;
  if(pos>0){
    pos=pos-1;
    player.src=array[pos];
  }
  else {
    pos=size-1;
    player.src=array[pos];
  }
  player.play();
  isPlaying=true;
}

function togCurrent(){
  var player=document.getElementById('Player');
  if(!flag){
    player.src=array[pos];
    player.play();
    flag=true;
  }
  else {
    if(isPlaying)
      player.pause();
    else
      player.play();
      isPlaying=!isPlaying;
  }
}
