/*Funktion som byter bakgrundsfärg från vit till blå*/
function change_bg()
{

    document.body.style.backgroundColor = 'Blue';

}
/*Funktion som visar ett meddelande när man trycker på knappen*/
function message()
{

    document.getElementById("message").innerHTML = "Be the better you!";

}
/*Funktion som visar datum och tid*/ 
function datum()
{

    document.getElementById("tid").innerHTML = Date();

}

/*Detta är en funktion som kollar vilken bils som visas och sedan när man trycker på knappen så ändras den och samma om man trycker igen */
function change_picture()
{
    var get = document.getElementById('idPic');

    if (get.src.match("Explosion.jpeg")){
         get.src = "Teslabil.jpeg";
        }

        else{
         get.src = "Explosion.jpeg";
        }

}
/*Funktioner som gömmer bilden och visar den igen när man trycker på kanpparna */

function hidePic()
{

    document.getElementById("idPic").src="";
}

function showPic()
{

    document.getElementById("idPic").src="Explosion.jpeg";
}






