function snake(x,y,color){
	this.x = x;
	this.y = y;
	this.color = color;
}


function setup(){
	
	directionind = 0;
	//alert("hello");
	sp = 100;
	sc = 0;
	s = document.getElementById("score");
	s.innerHTML = sc;
	can = document.getElementById("can");
	cont = can.getContext("2d");
	alertbox = document.getElementById("alertbox");
	alertm = document.getElementById("alertmessage");
	
	can.style.display="block";
	alertbox.style.display="none";
	
	cont.clearRect(0,0,300,500);
	list = new Array();
	list = [];
	var head = new snake(30,0,"black");
	list.push(head);
	var head = new snake(20,0,"white");
	list.push(head);
	//alert(list[0].x);
	head = new snake(10,0,"green");
	list.push(head);
	head = new snake(0,0,"blue");
	list.push(head);
	
	//alert("mo");
	setvisible();
	goal();
	
//alert("go");
	moving = setInterval(move_right,sp);
	
	
	
	
}

function resume(){
	if(directionind == 1)
		moving = setInterval(moveup,sp);
	if(directionind == 2)
		moving = setInterval(movedown,sp);
	if(directionind == 3)
		moving = setInterval(move_right,sp);
	if(directionind == 4)
		moving = setInterval(moveleft,sp);
	
}

function pause(){
	clearInterval(moving);
}


function setvisible(){
	for(var i = 0; i < list.length ; i++){
		cont.fillStyle = list[i].color;
		cont.fillRect(list[i].x,list[i].y,10,10);
	}
}


function move_right(){
	if(directionind!=4){
	directionind = 3;
	cont.clearRect(list[0].x,list[0].y,10,10);
	
	var px = list[0].x;
	var py = list[0].y;
	
	list[0].x=list[0].x+10;
	cont.fillStyle = list[0].color;
	cont.fillRect(list[0].x,list[0].y,10,10);
	
	moveall(px,py);
	
	
	check_it();
	}
}

function moveall(px,py){
	
	for(var l = 1; l < list.length ;l++){
			if(list[l].x!=goal_x||list[l].y != goal_y)
			cont.clearRect(list[l].x,list[l].y,10,10);
			cont.fillStyle = list[l].color;
			cont.fillRect(px,py,10,10);
			
			var temp = list[l].x;
			list[l].x = px;
			px = temp;
			
			temp = list[l].y;
			list[l].y = py;
			py = temp;
	}
}

	
	
function check_it(){
	checkcat();
	if(list[0].x >300||list[0].y > 500||list[0].x<0||list[0].y<0){
		clearInterval(moving);
		alertbox.style.display="block";
			can.style.display="none";
			alertm.innerHTML="your snake got stuck";
	}
	else{
	if((list[0].x==goal_x&&list[0].y) ==goal_y&&directionind==3){
		//alert("aya");
		insertfirst(new snake(list[0].x+10,list[0].y,"white"));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			sp = sp - 1;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y ==goal_y&&directionind==4){
		//alert("aya");
		insertfirst(new snake(list[0].x-10,list[0].y));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			sp = sp - 1;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y ==goal_y&&directionind==2){
		//alert("aya");
		insertfirst(new snake(list[0].x,list[0].y+10));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			sp = sp - 1;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y==goal_y&&directionind==1){
		//alert("aya");
		insertfirst(new snake(list[0].x,list[0].y-10));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			sp = sp - 1;
			s.innerHTML = sc;
			goal();

	}
	
	}
}


function checkcat(){
	for(var n = 1; n<list.length;n++){
		if(list[0].x == list[n].x&&list[0].y == list[n].y){
			clearInterval(moving);
			alertbox.style.display="block";
			can.style.display="none";
			alertm.innerHTML="your snake got stuck";
			
		}
	}
}

function insertfirst(sn){
	//alert("gone");
	var newAr = [];
	newAr.push(sn);
	
	for(c = 0 ; c < list.length; c++){
		newAr.push(list[c]);
	}
	list = newAr;
	delete newAr;
}

function goal(){
	goal_x = Math.floor(Math.random()*30);
	goal_y = Math.floor(Math.random()*50);
	
	goal_x = goal_x*10;
	goal_y = goal_y*10;
	
	cont.fillRect(goal_x,goal_y,10,10);
}

function setting(){

	
}

function movedown(){
	if(directionind!=1){
	directionind= 2;
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	list[0].y = list[0].y + 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
	}
}

function moveup(){
	if(directionind!=2){
	directionind=1;
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	//if(list[0].y>=10)
	list[0].y = list[0].y - 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
	}
}

function moveleft(){
	if(directionind!=3){
	directionind = 4;
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	//if(list[0].x>=10)
	list[0].x = list[0].x - 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
	}
}



window.onkeydown = function(e) {
e.preventDefault();
e.stopPropagation();

switch (window.event.keyCode) {
case 37:
{
	if(directionind!=3){
	clearInterval(moving);
moving = setInterval(moveleft,sp);
	}
}
break;
case 38:
{
	if(directionind!=2){
	clearInterval(moving);
moving = setInterval(moveup,sp);
	}
}
break;
case 39:
{
	if(directionind!=4){
	clearInterval(moving);
moving = setInterval(move_right,sp);
} 
}
break;
case 40:{
	if(directionind!=1){
	clearInterval(moving);
moving = setInterval(movedown,sp);
}
}
break;
}
}



