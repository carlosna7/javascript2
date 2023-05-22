var title = document.querySelector("#title");

title.addEventListener("mouseover", function() {

    this.style.backgroundColor = "Yellow"

});

title.addEventListener("mouseout", function() {

    this.style.backgroundColor = "transparent"

});

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");

})