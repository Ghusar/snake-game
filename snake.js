function snake(x,y){
	this.x = x;
	this.y = y;
}
function setup(){
	
	
	//alert("hello");
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
	moving = setInterval(move_right,300);
	
	
	
	
}


function setvisible(){
	for(var i = 0; i < list.length ; i++){
		cont.fillRect(list[i].x,list[i].y,10,10);
	}
}


function move_right(){
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
	if(list[0].x+10==goal_x&&list[0].y ==goal_y){
		//alert("aya");
		insertfirst(new snake(list[0].x+10,list[0].y));
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
	s.innerHTML = sc;
			goal();

	}
	else if(list[0].x-10==goal_x&&list[0].y ==goal_y){
		//alert("aya");
		insertfirst(new snake(list[0].x-10,list[0].y));
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
	s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y+10 ==goal_y){
		//alert("aya");
		insertfirst(new snake(list[0].x,list[0].y+10));
			cont.fillRect(list[0].x,list[0].y,10,10);
			sc = sc + 10;
	s.innerHTML = sc;
			goal();

	}
	else if(list[0].x==goal_x&&list[0].y-10==goal_y){
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
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	list[0].y = list[0].y + 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
}

function moveup(){
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
	cont.clearRect(list[0].x,list[0].y,10,10);
	var px = list[0].x;
	var py = list[0].y;
	//if(list[0].x>=10)
	list[0].x = list[0].x - 10;
	cont.fillRect(list[0].x,list[0].y,10,10);
	moveall(px,py);
	check_it();
}



document.onkeydown = function() {
switch (window.event.keyCode) {
case 37:
{
	clearInterval(moving);
moving = setInterval(moveleft,300);
}
break;
case 38:
{
	clearInterval(moving);
moving = setInterval(moveup,300);
}
break;
case 39:
{
	clearInterval(moving);
moving = setInterval(move_right,300);
} 
break;
case 40:{
	clearInterval(moving);
moving = setInterval(movedown,300);
}
break;
}
}



