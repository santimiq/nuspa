import React from "react"
import Layout from '../components/layout/layout'
import Slider from '../components/elements/slider'
import { Row, Col } from 'reactstrap'
import styles from './index.module.scss'
import Button from '../components/elements/button'
import Formulario from '../components/elements/form'
import SliderResponsive from '../components/elements/sliderResponsive'
import PreviewServicios from '../components/elements/previewServicios'
import { Link } from "gatsby"
import FadeInSection from '../components/elements/fadeInSection'
import { Modal, ModalBody } from 'reactstrap'
import StylesModal from '../styles/modal.scss'

const itemsHome = [
    {
        id: 1,
        altText: 'Slide 1',
        src: '/images/slider/home/1.jpg'
    },
    {
        id: 2,
        altText: 'Slide 2',
        src: '/images/slider/home/2.jpg'
    },
    {
        id: 3,
        altText: 'Slide 3',
        src: '/images/slider/home/3.jpg'
    },
    {
        id: 4,
        altText: 'Slide 4',
        src: '/images/slider/home/4.jpg'
    }
];

const sliderResponsiveObject = [
    {
        to: '/servicios/corporales',
        img: '/images/home/servicio-1.jpg',
        text: 'Tratamientos corporales'
    },
    {
        to: '/servicios/faciales',
        img: '/images/home/servicio-2.jpg',
        text: 'Tratamientos faciales'
    },
    {
        to: '/servicios/masajes',
        img: '/images/home/servicio-3.jpg',
        text: 'Masajes'
    },
    {
        to: '/servicios/depilacion/depilacion',
        img: '/images/home/servicio-4.jpg',
        text: 'Depilación'
    },
    {
        to: '/servicios/nutricion/nutricion',
        img: '/images/home/servicio-5.jpg',
        text: 'Nutrición'
    }
]

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openModal: false };
    }
    toggle = () => {
        this.setState({openModal: !this.state.openModal})
    };
    componentDidMount(){
        this.setState({openModal: true})
    }
    render(){
        return(
            <Layout active="INICIO">
                <Modal isOpen={this.state.openModal} cssModule={StylesModal} toggle={this.toggle} >
                    <div className="text-right py-3 px-4">
                        <img src="/images/icons/x.svg" className={styles.hoverCursor + ' lazyload'} alt="close icon" onClick={this.toggle}/>
                    </div>
                    <ModalBody className="px-3 my-3">
                        <img src="/images/popup/enero.jpg" className={' lazyload image-fluid w-100'} alt="POPUP ENERO" />
                    </ModalBody>
                </Modal>
                <div className="mx-2 px-0 mx-md-5 px-md-5 mx-auto d-none d-md-block" >
                    <Slider autoplay={'hover'} items={itemsHome}/>
                </div>
                <FadeInSection>
                    <div className={styles.bannerResponsive + ' d-md-none position-relative mb-5'}>
                        <img className="img-fluid w-100 lazyload" src="/images/home/mobile.jpg" alt="Home Nuspa"/>
                        <div className={styles.textBannerResponsive + " position-absolute"}>
                            <p>
                                AMA TU <b>CUERPO,</b><br />
                                SIÉNTETE <b>SEGURA.</b>
                            </p>
                        </div>
                        <div className={styles.exploraResponsive + " position-absolute"}>
                            <p>
                                EXPLORAR
                            </p>
                            <Link to="/#nosotros">
                                <img className=" lazyload" src="/images/icons/flecha.svg" alt="arrow" />
                            </Link>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div id="nosotros" className={styles.nosotrosContainer + " mx-auto mt-0 mt-md-5 py-0 py-md-5"}>
                        <Row className="mx-0">
                            <Col md="6" className="p-0 overflow-hidden">
                                <img src="/images/home/nosotros.jpg" className="img-fluid w-100 lazyload" alt="home" />
                            </Col>
                            <Col md="6" className={styles.card + " d-flex align-items-center p-0"}>
                                <div className="text-center w-100 px-0 py-4 py-md-0 px-md-4">
                                    <img src="/images/logos/iso.svg" className="pb-5 lazyload" alt="isotipo" />
                                    <div className={styles.nosotrosTextContaniner + " text-center text-lg-left px-lg-3"}>
                                        <h1 className={styles.textTitle + " font-weight-bold mb-4 mb-md-3 "}>
                                            NOSOTROS
                                        </h1>
                                        <span className={styles.textGeneral + ' '}>
                                            Tú puedes tener el cuerpo que siempre has deseado. Con el equipo experto de Nü SPA Clínico podrás lograrlo.
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className={styles.bgBlue + ' py-5 px-3 px-md-5 my-4'}>
                        <h1 className={styles.textTitleWhite + ' text-center'}>
                            SERVICIOS
                        </h1>
                        <p className={styles.textGeneralWhite + ' text-center'}>
                            Te ofrecemos los mejores tratamientos<br />personalizados.
                        </p>
                        <div className="my-5 d-flex justify-content-center">
                            <Button text="VER TODOS" url="servicios" color="white"/>
                        </div>
                        <div className="d-lg-flex d-none justify-content-center">
                            <PreviewServicios to="/servicios/corporales" state={{tratamiento: ['Depilacion'], servicio: 0}} img="/images/home/servicio-1.jpg" text="Tratamientos corporales"/>
                            <PreviewServicios to="/servicios/faciales" state={{tratamiento: ['Depilacion'], servicio: 0}} img="/images/home/servicio-2.jpg" text="Tratamientos faciales" />
                            <PreviewServicios to="/servicios/masajes" state={{tratamiento: ['Depilacion'], servicio: 0}} img="/images/home/servicio-3.jpg" text="Masajes" />
                            <PreviewServicios to="servicios/depilacion/depilacion" state={{tratamiento: ['Depilacion'], servicio: 0}} img="/images/home/servicio-4.jpg" text="Depilación" />
                            <PreviewServicios to="servicios/nutricion/nutricion " state={{tratamiento: ['Nutricion'], servicio: 0}} img="/images/home/servicio-5.jpg" text="Nutrición" />
                        </div>
                        <div className="d-lg-none">
                            <SliderResponsive autoplay={false} items={sliderResponsiveObject} />
                        </div>

                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="my-5 py-5 position-relative d-flex justify-content-center">
                        <div className={styles.containerPaquetes + " position-relative text-center pb-5 mb-5"}>
                            <img src="/images/home/paquetes.jpg" alt="paquetes" className={" img-fluid lazyload"}/>
                            <div className={styles.cardOverlay}>
                                <div className="text-center w-100 py-3 px-4 px-md-4">
                                    <div className="text-left p-md-4">
                                        <h2 className={styles.textSubtitle+ " text-center text-lg-left"}>
                                            PAQUETES
                                        </h2>
                                        <p className={styles.textGeneral + " mb-2 text-center text-lg-left"}>
                                            Nuestros servicios a tu medida.
                                        </p>
                                        <div className="pt-md-5 pb-md-0 pt-3 pb-3 ">
                                            <div className="text-center text-md-left">
                                                <Button text="VER TODOS" url="paquetes" color="green"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={styles.isotipoAbsoluto + ' position-absolute d-lg-block d-none lazyload'} src="/images/logos/iso.svg" alt="isotipo" />
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className={styles.bgBlue + ' pt-5 pb-3 pt-md-5 pb-md-5 px-3 px-lg-5 my-5'}>
                        <Row className="my-5 mx-0 mx-lg-5 px-0 px-lg-5">
                            <Col md="6" className={styles.card + " d-flex align-items-end p-0 bg-white"}>
                                <div className="text-center w-100 px-2 px-md-5 mx-3">
                                    <div className="text-left">
                                        <h2 className={styles.textSubtitle + " text-center text-lg-left py-3 py-lg-0"}>
                                            APARATOLOGÍA
                                        </h2>
                                        <p className={styles.textGeneral + " text-center text-lg-left py-0 py-lg-3 py-xl-5"}>
                                            Contamos con los mejores aparatos para la realización de nuestros tratamientos, en manos de un equipo capacitado.
                                        </p>
                                        <div className="pt-3 pb-5 py-lg-3 py-xl-5 mt-0 mt-xl-3 mt-xl-5 text-center text-lg-left">
                                            <Button text="VER TODOS" url="aparatologia" color="green"/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="p-0">
                                <img src="/images/home/aparatologia.jpg" alt="home" className="w-100 lazyload"/>
                            </Col>
                        </Row>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className={'py-5 px-lg-5 px-0 my-0 my-md-5'}>
                        <h1 className={styles.textTitle + ' text-center' }>
                            CONTACTO
                        </h1>
                        <Row className="my-0 my-md-5 mx-0 mx-lg-5 px-0">
                            <Col md="6" className={"p-0 px-lg-2 px-xl-4 d-flex align-items-center"}>
                                <iframe className="border-0" title="Maps" src="https://snazzymaps.com/embed/198326" width="100%" height="480px" ></iframe>
                            </Col>
                            <Col md="6" id="formulario" className="p-0">
                                <Formulario />
                            </Col>
                        </Row>
                    </div>
                </FadeInSection>
            </Layout>
        )
    }
}

export default Index