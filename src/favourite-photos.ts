import { tns } from 'tiny-slider/src/tiny-slider';

const slider = tns({
    container: '.favourite-photos',
    items: 4,
    slideBy: 1,
    autoplay: false,
    nav: false,
    autoWidth: true,
    gutter: 10,
});