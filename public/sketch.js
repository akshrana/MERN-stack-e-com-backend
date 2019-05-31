
var data;
function preload()
{

data=loadJSON('xmovies.json');

}

function setup()
{ var users={};
noCanvas();

var dropdown1=createSelect('');
var dropdown2=createSelect('');
for(var i=0;i<data.users.length;i++)
{
	var name=data.users[i].name;
dropdown1.option(name);
dropdown2.option(name);
users[name]=data.users[i];
}
console.log(users); 

var button=createButton("submit");
button.mousePressed(callthis);

function callthis()
{

	var name1=dropdown1.value();
	var name2=dropdown2.value();
	var ratings1=users[name1];
	var ratings2=users[name2];
	console.log(ratings1)
	var title=Object.keys(ratings1);
	console.log(title);
	var i=title.indexOf('name');
	title.splice(i,1);
	var j=title.indexOf('timestamp');
	title.splice(j,1);
	console.log(title);
	var sumsq=0;
	for(var i=0;i<title.length;i++){
titl=title[i]; 
 var rating1=ratings1[titl];
 var rating2=ratings2[titl];
	var dif=rating1-rating2;
	sumsq+=(dif*dif); 
         }
var res=sqrt(sumsq);

	console.log(dif)
	createP(1/(1+res)*100+"%");



}
}