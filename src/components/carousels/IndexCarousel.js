import React from "react";

// reactstrap components
import {
  /*Container,
  Row,
  Col,*/
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("../../assets/img/tourist/tourism_lekkibridge.jpg"),
    altText: "Third Mainland Bridge",
    caption: "Third Mainland Bridge Lagos",
  },
  {
    src: require("../../assets/img/tourist/tourism-2_olumo_rock.jpg"),
    altText: "Olumo Rock",
    caption: "Olumo Rock Abeokuta",
  },
  {
    src: require("../../assets/img/tourist/tourism-6_abujamosque.jpg"),
    altText: "Abuja Mosque",
    caption: "Central Mosque Abuja",
  },
  {
    src: require("../../assets/img/tourist/tourism-3_lonelycreek.jpg"),
    altText: "Lonely Creek",
    caption: "Lonely Creek Jos",
  },
];

function IndexCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
      <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => {
              return (
                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}
                >
                  <img src={item.src} alt={item.altText} style={{height: "inherit", objectFit: "cover"}}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.caption}</h5>
                  </div>
                </CarouselItem>
              )
            })} 
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <i className="now-ui-icons arrows-1_minimal-left"></i>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <i className="now-ui-icons arrows-1_minimal-right"></i>
            </a>
          </Carousel>
  );
}

export default IndexCarousel;
