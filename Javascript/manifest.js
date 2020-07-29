var targetkill = 65; //targetnumber

$("#kill-limit").text(targetkill);

var counter = 0;

// creating four options with the array that will lead to the score

var numberscoreOption = [
    10, 5, 3, 7
];

// making a for-loop that will make images for every "numberscoreOption"

for (var i = 0; i < numberscoreOption.length; i++) {

    // for every image a div will be made

    var GOWimage = $("<img>");

    // each image will be give a class "game-image"

    GOWimage.addClass("game-image");

    // src link to the image 

    GOWimage.attr("src", "https://media.giphy.com/media/uYe2emzPgDfj2/giphy.gif");

    // giving each image a data attribute called "image-data"
    // the "image-data" will be set to equal the array value

    GOWimage.attr("image-data", numberscoreOption[i]);

    // adding each image data attributes and classes to the page

    $(".GOW").append(GOWimage);
}

// ==============================

// click event applies to every image on the page

$(".game-image").on("click", function () {
    // Using the $(this) keyword specifies that we should be extracting the image value of each click.
    // Using the .attr("image-data") allows us to grab the value out of the "image-data" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var imageValue = ($(this).attr("image-data"));
    imageValue = parseInt(imageValue);

    // adding "image-value" to the global counter

    counter += imageValue;

    // win-lose logic 

    alert("new score:" + counter);

    if (counter === targetkill) {
        alert("you win");
    } else if (counter >= targetkill) {
        alert("you lose");
    }
});
