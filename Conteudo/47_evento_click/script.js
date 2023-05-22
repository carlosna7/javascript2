var btn = document.getElementById("btn")

console.log(btn);

btn.addEventListener("click", function() {

    console.log("Clicou");

    console.log(this);

    this.style.backgroundColor = "red"

});

var title = document.querySelector("#title")

title.addEventListener("click", function () {

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";

});

// doubleClick

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function () {

    console.log("Click dplo")

});
