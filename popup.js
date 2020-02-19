let first = 0;
let secondStr = "";
let second = 0;
let op = "";
let isFirst = true;
let midOp = false;
let isEnter = false;

function dis(element){
	if(midOp){
		document.getElementById("ans").value="";
	}
	secondStr +=element;
	document.getElementById("ans").value+=element;
}
function div(){
	document.getElementById("ans").value="";
	if(isFirst){
		op = "div";
		if(!isEnter){
			second = parseFloat(secondStr);
			first = second;
			isEnter = false;
		}
		second = 0;
		secondStr = "";
		isFirst = false;
	}
	else{
		midOp = true;
		solve();
		op = "div";
	}
}
function sub(){
	document.getElementById("ans").value="";
	if(isFirst){
		op = "sub";
		if(!isEnter){
			second = parseFloat(secondStr);
			first = second;
			isEnter = false;
		}
		second = 0;
		secondStr = "";
		isFirst = false;
	}
	else{
		midOp = true;
		solve();
		op = "sub";
	}
}
function mult(){
	document.getElementById("ans").value="";
	if(isFirst){
		op = "mult";
		if(!isEnter){
			second = parseFloat(secondStr);
			first = second;
			isEnter = false;
		}
		second = 0;
		secondStr = "";
		isFirst = false;
	}
	else{
		midOp = true;
		solve();
		op = "mult";
	}
}
function add(){
	document.getElementById("ans").value="";
	if(isFirst){
		op = "add";
		if(!isEnter){
			second = parseFloat(secondStr);
			first = second;
			isEnter = false;
		}
		second = 0;
		secondStr = "";
		isFirst = false;
	}
	else{
		midOp = true;
		solve();
		op = "add";
	}
}
function clr(){
	first = 0;
	secondStr = "0";
	second = 0;
	document.getElementById("ans").value="";
	isFirst = true;
	midOp = false;
	isEnter = false;
}
function solve(){
	second = parseFloat(secondStr);
	result = 0;
	if(op==="div"){
		result = first/second;
	}
	if(op==="mult"){
		result = first*second;
	}
	if(op==="add"){
		result = first+second;
	}
	if(op==="sub"){
		result = first-second;
	}
	first = result;
	document.getElementById("ans").value=result;
	second = 0;
	secondStr = "";
}

//TODO: write method
function enter(){
	solve();
	isFirst = true;
	isEnter = true;
}

document.addEventListener('DOMContentLoaded', function() {
    var one = document.getElementById('1');
	var two = document.getElementById('2');
	var three = document.getElementById('3');
	var four = document.getElementById('4');
	var five = document.getElementById('5');
	var six = document.getElementById('6');
	var seven = document.getElementById('7');
	var eight = document.getElementById('8');
	var nine = document.getElementById('9');
	var zero = document.getElementById('0');
	var dec = document.getElementById('decimal');
	var c = document.getElementById('clr');
	var ent = document.getElementById('solve');
	var addB = document.getElementById('add');
	var subB = document.getElementById('sub');
	var multB = document.getElementById('mult');
	var divB = document.getElementById('div');
    // onClick's logic below:
    one.addEventListener('click', function() {
        dis('1');
    });
	two.addEventListener('click', function() {
        dis('2');
    });
	three.addEventListener('click', function() {
        dis('3');
    });
	four.addEventListener('click', function() {
        dis('4');
    });
	five.addEventListener('click', function() {
        dis('5');
    });
	six.addEventListener('click', function() {
        dis('6');
    });
	seven.addEventListener('click', function() {
        dis('7');
    });
	eight.addEventListener('click', function() {
        dis('8');
    });
	nine.addEventListener('click', function() {
        dis('9');
    });
	zero.addEventListener('click', function() {
        dis('0');
    });
	dec.addEventListener('click', function() {
        dis('.');
    });
	c.addEventListener('click', function() {
        clr();
    });
	ent.addEventListener('click', function() {
        enter();
    });
	addB.addEventListener('click', function() {
        add();
    });
	subB.addEventListener('click', function() {
        sub();
    });
	multB.addEventListener('click', function() {
        mult();
    });
	divB.addEventListener('click', function() {
        div();
    });
});