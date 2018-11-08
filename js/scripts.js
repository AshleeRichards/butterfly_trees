/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const gallery = baguetteBox.run('.tz-gallery');
baguetteBox.show(index, lightbox[0]);

function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
