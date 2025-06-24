import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from './prevArrow';
import NextArrow from './nextArrow';

const ImageSlider = ({ items = [], emptyMessage = "Нет данных" }) => {
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        infinite: items.length > 3,
        speed: 500,
        slidesToScroll: 1,
        arrows: items.length > 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    if (items.length === 0) {
        return <div className="empty-slider-message">{emptyMessage}</div>;
    }

    return (
        <Slider className='FinSlider' {...settings}>
            {items.map((elem) => (
                <div className='elem'>
                    <img src={elem.image}></img>
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;