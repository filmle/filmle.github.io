var ctitle = "jurassic park";
var cyear = "1993";
var cdirector = "steven spielberg";
var cgenre = ["action", "adventure","science fiction"];
var attempts = 10;
var win = false;
function submit(){
    var title = document.getElementById("title").value;
    title = title.toLowerCase();
    var year = document.getElementById("year").value;
    var director = document.getElementById("director").value;
    director = director.toLowerCase();
    var genre = document.getElementById("genre").value;
    genre = genre.toLowerCase();
    attempts -= 1;
    if(attempts > 0){
        if(title == ctitle){
            document.getElementById("result1").style.display = "none"
            document.getElementById("result2").style.display = "none"
            document.getElementById("result3").style.display = "none"
            document.getElementById("result4").style.display = "block"
            document.getElementById("result4").innerHTML = "You won!"
            document.getElementById("result4").style.color = "rgb(31, 160, 31)";
            document.getElementById("attempts").innerHTML = "Winner!";
            win = true;
        }
        else{
            if(year == cyear){
                document.getElementById("result1").style.display = "block";
                document.getElementById("result1").style.color = "rgb(31, 160, 31)";
                document.getElementById("result1").innerHTML = "Year is correct!";
            }
            else if(Array.from(year)[1] == Array.from(cyear)[1] && Array.from(year)[2] == Array.from(cyear)[2]){
                document.getElementById("result1").style.display = "block";
                document.getElementById("result1").style.color = "rgb(174, 223, 39)";
                document.getElementById("result1").innerHTML = "Decade is correct";
            }
            else if(Array.from(year)[1] == Array.from(cyear)[1]){
                document.getElementById("result1").style.display = "block";
                document.getElementById("result1").style.color = "rgb(255, 161, 21)";
                document.getElementById("result1").innerHTML = "Century is correct";
            }
            if(director == cdirector){
                document.getElementById("result2").style.display = "block";
                document.getElementById("result2").style.color = "rgb(31, 160, 31)";
                document.getElementById("result2").innerHTML = "Director is correct!";
            }
            if(cgenre.includes(genre)){
                document.getElementById("result3").style.display = "block";
                document.getElementById("result3").style.color = "rgb(31, 160, 31)";
                document.getElementById("result3").innerHTML = "Genre is correct!";
            }
            document.getElementById("attempts").innerHTML = attempts;
        }
        
    }
    else if(win == false){
        document.getElementById("result4").style.display = "block"
        document.getElementById("result4").innerHTML = "You lost"
        document.getElementById("result4").style.color = "rgb(226, 13, 13)";
        document.getElementById("attempts").innerHTML = "0";
    }
    
}