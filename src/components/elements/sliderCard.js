import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, Row, Col} from 'reactstrap';
import { navigate } from 'gatsby'
import descripcion from './serviciosDescription.json'
import styles from './sliderCard.module.scss'
import ReactHtmlParser from 'react-html-parser';
import FadeInSection from '../elements/fadeInSection'

const SliderCard = (props) => {
    const initialIndex = props.initialIndex ? props.initialIndex : 0;
    const [activeIndex, setActiveIndex] = useState(initialIndex,0);
    const [animating, setAnimating] = useState(false);

    const info = descripcion[props.actual.tratamiento][props.actual.slug];
    const parrafosInicio = info["parrafos-inicio"];
    const listado = info["listado"];
    const preguntasRespuestas = info["preguntas-respuestas"];
    const parrafosFinal = info["parrafos-final"];
    const next = () => {
        if(props.items.length === props.actual.position){
            navigate('servicios/'+props.items[0].tratamiento+'/'+props.items[0].slug,{ replace: true });
        }
        else{
            navigate('servicios/'+props.items[props.actual.position].tratamiento+'/'+props.items[props.actual.position].slug,{ replace: true });
        }
        if (animating) return;
        const nextIndex = activeIndex === props.items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if(props.onChange){
            if(props.actual.position === 1){
                navigate('servicios/'+props.items[props.items.length - 1 ].tratamiento+'/'+props.items[props.items.length - 1 ].slug,{ replace: true });
            }
            else{
                navigate('servicios/'+props.items[props.actual.position - 2 ].tratamiento+'/'+props.items[props.actual.position - 2 ].slug,{ replace: true });
            }
        }
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = (newIndex) => {
        if (animating) return;
        navigate('servicios/'+props.items[newIndex].tratamiento+'/'+props.items[newIndex].slug,{ replace: true });
        setActiveIndex(newIndex);
    }

    const slides = props.items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}>
                <div className="px-md-5 w-100 position-relative">
                    <Row className="mx-0">
                        <Col md="5" className="px-4 d-flex align-items-center">
                            <img src={item.src} className={styles.fadeIn+" img-fluid w-100 lazyload"} alt={item.altText} />
                        </Col>
                        <Col md="7" className="text-item px-xl-5 px-md-2 px-5">
                            <FadeInSection>
                                <div className={styles.nombre}>
                                    <h1 className=" text-align-center text-align-md-left">
                                        {item.name}
                                    </h1>
                                </div>
                                <div className={styles.parrafosInicio}>
                                    {
                                        parrafosInicio.map((parrafo) => {
                                            return (
                                                <p className=" text-align-center text-align-md-left" key={parrafo}>
                                                    { ReactHtmlParser (parrafo)}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.listado}>
                                    <ul>
                                        {
                                            listado.map((list) => {
                                                return (
                                                    <li key={list}>
                                                        { ReactHtmlParser (list)}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={styles.preguntas}>
                                    <ol>
                                        {
                                            preguntasRespuestas.map((preguntas) => {
                                                return (
                                                    <li key={preguntas.pregunta}>
                                                        { ReactHtmlParser (preguntas.pregunta) }
                                                        <br />
                                                        <p className={styles.respuesta+" pr-0 pr-md-5 respuesta"}>
                                                            { ReactHtmlParser (preguntas.respuesta) }
                                                        </p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>
                                <div className={styles.parrafosFinal}>
                                    {
                                        parrafosFinal.map((parrafo) => {
                                            return (
                                                <p key={parrafo}>
                                                    { ReactHtmlParser (parrafo) }
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </FadeInSection>
                        </Col>
                    </Row>
                </div>
            </CarouselItem>
        );
    });


    return (
        <div className="sliderCardContainer">
            <Carousel
                touch={true}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                pause={props.autoplay}
                >
                {
                    props.items.length > 1 &&
                    <CarouselIndicators items={props.items} activeIndex={activeIndex}  onClickHandler={goToIndex} />
                }
                {slides}
                {
                    props.items.length > 1 &&
                    <CarouselControl direction="prev" directionText="" onClickHandler={previous} />
                }
                {
                    props.items.length > 1 &&
                    <CarouselControl direction="next" directionText="" onClickHandler={next} />
                }
            </Carousel>
        </div>
    );
}

export default SliderCard;
