document.addEventListener("click", function() {
    console.log("document was clicked!");
});

document.documentElement.addEventListener("click", function() {
    console.log("documentElement was clicked!");

});

document.body.addEventListener("click", function() {
    console.log("body was s´clicked!");
});

let BlueDiv = document.getElementsByClassName("blue")[0];
let RedDiv = document.getElementsByClassName("red")[0];
let spicedLink = document.getElementsByClassName("spicedLink")[0];


RedDiv.addEventListener("click", function(event) {
    console.log(event);
    event.stopPropagation();
    //stopPropagation we don't see the output in the blue div
    // just for the red div, blocking other elements in the tree
    //redClicks++;
    //RedDiv.innerHTML = "Count" + redClicks;
    console.log(this.innerHTML);

});

RedDiv.addEventListener("mousemove", function(e) {
    console.log("mouse moved");
    e.currentTarget.innerHTML = "x: " + e.offsetX + "y: "

});
RedDiv.addEventListener("click", )


BlueDiv.addEventListener("click", function (){
    console.log("click on blue div");
    e.target.style.border = "5px solid red"
    // difference between target.style and currentTarget.style
    e.currentTarget.style.border = "5p solid blue"
});

spicedLink.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("spiced link clicked");
});