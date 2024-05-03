import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../utils/products';

const Banner = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={true}
            slidesToSlide={1}
            customTransition="all .1"
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map((image) => (
                <Image src={'//www.maharajarice.com/wp-content/uploads/2022/07/banner2.jpg'} alt={image.alt} key={image._id} />
            ))}
            {bannerData.map((image) => (
                <Image src={'//www.maharajarice.com/wp-content/uploads/2022/07/banner4.jpg'} alt={image.alt} key={image._id} />
            ))}
             {bannerData.map((image) => (
                <Image src={'//maharajarice.com/wp-content/uploads/2021/10/banner2-1.jpg'} alt={image.alt} key={image._id} />
            ))}
             {bannerData.map((image) => (
                <Image src={'//www.maharajarice.com/wp-content/uploads/2022/07/banner1.jpg'} alt={image.alt} key={image._id} />
            ))}
        </Carousel>
    );
}

export default Banner;


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 550,
    [theme.breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: 180,
    },
}));
