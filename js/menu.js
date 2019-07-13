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

var counter=0;
document.getElementById("itm-in-cart").innerHTML=counter;

function add($p1)
{

		if(counter<=3)
		{
				counter++;	
			
					
				
					
					
				
				

				var item=$p1;
				var cln=item.cloneNode(true);
				var cloneNode=document.getElementById("demo").appendChild(cln);
				
				var item_price=$p1.getElementsByTagName('span')[0].innerHTML;
				
				
				Total=Total+parseInt(item_price);
				document.getElementById("price").innerHTML=Total;
				
				cloneNode.onclick=null;
				$(".shopping-cart-items").addClass("container");
				$("#demo div").removeClass("col-sm-4").addClass("row fd-item");

				$("#demo div .remove-item").show();

				$("#demo div .hidden-price").show().css('position','absolute').css('left','250px').css('top','10');
				
				$(".remove-item").click(function()
					{
						$(this).parent().remove();
						counter--;
						var rem_price=$(this).parent().find('span').html();
						Total=Total-parseInt(rem_price);
						document.getElementById("itm-in-cart").innerHTML=counter;
							document.getElementById("price").innerHTML=Total;
					
					});

			
				
			
				
			
				if(counter!=0)
				{
				$("#chk-btn").show("slow");
				$(".empty-cart-p").hide();
				}
				else
				{
				$("#chk-btn").hide();
				$(".empty-cart-p").show();
				}
			}
			else
			{
				alert("Only 4 Orders allowed, decide the quantity while checking out");
				exit();
			}
			
			document.getElementById("itm-in-cart").innerHTML=counter;
		
}



