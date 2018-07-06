function changeImage() {

    var image = document.getElementById('imgOpcion');

    if (image.src.match("img")) {

        image.src = "pictures/result_check.PNG";

    } else {

        image.src = "pictures/img_open.PNG";

    }

}