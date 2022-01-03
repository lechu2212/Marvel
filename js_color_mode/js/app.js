const prevIcon = `<i class='bx bx-left-arrow-alt'></i>`;
const nextIcon = `<i class='bx bx-right-arrow-alt'></i>`;
$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        nav:true,
        navText : [
            prevIcon,
            nextIcon
        ]
    })
})


