var cines = [];
cines.push(["Cuidad:Guayaquil ", "salas: 3" ,"direccion: Sauces 7"]);
cines.push(["Cuidad: La Libertad ", "salas: 4" ,"direccion: Las 7 esquinas"]);
cines.push(["Cuidad: Daule", "salas: 5" ," direccion:  Centro"]);


function printList(list)
{
	var listHTML = '<ul>';
	for (var i = 0; i < list.length; i += 1)
	{
		listHTML += '<li>'+ list[i][0] + '</li>';
		listHTML += '<li>'+ list[i][1] + '</li>';
		listHTML += '<li>'+ list[i][2] + '</li>';
		
	}
	listHTML += '</ul>';
	print(listHTML);
}
function print(html)
{
	document.write(html);
}

printList(cines);





