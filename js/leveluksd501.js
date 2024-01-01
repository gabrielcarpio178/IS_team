document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelector('.features');
    const myLinks = document.querySelector('.myLinks');

    features.addEventListener('click', function (event) {
        event.stopPropagation();
        myLinks.style.display = myLinks.style.display === 'none' ? 'block' : 'none';
        myLinks.style.opacity = myLinks.style.opacity === '0' ? '1' : '0';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelector('.feature');
    const myLink = document.querySelector('.myLink');

    features.addEventListener('click', function (event) {
        event.stopPropagation();
        myLink.style.display = myLink.style.display === 'none' ? 'block' : 'none';
        myLink.style.opacity = myLink.style.opacity     === '0' ? '1' : '0';
    });
});

function changeImage(clickedImage) {
    var newSrc = $(clickedImage).attr('src');

    $('.leveltwo').attr('src', newSrc);
}

var powerModal = document.getElementById("myPower");
var panelModal = document.getElementById("myPanel");
var plateModal = document.getElementById("myPlate");
var languageModal = document.getElementById("myLanguage");
var signinModal = document.getElementById("sign_in");

var powerBtn = document.getElementById("power");
var panelBtn = document.getElementById("panel");
var plateBtn = document.getElementById("plate");
var languageBtn = document.getElementById("language");
var signinBtn = document.getElementById("btn_sign");

var powerClose = document.getElementsByClassName("close-power")[0];
var panelClose = document.getElementsByClassName("close-panel")[0];
var plateClose = document.getElementsByClassName("close-plate")[0];
var languageClose = document.getElementsByClassName("close-language")[0];
var btn_signClose = document.getElementsByClassName("close-signin")[0];

powerBtn.onclick = function() {
    powerModal.style.display = "block";
}
panelBtn.onclick = function() {
    panelModal.style.display = "block";
}
plateBtn.onclick = function() {
    plateModal.style.display = "block";
}
languageBtn.onclick = function() {
    languageModal.style.display = "block";
}
signinBtn.onclick = function() {
    signinModal.style.display = "block";
}

powerClose.onclick = function() {
    powerModal.style.display = "none";
}
panelClose.onclick = function() {
    panelModal.style.display = "none";
}
plateClose.onclick = function() {
    plateModal.style.display = "none";
}
languageClose.onclick = function() {
    languageModal.style.display = "none";
}
btn_signClose.onclick = function() {
    signinModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == powerModal) {
        powerModal.style.display = "none";
    }
    if (event.target == panelModal) {
        panelModal.style.display = "none";
    }
    if (event.target == plateModal) {
        plateModal.style.display = "none";
    }
    if (event.target == languageModal) {
        languageModal.style.display = "none";
    }
    if (event.target == signinModal) {
        signinModal .style.display = "none";
    }
}
