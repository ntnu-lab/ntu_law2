function searchvaluefun() {
    var Input = document.getElementById("search-val").value;
    console.log(Input)
    url = "https://cse.google.com/cse?cx=011987122760880416627%3Azsghqazzvk4&q=" + Input
    window.open(url, '_blank').focus();
}

function readmorefun(div) {
    var x = document.getElementById(div);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};



var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0,
        time = 2000;
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
};

function function5() {
    function showDiv() {
        document.getElementById("navbarCollapse").style.display = "inline-block";
    }
}