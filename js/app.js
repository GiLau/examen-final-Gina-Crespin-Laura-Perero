
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");
//con imagen
$overlay.append($image);

//un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);

$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href= $(this).attr("href");

	//MOSTRAR EL LIGHT BOX CON LA IMAGEN 
	$image.attr("src",href);

	var texto= $(this) .children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});

// con un click salimos del overlay

$overlay.click(function(){
//escondemos overlay

	$overlay.hide();

});
