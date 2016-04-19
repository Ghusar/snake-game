function snake(x,y){
	this.x = x;
	this.y = y;
}
function setup(){
	
	directionind = 3;
	//alert("hello");
	sp = 100;
	sc = 0;
	s = document.getElementById("score");
	s.innerHTML = sc;
	can = document.getElementById("can");
	cont = can.getContext("2d");
	list = new Array();
	var head = new snake(30,0);
	list.push(head);
	var head = new snake(20,0);
	list.push(head);
	//alert(list[0].x);
	head = new snake(10,0);
	list.push(head);
	head = new snake(0,0);
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
		cont.fillRect(list[i].x,list[i].y,10,10);
	}
}


function move_right(){
	directionind = 3;
	cont.clearRect(list[0].x,list[0].y,10,10);
	
	var px = list[0].x;
	var py = list[0].y;
	
	list[0].x=list[0].x+10;
	
	cont.fillRect(list[0].x,list[0].y,10,10);
	
	moveall(px,py);
	
	
	check_it();
	
}

function moveall(px,py){
	
	for(var l = 1; l < list.length ;l++){
			if(list[l].x!=goal_x||list[l].y != goal_y)
			cont.clearRect(list[l].x,list[l].y,10,10);
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
		alert("finish");
	}
	else{
	if((list[0].x==goal_x&&list[0].y) ==goal_y&&directionind==3){
		//alert("aya");
		insertfirst(new snake(list[0].x+10,list[0].y));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y ==goal_y&&directionind==4){
		//alert("aya");
		insertfirst(new snake(list[0].x-10,list[0].y));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y ==goal_y&&directionind==2){
		//alert("aya");
		insertfirst(new snake(list[0].x,list[0].y+10));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y==goal_y&&directionind==1){
		//alert("aya");
		insertfirst(new snake(list[0].x,list[0].y-10));
			
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
			s.innerHTML = sc;
			goal();

	}
	
	}
}


function checkcat(){
	for(var n = 1; n<list.length;n++){
		if(list[0].x == list[n].x&&list[0].y == list[n].y){
			clearInterval(moving);
			alert("sorry snake stuck");
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
	directionind= 2;
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	list[0].y = list[0].y + 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
}

function moveup(){
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

function moveleft(){
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



window.onkeydown = function() {
switch (window.event.keyCode) {
case 37:
{
	clearInterval(moving);
moving = setInterval(moveleft,sp);
}
break;
case 38:
{
	clearInterval(moving);
moving = setInterval(moveup,sp);
}
break;
case 39:
{
	clearInterval(moving);
moving = setInterval(move_right,sp);
} 
break;
case 40:{
	clearInterval(moving);
moving = setInterval(movedown,sp);
}
break;
}
}



