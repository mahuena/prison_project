function fun(e) {
    var container = document.getElementById('settings');
    var val = e.value;
    settings.setAttribute("style", "filter: brightness("+val+"%);");
}

function w3_open() {
document.getElementById("mySidebar").style.display = "block";
}
function w3_close (){
    document.getElementById("mySidebar").style.display = "none"; 
}
