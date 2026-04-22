// 프로젝트명56
let navigation = ['포켓레슨', '보쉬', '포트원']

const projectSlider = new Swiper('.project-slider', {
    // loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
    pagination: {
        el: 'header',
        clickable: true,
        bulletClass:'menu',
        bulletActiveClass: 'on',
        renderBullet: function (index, className) {
            return '<button class="' + className + '">' + navigation[index] + '</button>';
        },
    },
    // autoplay: {
    //     delay: 3000
    // }
});