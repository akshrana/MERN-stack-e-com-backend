class matrix{
constructor( x,y ){

this.rows=x;
this.cols=y;
this.matrix=[];
 for(var i=0;i<x;i++)
 {

 	this.matrix[i]=[];
 	for(var j=0;j<y;j++)
 		this.matrix[i][j]=0;
 }
}

add(n)
 {
 
for(var i=0;i<this.rows;i++)
{
  for(var j=0;j<this.cols;j++)
  	this.matrix[i][j]+=n;

}
}

multiply(b)
{

var n=new matrix(this.rows,b.cols);
var a=this.matrix;
var x=b.matrix;
for(var i=0;i<b.rows;i++)
	for(var j=0;j<b.cols;j++)
	{
        var sum=0;
		for(var k=0;k<this.cols;k++)
		{
           sum=sum+a[i][k]*x[k][j];

		}
		n.matrix[i][j]=sum;

	}
	return n;
}
map()
{

	
}
}