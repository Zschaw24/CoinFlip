var list= [];
var db = firebase.database();
var tHeads= db.ref('allTimeHeads').once('value').then(function(snap){tHeads=snap.val();});
var tTails=db.ref('allTimeTails').once('value').then(function(snap){tTails=snap.val();});

db.ref('allTimeHeads').once('value').then(function(snap){
s=snap.val();
document.getElementById('totalheads').innerHTML=s;});

db.ref('allTimeTails').once('value').then(function(snap){
x=snap.val();
document.getElementById('totaltails').innerHTML=x;
});

function Reset(){
  var resetb=db.ref('allTimeHeads');
  document.getElementById('totalheads').innerHtml=0;
  db.ref('allTimeHeads');
  resetb.set(0);
  var resetb2=db.ref('allTimeTails');
  document.getElementById('totaltails').innerHtml=0;
  db.ref('allTimeTails');
  resetb2.set(0);
  resetb.set(0);
  location.reload();
}

function Resetresults(){
location.reload();
}

function Random() {
  var result = Math.floor(Math.random() * 2);
  document.getElementById("number").innerHTML = result;

if (result ==1 ){
  document.getElementById('number').innerHTML= "HEADS";
DrawHeads();
var score= db.ref('allTimeHeads');
document.getElementById('totalheads').innerHTML=1+tHeads++;
db.ref('allTimeHeads'+tHeads);
score.set(tHeads);
}

else{
document.getElementById('number').innerHTML= "TAILS";
DrawTails();
var score= db.ref('allTimeTails');
document.getElementById('totaltails').innerHTML=1+tTails++;
db.ref('allTimeTails'+tTails);
score.set(tTails);
}}

function DrawHeads(){
      var c = document.getElementById("coin");
      var ctx = c.getContext("2d");
      var centerX= c.width/2;
      var centerY= c.height/2;
      var radius =150;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#b87333';
      ctx.fill();
      ctx.font = "30px Arial";
      ctx.fillStyle='green';
      ctx.fillText("HEADS",200,260);
      list.push("H");
      document.getElementById('list').innerHTML=list;
}

  function DrawTails(){
        var c = document.getElementById("coin");
        var ctx = c.getContext("2d");
        var centerX= c.width/2;
        var centerY= c.height/2;
        var radius =150;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#b87333';
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle='blue';
        ctx.fillText('TAILS',210,260);
          list.push("T");
          document.getElementById('list').innerHTML=list;
}
