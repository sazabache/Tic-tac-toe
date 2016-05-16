$(function(){
	$('.bt').click(marcador);

});
var i=0;
function marcador(){
	if(i%2==0){
		$(this).text("X");
	}
	else{
		$(this).text("O");
	}
	i++;
	$(this).attr('disabled',true);
	if(i== 9){
		alert("Hay un empate")
	}

	function comparar(){
		if($('.uno').text()!= "" && $('.uno').text()!= "+" && $('.uno').text()== $('.dos').text() && $('.uno').text() == $('.tres').text()){
			alert("Ganaste" + " "+ $('.uno').text());
		}
		else if($('.cuatro').text()!= "" && $('.cuatro').text()!= "+" && $('.cuatro').text()== $('.cinco').text() && $('.cuatro').text() == $('.seis').text()){
			alert("Ganaste" + " "+ $('.cuatro').text());
		}
		else if($('.siete').text()!= "" && $('.siete').text()!= "+" && $('.siete').text()== $('.ocho').text() && $('.siete').text() == $('.nueve').text()){
			alert("Ganaste" + " "+ $('.siete').text());
		}
		else if($('.uno').text()!= "" && $('.uno').text()!= "+" && $('.uno').text()== $('.cuatro').text() && $('.uno').text() == $('.siete').text()){
			alert("Ganaste" + " "+ $('.uno').text());
		}
		else if($('.dos').text()!= "" && $('.dos').text()!= "+" && $('.dos').text()== $('.cinco').text() && $('.dos').text() == $('.ocho').text()){
			alert("Ganaste" + " "+ $('.dos').text());
		}
		else if($('.tres').text()!= "" && $('.tres').text()!= "+" && $('.tres').text()== $('.seis').text() && $('.tres').text() == $('.nueve').text()){
			alert("Ganaste" + " "+ $('.tres').text());
		}
		else if($('.uno').text()!= "" && $('.uno').text()!= "+" && $('.uno').text()== $('.cinco').text() && $('.uno').text() == $('.nueve').text()){
			alert("Ganaste" + " "+ $('.uno').text());
		}
		else if($('.tres').text()!= "" && $('.tres').text()!= "+" && $('.tres').text()== $('.cinco').text() && $('.tres').text() == $('.nueve').text()){
			alert("Ganaste" + " "+ $('.tres').text());
		}
	}
	comparar();
};
function reiniciar(){
		$('.reini').click(function(){
			$('.bt').text('+');
			$('.bt').attr('disabled',false); i=0;
		});
			
		
	}
reiniciar();

