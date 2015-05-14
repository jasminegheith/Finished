window.onload = function () {
    //get url

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    var navLIs = document.getSelection("nav ul li");
    for (var i = 0; i < navLIs.length; i++) {
        navLIs[i].setAttribute("class", "");

    }

    if (filename == "Index.cshtml")
        document.getElementById("main").setAttribute("class", "active");
    else if (filename == "Tweens.cshtml")
        document.getElementById("tween").setAttribute("class", "active");
    else if (filename == "Teen.cshtml")
        document.getElementById("teen").setAttribute("class", "active");
   

    else document.getElementById("main").setAttribute("class", "active");

};


var a = [
"animated", "blushing", "fuzzy", "barking", "cloudy", "dopy", "enormous", "flawless", "flickering",
"helpful", "infamous", "nervous", "optimistic", "powerful", "pushy", "smoggy", "scholarly",
"tremendous", "uncommon", "waterlogged", "smelly", "red", "yellow", "blue", "green", "orange", "funny", "smart",
"slimy", "angry", "upsetting", "startdazed", "hopeless", "honest", "computing"];

var b = ["bean", "chicken", "bear", "pear", "bubble", "pet", "kitten", "frog", "apple", "knight",
"basket", "cat", "dog", "mouse", "snail", "tiger", "lion", "cheese", "potatoe", "bufflo", "car", "gym", "face",
"closet", "room", "internet", "pool", "computer", "liger", "panda", "kite", "spaceship", "television"];

var rA = Math.floor(Math.random() * a.length);
var rB = Math.floor(Math.random() * b.length);
var name = a[rA] + b[rB];
