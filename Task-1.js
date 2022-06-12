var Sequence=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];
let GameSequence=[];
var SelectedSequence=[];
var i=0;
//Creating a random sequence of tiles
for(let i=15; i>0;i--){
	let a=Math.floor(Math.random() *(i));
	var tile=Sequence[i];
	Sequence[i]=Sequence[a];
	Sequence[a]=tile;
	}
	GameSequence=Sequence;
  document.getElementById(""+GameSequence[i]).style.background="gray";
  setTimeout(function change() {
    document.getElementById("" +GameSequence[i]).style.background="#2A292C"}, 300)
//addEventListener click
	let x=document.querySelectorAll('button');
		x.forEach(element => {
			document.getElementById(element.id).addEventListener('click',() => {
				let r=element.id;
				document.getElementById(""+r).style.background="white";
				setTimeout(function change2(){
					document.getElementById(""+r).style.background="#2A292C"},200)
				SelectedSequence.push(r);
        check(SelectedSequence.length-1);
		})
				;})
  function check(m) {
    if (GameSequence[m]===SelectedSequence[m]){
      if (m===15){
        alert("Win");
      }
      else if(i+1===SelectedSequence.length){
        setTimeout(function () {
        SelectedSequence=[];
        i=i+1;
        document.getElementById(""+GameSequence[i]).style.background="gray";
        setTimeout(function change() {
          document.getElementById("" +GameSequence[i]).style.background="#2A292C"}, 300);},1000);
      }
    }
    else{
      alert("Game-Over");
    }
  }
