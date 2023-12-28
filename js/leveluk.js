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
// document.addEventListener('DOMContentLoaded', function () {
//     const features1 = document.querySelector('.features');
//     const myLinks1 = document.querySelector('.myLinks');

//     const features2 = document.querySelector('.feature');
//     const myLink2 = document.querySelector('.myLink');

//     myLinks1.style.display = 'block';
//     myLinks1.style.opacity = '1';

//     features1.addEventListener('click', function (event) {
//         event.stopPropagation();
//         myLinks1.style.display = myLinks1.style.display === 'none' ? 'block' : 'none';
//         myLinks1.style.opacity = myLinks1.style.opacity === '0' ? '1' : '0';
//     });

//     features2.addEventListener('click', function (event) {
//         event.stopPropagation();
//         myLink2.style.display = myLink2.style.display === 'none' ? 'block' : 'none';
//         myLink2.style.opacity = myLink2.style.opacity === '0' ? '1' : '0';
//     });
// });

function changeImage(clickedImage) {
    var newSrc = $(clickedImage).attr('src');

    $('.leveltwo').attr('src', newSrc);
}

var powerModal = document.getElementById("myPower");
var panelModal = document.getElementById("myPanel");
var plateModal = document.getElementById("myPlate");
var languageModal = document.getElementById("myLanguage");

var powerBtn = document.getElementById("power");
var panelBtn = document.getElementById("panel");
var plateBtn = document.getElementById("plate");
var languageBtn = document.getElementById("language");

var powerClose = document.getElementsByClassName("close-power")[0];
var panelClose = document.getElementsByClassName("close-panel")[0];
var plateClose = document.getElementsByClassName("close-plate")[0];
var languageClose = document.getElementsByClassName("close-language")[0];

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
}