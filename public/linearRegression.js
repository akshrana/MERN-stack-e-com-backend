var data=[];
function setup(){

createCanvas(400,400);
background(51);

}
var m=1;
var b=0;
function drawline()
{
var x1=0;
var y1=m*x1+b;
var x2=1;
var y2=m*x2+b;
x1=map(x1,0,1,0,width);
y1=map(y1,0,1,height,0);
x2=map(x2,0,1,0,width);
y2=map(y2,0,1,height,0);
line(x1,y1,x2,y2);

}
function linreg() {

for(var i=0;i<data.length;i++){
	var error=data[i].y-(m*data[i].x+b);
	m=m+(error*data[i].x)*0.1;
	b=b+error*0.1;

}


	/*var num=0;var den=0;
	var sumx=0,sumy=0;
	var meanx=0,meany=0;
for(var i=0;i<data.length;i++)
{
sumx+=data[i].x;
sumy+=data[i].y;
}
for(var i=0;i<data.length;i++)
{
var x= data[i].x;
var y= data[i].y;
meanx=sumx/data.length;
meany=sumy/data.length;
num+=(x-meanx)*(y-meany);
den+=(x-meanx)*(x-meanx);
}
m=num/den; 
b=meany-m*meanx;
*/




}
function mousePressed()
{
var x=map(mouseX,0,width,0,1);
var y=map(mouseY,0,height,1,0);
var point= createVector(x,y);
data.push(point);

}
console.log(data);
function draw()
{background(51);  
 for(var i=0;i<data.length;i++)
    { 
     var x=map(data[i].x,0,1,0,width);
     var y=map(data[i].y,0,1,height,0);
	
	ellipse(x,y,8,8);
    }
    if(data.length>1)
    {linreg();
    drawline();
     }
}