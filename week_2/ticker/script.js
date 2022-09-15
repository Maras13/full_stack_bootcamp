(function () {
    var headlines = document.getElementById("headlines"); // elem itself
    var left = headlines.offsetLeft; // starting left position of elem
    var links = document.getElementsByTagName("a");
    // console.log("headlines: ", headlines);
    // console.log("left position of headlines: ", left);
    // console.log("links: ", links);

    function moveHeadlines() {
        left--;
        // you can also make it go by temporarily faster by doing: left -= 2;

        // this will run when our 1st link is completely offscreen to the left
        if (left <= -links[0].offsetWidth) {
            console.log("first link is offscreen!");
            // There are 2 things you need to do in here!
            // 1. remove the 1st link and make it the last (add it to the end with appendChild)
            // 2. avoid jumpiness behaviour - make sure that you account for the sapce you're about to remove by adding the width of the link you're removing as the new value of left
            // this will make sure that the 2nd link doesn't jump to occupy the empty space
        }

        console.log("left value after decrementing:", left);
        // #1! TODO - get the links moving with CSS.
        requestAnimationFrame(moveHeadlines); // this keeps the process going
    }

    moveHeadlines(); // this starts off the process!
})();

for (var i = 0; i < links.length; i++){
    console.log(links[i]);

    links[e].addEventlistener("mouseenter", function (e){
        console.log("e: ", e);
        // TODO:
        // 1. Stop the ticker
        // 2.  Update the style of the link we just mousecentered
    });

    links[i].addEventlistener("mouseleave", function (e) {
        console.log("left tis element", e.target)
        //TODO:
        //1. Restart the ticker
        //2. Zpdate the style of the link we just mouse left
    });
};