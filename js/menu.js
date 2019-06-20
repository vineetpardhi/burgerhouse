$(document).ready(function()
{

		$("#brgf").click(function()
		{
			$("#Frs").hide("swing");
			$("#Coffee").hide("slow");
			$("#bvrgs").hide("slow");
			$("#pizza").hide("slow");
			$("#brg").show("swing");



		});


		$("#anf").click(function()
		{

			$("#brg").hide("slow");
			$("#Coffee").hide("slow");
			$("#bvrgs").hide("slow");
			$("#pizza").hide("slow");
			$("#Frs").show("swing");


		});
			$("#coff").click(function()
		{

			$("#brg").hide("slow");
			$("#Frs").hide("slow");
			$("#bvrgs").hide("slow");
			$("#pizza").hide("slow");
			$("#Coffee").show("swing");


		});

			$("#bvrg").click(function()
		{

			$("#brg").hide("slow");
			$("#Frs").hide("slow");
			$("#Coffee").hide("slow");
			$("#pizza").hide("slow");
			$("#bvrgs").show("swing");



		});
		
			$("#piz").click(function()
		{

			$("#brg").hide("slow");
			$("#Frs").hide("slow");
			$("#Coffee").hide("slow");
			$("#bvrgs").hide("slow");
			$("#pizza").show("swing");



		});



		

			$(".right-cart").click(function()
			{
				   $(".cart").fadeToggle("fast");
				   $(".shopping-cart").css('display','inline-block');
			});




			
	
});
var Total=0;
function add($p1)
{

	
	var item=$p1;
	var cln=item.cloneNode(true);
	var cloneNode=document.getElementById("demo").appendChild(cln);
	$("<br>").insertAfter(cloneNode);
	cloneNode.onclick=null;
	$("#demo .hidden-price").show().css('position','absolute').css('left','250px').css('float','right');
	Total=Total+parseInt($("#demo .hidden-price").html());
	document.getElementById("price").innerHTML=Total;
}





