var currentImageIndex = 0;

        function changeImage(imageSrc, description, index) {
            var selectedImage = document.getElementById('selected-image');
            var imageDescription = document.getElementById('image-description');
            var circles = document.getElementsByClassName('carousel-circle');

            selectedImage.src = imageSrc;
            imageDescription.textContent = description;

            for (var i = 0; i < circles.length; i++) {
                circles[i].classList.remove('active');
            }

            circles[index].classList.add('active');
            currentImageIndex = index;
        }

        var carouselIndicator = document.getElementById('circle-indicator');
        for (var i = 0; i < 5; i++) {
            var circle = document.createElement('div');
            circle.className = 'carousel-circle';
            circle.setAttribute('onclick', 'changeImageByIndex(' + i + ')');
            carouselIndicator.appendChild(circle);
        }

        function changeImageByIndex(index) {
            var images = document.getElementsByClassName('offers-image');
            var imageSrc = images[index].src;
            var description = images[index].getAttribute('alt');

            changeImage(imageSrc, description, index);
        }

        var initialImageSrc = 'image/SoFi_logo 1.png';
        var initialDescription = 'SoFi, short for Social Finance Inc., The founders hoped SoFi could provide more affordable options for those taking on debt to fund their education.';
        changeImage(initialImageSrc, initialDescription, 0);
