import Carousel from "react-multi-carousel"

interface GigCarouselProps {
    imgs: string[]
}

const GigCarousel = ({ imgs }: GigCarouselProps) => {
    console.log(imgs)
    const backendUrl = 'http://localhost:3000/';
    console.log(backendUrl+ imgs[0])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1080 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}

        >
            {imgs.map((img, index) => (
                <div className="relative" key={index}>
                    <img src={`${backendUrl}${img}`} alt="" className="w-[1300px] h-[600px] " />
                </div>

            ))}
        </Carousel>
    )
}

export default GigCarousel