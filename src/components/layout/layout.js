import React, { useState } from 'react'
import styles from './layout.module.scss'
import Header from './header/header'
import Footer from './footer/footer'
import { Link } from "gatsby"
import { Modal, ModalBody } from 'reactstrap'
import Formulario from '../../components/elements/form'
import StylesModal from '../../styles/modal.scss'
import LinkRedes from '../elements/linkRedes'
import { Helmet } from 'react-helmet';

const Layout = (props) => {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const goBack = () => {
        window.history.back();
    }
    return(
        <div className={styles.containerLayout}>
            <Helmet link={[{ rel: 'shortcut icon', type: 'image/png', href: '/images/favicon.png' }]}>
                <meta charSet="utf-8" />
                <title>Nuspa</title>
                <meta name="title" content="Nuspa" />
                <meta name="description" content="Logra el cuerpo que siempre has deseado con Nü Spa Clínico, ¡ponte una meta y nosotros te ayudamos a cumplirla!" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="/" />
                <meta property="og:title" content="Nuspa" />
                <meta property="og:description" content="Logra el cuerpo que siempre has deseado con Nü Spa Clínico, ¡ponte una meta y nosotros te ayudamos a cumplirla!" />
                <meta property="og:image" content="/images/meta-image.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Nuspa" />
                <meta property="twitter:description" content="Logra el cuerpo que siempre has deseado con Nü Spa Clínico, ¡ponte una meta y nosotros te ayudamos a cumplirla!" />
                <meta property="twitter:image" content="/images/meta-image.png" />
            </Helmet>
            <Header active={props.active}/>
                {props.children}
                {
                    props.active !== 'INICIO' ? 
                    <div className={styles.containerArrow} onClick={goBack}>
                        <img src="/images/icons/back-arrow.svg" alt="back" />
                    </div> : ''
                }
                <div className={styles.banderin +" pl-1 pl-md-3 pr-1 pr-md-5 py-3 d-md-flex"}>
                {
                    props.field ?
                    <div>
                        <div onClick={toggle} className={styles.link + " d-flex py-2 d-md-none align-items-center justify-content-center"}>ME INTERESA</div>
                        <div onClick={toggle} className=" d-none d-md-flex align-items-center justify-content-center">
                            ME INTERESA
                        </div>
                    </div>
                     :
                    <div>
                        <div className={styles.redesResponsive + " d-flex py-3 d-md-none align-items-center justify-content-center"}>
                            <Link to="/#formulario" className={styles.link}>CONTÁCTANOS</Link>
                            <LinkRedes color="white" user="nuspaclinico" red="facebook" />
                            <LinkRedes color="white" user="nu.spa.mx" red="instagram" />
                            <LinkRedes color="white" user="525512579162" red="whatsapp" />
                        </div>
                        <div className=" d-none d-md-flex align-items-center justify-content-center">
                            <Link to="/#formulario" className={styles.link}>CONTÁCTANOS</Link>
                        </div>
                    </div>

                }
                </div>
                <Modal isOpen={modal} cssModule={StylesModal} toggle={toggle} >
                    <div className="text-right py-3 px-4">
                        <img src="/images/icons/x.svg" className={styles.hoverCursor + ' lazyload'} alt="close icon" onClick={toggle}/>
                    </div>
                    <ModalBody className="px-3 my-3">
                        <h1 className={styles.textTitle +" py-3 font-weight-bold text-center"}>
                            ¿Tienes alguna duda?
                        </h1>
                        <p className={styles.generalText + " py-3 w-75 text-center mx-auto"}>
                        Déjanos un mensaje y pronto nos pondremos en contacto contigo. 
                        </p>
                        <div className="w-50 d-none d-lg-block mx-auto">
                            <Formulario field={props.field}/>
                        </div>
                        <div className="d-lg-none mx-auto">
                            <Formulario field={props.field}/>
                        </div>
                    </ModalBody>
                </Modal>
            <Footer />
        </div>
    )
}

export default Layout