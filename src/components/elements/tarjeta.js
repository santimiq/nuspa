import React from 'react';
import { Row, Col } from 'reactstrap'
import styles from './tarjeta.module.scss'
import Button from '../../components/elements/button'
import FadeInSection from '../elements/fadeInSection'
const Tarjeta = (props) => {
    switch(props.tipo){
        case 'full':
            return (
                <FadeInSection className="h-100 w-100">
                    <div className="position-relative h-100">
                        <img src={props.image} alt={props.title} className="w-100 h-100 img-fluid lazyload"/>
                        <div className={styles.absoluteText + ' position-absolute w-75'}>
                            <h1 className={styles.textTitle}>
                                {props.title}
                            </h1>
                            <span className={styles.textGeneral + " pb-4"}>
                                {props.text}
                            </span>
                            <div className="pt-4">
                                <Button className="mt-3" state={props.buttonState} text={props.buttonText} url={props.buttonUrl} color={props.buttonColor}/>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            );
        case 'top':
            return (
                <FadeInSection className="h-100 w-100">
                    <Row className={styles.card + ' h-100 m-0'}>
                        <Col md="12" className="p-0 overflow-hidden">
                            <img src={props.image} alt={props.title} className="w-100 h-100 img-fluid lazyload" />
                        </Col>
                        <Col md="12" className={"py-4 d-flex align-items-center"}>
                            <div className="text-center w-100">
                                <div className="text-left">
                                    <h1 className={styles.textTitle + " font-weight-bold mb-0"}>
                                        {props.title}
                                    </h1>
                                    <span className={styles.textGeneral + " pb-4"}>
                                        {props.text}
                                    </span>
                                    <div className="pt-4">
                                        <Button className="mt-3" state={props.buttonState} text={props.buttonText} url={props.buttonUrl} color={props.buttonColor}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </FadeInSection>
            );
        case 'right':
            return (
                <FadeInSection className="h-100 w-100">
                    <Row className={styles.card + ' ' + styles.rightCard + ' m-0'}>
                        <Col md="6" className={styles.card + " py-4 d-flex align-items-center"}>
                            <div className="text-center w-100">
                                <div className="text-left">
                                    <h1 className={styles.textTitle + " font-weight-bold mb-0"}>
                                        {props.title}
                                    </h1>
                                    <span className={styles.textGeneral + " pb-4"}>
                                        {props.text}
                                    </span>
                                    <div className="pt-4">
                                        <Button className="mt-3" state={props.buttonState} text={props.buttonText} url={props.buttonUrl} color={props.buttonColor}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="p-0 overflow-hidden">
                            <img src={props.image} alt={props.title} className="w-100 img-fluid lazyload" />
                        </Col>
                    </Row>
                </FadeInSection>
            );
        case 'left':
            return (
                <FadeInSection className="h-100 w-100">
                    <Row className={styles.card + ' m-0 left-card'}>
                        <Col md="6" className="p-0 overflow-hidden">
                            <img src={props.image} className="w-100 img-fluid lazyload" alt={props.title} />
                        </Col>
                        <Col md="6" className={styles.card + " py-4 d-flex align-items-center"}>
                            <div className="text-center w-100">
                                <div className="text-left">
                                    <h1 className={styles.textTitle + " font-weight-bold mb-0"}>
                                        {props.title}
                                    </h1>
                                    <span className={styles.textGeneral + " pb-4"}>
                                        {props.text}
                                    </span>
                                    <div className="pt-4">
                                        <Button className="mt-3" state={props.buttonState} text={props.buttonText} url={props.buttonUrl} color={props.buttonColor}/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </FadeInSection>
            );
        default:
            return (
                <FadeInSection>
                    <div className="position-relative">
                        <img src={props.image} alt={props.title} className="img-fluid w-100 lazyload"/>
                        <div className={styles.textImage + ' position-absolute p-0 d-flex'}>
                            <div>
                                <p className={"py-2 px-4 m-0"}>
                                    {props.title}
                                    <br />
                                    {props.text}
                                </p>
                                {
                                    props.hideLine ? ''
                                    :<div className={styles.greenLine}></div>
                                }
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            );
    }
}

export default Tarjeta;