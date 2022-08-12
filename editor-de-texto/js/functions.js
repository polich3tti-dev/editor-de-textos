function bold(){
    document.getElementById("text").style.fontWeight = "bold";

}

function italic(){
    document.getElementById("text").style.fontStyle = "italic";

}

function left(){
    document.getElementById("text").style.textAlign = "left";

}

function center(){
    document.getElementById("text").style.textAlign = "center";

}

function right(){
    document.getElementById("text").style.textAlign = "right";

}

function uppercase(){
    document.getElementById("text").style.textTransform = "uppercase";

}

function lowercase(){
    document.getElementById("text").style.textTransform = "lowercase";

}

function capitalize(){
    document.getElementById("text").style.textTransform = "capitalize";

}

function clearText(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.fontStyle = "normal";
    document.getElementById("text").style.textAlign = "left";
    document.getElementById("text").style.textTransform = "none";
    document.getElementById("text").value="";
}