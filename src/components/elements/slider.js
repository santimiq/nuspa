import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import SliderStyles from './slider.scss'
import styles from './slider.module.scss'
import { navigate } from 'gatsby'

const Slider = (props) => {
    const initialIndex = props.initialIndex ? props.initialIndex : 0;
    const [activeIndex, setActiveIndex] = useState(initialIndex,0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(props.onChange){
            if(props.items.length === props.actual.position){
                navigate('servicios/'+props.items[0].slug, { replace: true });
            }
            else{
                navigate('servicios/'+props.items[props.actual.position].slug, { replace: true });
            }
        }
        if (animating) return;
        const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if(props.onChange){
            if(props.actual.position === 1){
                navigate('servicios/'+props.items[props.items.length - 1 ].slug, { replace: true });
            }
            else{
                navigate('servicios/'+props.items[props.actual.position - 2 ].slug, { replace: true });
            }
        }
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = (newIndex) => {
        if (animating) return;
        if(props.onChange){
            navigate('servicios/'+props.items[newIndex].slug, { replace: true });
        }
        setActiveIndex(newIndex);
    }

    const slides = props.items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}>
                <div className={styles.fadeIn+" px-md-5 w-100 position-relative"}>
                    <img src={item.src} className={styles.sliderImg +" img-fluid w-100 lazyload"} alt={item.altText} />
                    {
                        item.slug && 
                        <div className={styles.textSlider + " position-absolute"}>
                            <div className="d-flex align-items-center">
                                <h2 className="font-weight-light mb-0">
                                    TRATAMIENTOS
                                </h2>
                                <div className={styles.line +" mx-3 d-none d-lg-block"}></div>
                            </div>
                            <h1 className="text-uppercase font-weight-bold mb-0">
                                <b>
                                    {item.slug}
                                </b>
                            </h1>
                        </div>
                    }
                </div>
            </CarouselItem>
        );
    });
    
    return (
        <Carousel
            touch={true}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            pause={props.autoplay}
            >
            <CarouselIndicators items={props.items} activeIndex={activeIndex} cssModule={SliderStyles} onClickHandler={goToIndex} />
                {slides}
            <CarouselControl direction="prev" directionText="" cssModule={SliderStyles} onClickHandler={previous} />
            <CarouselControl direction="next" directionText="" cssModule={SliderStyles} onClickHandler={next} />
        </Carousel>
    );
}

export default Slider;
