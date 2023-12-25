const boxes = document.querySelectorAll('.mother-box');
window.addEventListener('scroll', scrollcheck);
scrollcheck();
function scrollcheck(){
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            box.classList.add("animate__fadeInUp");
        }
    })
}