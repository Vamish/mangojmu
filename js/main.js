var screenWidth = document.body.clientWidth;
var funContWidth = screenWidth / 3 - 29;
var insFunCont = document.getElementsByClassName("function-content");
for (var i = 0; i < insFunCont.length; i++) {
    insFunCont[i].style.width = funContWidth + 'px';
}
