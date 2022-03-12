let films = '{"films":['+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"die hard","ctitled":"Die Hard","cyear":"1988","cdirector":"john mctiernan","cdirectord":"John McTiernan","cgenre":["action", "thriller"],"cgenred":"Action, thriller"},'+
'{"ctitle":"the dark knight","ctitled":"The Dark Knight","cyear":"2008","cdirector":"christopher nolan","cdirectord":"Christopher Nolan","cgenre":["action", "crime", "drama"],"cgenred":"Action, crime, drama"},'+
'{"ctitle":"back to the future","ctitled":"Back to the Future","cyear":"1985","cdirector":"robert zemeckis","cdirectord":"Robert Zemeckis","cgenre":["adventure", "comedy", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Adventure, comedy, sci-fi"},'+
'{"ctitle":"schindler'+"'"+'s list","ctitled":"Schindler'+"'"+'s list","cyear":"1993","cdirector":"steven spielberg","cdirectord":"Steven Spielberg","cgenre":["biography", "drama", "history"],"cgenred":"Biography, drama, history"},'+
'{"ctitle":"the lord of the rings: the fellowship of the ring","ctitled":"The Lord of the Rings: The Fellowship of the Ring","cyear":"2001","cdirector":"peter jackson","cdirectord":"Peter Jackson","cgenre":["action", "adventure", "drama"],"cgenred":"Action, adventure, drama"},'+
'{"ctitle":"pulp fiction","ctitled":"Pulp Fiction","cyear":"1994","cdirector":"quentin tarantino","cdirectord":"Quentin Tarantino","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"inception","ctitled":"Inception","cyear":"2010","cdirector":"christopher nolan","cdirectord":"Christopher Nolan","cgenre":["action", "adventure", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Action, adventure, sci-fi"},'+
'{"ctitle":"the good, the bad and the ugly","ctitled":"The Good, the Bad and the Ugly","cyear":"1966","cdirector":"sergio leone","cdirectord":"Sergio Leone","cgenre":["adventure", "western"],"cgenred":"Adventure, western"},'+
'{"ctitle":"forrest gump","ctitled":"Forrest Gump","cyear":"1994","cdirector":"robert zemeckis","cdirectord":"Robert Zemeckis","cgenre":["drama", "romance"],"cgenred":"Drama, romance"},'+
'{"ctitle":"the matrix","ctitled":"The Matrix","cyear":"1999","cdirector":"lana wachowski","cdirectord":"Lana Wachowski","cgenre":["action", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Action, sci-fi"},'+
'{"ctitle":"goodfellas","ctitled":"Goodfellas","cyear":"1990","cdirector":"martin scorsese","cdirectord":"Martin Scorsese","cgenre":["biography", "crime", "drama"],"cgenred":"Crime, drama, biography"},'+
'{"ctitle":"saving private ryan","ctitled":"Saving Private Ryan","cyear":"1998","cdirector":"steven spielberg","cdirectord":"Steven Spielberg","cgenre":["war", "drama"],"cgenred":"War, drama"},'+
'{"ctitle":"life is beautiful","ctitled":"Life is beautiful","cyear":"1997","cdirector":"roberto benigni","cdirectord":"Roberto Benigni","cgenre":["comedy", "drama", "romance"],"cgenred":"Comedy, drama, romance"},'+
'{"ctitle":"star wars","ctitled":"Star Wars","cyear":"1977","cdirector":"george lucas","cdirectord":"George Lucas","cgenre":["action", "adventure", "fantasy"],"cgenred":"Action, adventure, fantasy"},'+
'{"ctitle":"interstellar","ctitled":"Interstellar","cyear":"2014","cdirector":"christopher nolan","cdirectord":"Christopher Nolan","cgenre":["adventure", "drama", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Adventure, drama, sci-fi"},'+
'{"ctitle":"alien","ctitled":"Alien","cyear":"1979","cdirector":"ridley scott","cdirectord":"Ridley Scott","cgenre":["horror", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Horror, sci-fi"},'+
'{"ctitle":"apocalypse now","ctitled":"Apocalypse Now","cyear":"1979","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["mystery", "drama", "war"],"cgenred":"War, drama, mystery"},'+
'{"ctitle":"avengers: infinity war","ctitled":"Avengers: Infinity War","cyear":"2018","cdirector":"anthony russo","cdirectord":"Anthony Russo","cgenre":["action", "adventure", "sci-fi", "science fiction", "scifi", "sci fi"],"cgenred":"Action, adventure, sci-fi"},'+
'{"ctitle":"the shining","ctitled":"The Shining","cyear":"1980","cdirector":"stanley kubrick","cdirectord":"Stanley Kubrick","cgenre":["horror", "drama"],"cgenred":"Horror, drama"},'+
'{"ctitle":"joker","ctitled":"Joker","cyear":"2019","cdirector":"todd phillips","cdirectord":"Todd Phillips","cgenre":["crime", "drama", "thriller"],"cgenred":"Crime, drama, thriller"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"},'+
'{"ctitle":"the godfather","ctitled":"The Godfather","cyear":"1972","cdirector":"francis ford coppola","cdirectord":"Francis Ford Coppola","cgenre":["crime", "drama"],"cgenred":"Crime, drama"}]}';
obj = JSON.parse(films);
var ctitle = "";
var ctitled = "";
var cyear = "";
var cdirector = "";
var cdirectord = "";
var cgenre = null;
var cgenred = "";
var attempts = 20;
var win = false;
var yearr = false;
var directorr = false;
var genrer = false;
window.onload = generatefilm();
function random(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
};
function generatefilm(){
    var numfilm = random(0, 20);
    ctitle = obj.films[numfilm].ctitle;
    ctitled = obj.films[numfilm].ctitled;
    cyear = obj.films[numfilm].cyear;
    cdirector = obj.films[numfilm].cdirector;
    cdirectord = obj.films[numfilm].cdirectord;
    cgenre = obj.films[numfilm].cgenre;
    cgenred = obj.films[numfilm].cgenred;
}
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
                document.getElementById("genre").value = cgenred;
                document.getElementById("genre").disabled = true;
                attempts = attempts - 3;
                document.getElementById("attempts").innerHTML = attempts;
                genrer = true;
            }
            document.getElementById("attempts").innerHTML = attempts;
        }
        
    }
    else if(win == false){
        document.getElementById("result1").style.display = "none"
        document.getElementById("result2").style.display = "none"
        document.getElementById("result3").style.display = "none"
        document.getElementById("result4").style.display = "block"
        document.getElementById("result4").innerHTML = "You lost, the movie was "+ctitled
        document.getElementById("result4").style.color = "rgb(226, 13, 13)";
        document.getElementById("attempts").innerHTML = "0";
    }
    
}
function revealyear(){
    if(attempts > 3 && yearr == false){
        document.getElementById("year").value = cyear;
        document.getElementById("year").disabled = true;
        attempts = attempts - 3;
        document.getElementById("attempts").innerHTML = attempts;
        yearr = true;             
    }
}
function revealdirector(){
    if(attempts > 3 && directorr == false){
        document.getElementById("director").value = cdirectord;
        document.getElementById("director").disabled = true;
        attempts = attempts - 3;
        document.getElementById("attempts").innerHTML = attempts;
        directorr = true;      
    }
}
function revealgenre(){
    if(attempts > 3 && genrer == false){
        document.getElementById("genre").value = cgenred;
        document.getElementById("genre").disabled = true;
        attempts = attempts - 3;
        document.getElementById("attempts").innerHTML = attempts;
        genrer = true;          
    }
}