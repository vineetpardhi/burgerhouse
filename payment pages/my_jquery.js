var in1,in2,in3;
var a,b,c;
function check(in1)
{
	document.getElementById("demo").innerHTML=in1;
	a=75*in1;
	document.getElementById("price").innerHTML=a;
}

function check2(in2)
{
	document.getElementById("demo2").innerHTML=in2;
	b=85*in2;
	document.getElementById("price2").innerHTML=b;
}

function check3(in3)
{
	document.getElementById("demo3").innerHTML=in3;
	c=100*in3;
	document.getElementById("price3").innerHTML=c;

}

function total()
{
	var total=a+b+c;
	document.getElementById("tot").innerHTML=total;
}



function validateForm() {
    var x = document.querySelector("#fname");
    if (x.value == "") {
        document.getElementById("vald1").innerHTML="*input must be filled";
        
    }
	else
	{
 document.getElementById("vald1").innerHTML="";
	}
	
}
function validateForm2() {
	
	var y=document.querySelector("#phone");
	if(y.value ==""){
		        document.getElementById("vald2").innerHTML="*input must be filled";
	}
	else
	{
		 document.getElementById("vald2").innerHTML="";
	}
}

function validateForm3() {
	
	var z=document.querySelector("#address");
	
	if(z.value =="")
	{
	document.getElementById("vald3").innerHTML="*input must be filled";
	}
	else
	{
		 document.getElementById("vald3").innerHTML="";
	}	
	
	
	}
	

