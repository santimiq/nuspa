import React, { useState } from 'react';
import Layout from '../components/layout/layout'
import styles from './paquetes.module.scss'
import Masonry from 'react-masonry-component'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import Tarjeta from '../components/elements/tarjeta'

const TabsPaquetes = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    const changeTab = (direction) => {
        if(direction === 'prev'){
            if(activeTab === '1'){
                toggle('3');
            }
            else{
                toggle(String(Number(activeTab) - 1));
            }
        }
        else{
            if(activeTab === '3'){
                toggle('1');
            }
            else{
                toggle(String(Number(activeTab) + 1));
            }
        }
    } 
    return (
        <div>
            <Nav className={styles.tabs} tabs>
                <Row className="w-100 mx-0">
                    <Col lg="4" className="p-0">
                        <NavItem className={styles.tabsActive}>
                            <NavLink
                                className={activeTab === '1' ? styles.activeTab : styles.inactiveTab}
                                onClick={() => { toggle('1'); }}
                            >
                                <img onClick={() => { changeTab('prev'); }} src="/images/icons/flecha-izq.svg" alt="prevImage" className={styles.prevImage + " d-lg-none lazyload"} />
                                <div>
                                    <p>
                                        REDUCTIVOS
                                    </p>
                                    <div className={activeTab === '1' ? styles.activeLine : styles.inactiveLine}>

                                    </div>
                                </div>
                                <img onClick={() => { changeTab('next'); }} src="/images/icons/flecha-derecha.svg" alt="nextImage" className={styles.nextImage + " d-lg-none lazyload"} />
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col lg="4" className="p-0">
                        <NavItem className={styles.tabsActive}>
                            <NavLink
                                className={activeTab === '2' ? styles.activeTab : styles.inactiveTab}
                                onClick={() => { toggle('2'); }}
                            >
                            <img onClick={() => { changeTab('prev'); }} src="/images/icons/flecha-izq.svg" alt="prevImage" className={styles.prevImage + " d-lg-none lazyload"} />
                                <div>
                                    <p>
                                        CORPORALES
                                    </p>
                                    <div className={activeTab === '2' ? styles.activeLine : styles.inactiveLine}>
                                    </div>
                                </div>
                            <img onClick={() => { changeTab('next'); }} src="/images/icons/flecha-derecha.svg" alt="nextImage" className={styles.nextImage + " d-lg-none lazyload"} />
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col lg="4" className="p-0">
                        <NavItem className={styles.tabsActive}>
                            <NavLink
                                className={activeTab === '3' ? styles.activeTab : styles.inactiveTab}
                                onClick={() => { toggle('3'); }}
                            >
                                <img onClick={() => { changeTab('prev'); }} src="/images/icons/flecha-izq.svg" alt="prevImage" className={styles.prevImage + " d-lg-none lazyload"} />
                                <div>
                                    <p>
                                        FACIALES
                                    </p>
                                    <div className={activeTab === '3' ? styles.activeLine : styles.inactiveLine}>

                                    </div>
                                </div>
                                <img onClick={() => { changeTab('next'); }} src="/images/icons/flecha-derecha.svg" alt="nextImage" className={styles.nextImage + " d-lg-none lazyload"} />
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Masonry >
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/1.jpg" text="16 SESIONES, 5 VISITAS" title="RETO DE VERANO:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/2.jpg" text="32 SESIONES, 8 VISITAS" title="CUERPO DE PLAYA:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/3.jpg" text="36 SESIONES, 8 VISITAS" title="FLASH:" />
                        </div>
                        <div className={styles.widthDobleTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/6.jpg" text="45 SESIONES, 11 VISITAS" title="ULTRA SLIM PLUS:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/4.jpg" text="50 SESIONES, 11 VISITAS" title="EXTREME MAKE OVER:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/lipo-sin-cirugia/5.jpg" text="32 SESIONES, 8 VISITAS" title="ULTRA SLIM:" />
                        </div>
                    </Masonry>
                </TabPane>
                <TabPane tabId="2">
                    <Masonry >
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/corporal/1.jpg" text="12 SESIONES, 6 VISITAS" title="TRATAMIENTO GLÚTEOS PERFECTOS: " />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/corporal/2.jpg" text="40 SESIONES, 10 VISITAS" title="TRATAMIENTO POST-OPERATORIO:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/corporal/3.jpg" text="20 SESIONES, 10 VISITAS" title="BODY TONIQUE:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/corporal/4.jpg" text="35 SESIONES, 10 VISITAS" title="REAFIRMANTE CORPORAL:" />
                        </div>
                        <div className={styles.widthDobleTercio}>
                            <Tarjeta image="/images/paquetes/corporal/5.jpg" text="45 SESIONES, 11 VISITAS" title="ULTRA SLIM PLUS:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/corporal/6.jpg" text="40 SESIONES, 10 VISITAS" title="REDUCTIVO DE BRAZOS:" />
                        </div>
                    </Masonry>
                </TabPane>
                <TabPane tabId="3">
                    <Masonry >
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/2.jpg" text="21 SESIONES, 6 VISITAS" title="CUTIS GRASO:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/5.jpg" text="21 SESIONES, 6 VISITAS" title="LIFTING FACIAL:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/6.jpg" text="18 SESIONES, 6 VISITAS" title="REDUCTIVO DE PAPADA:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/3.jpg" text="32 SESIONES, 8 VISITAS" title="DESPIGMENTANTE FACIAL:" />
                        </div>
                        <div className={styles.widthDobleTercio}>
                            <Tarjeta image="/images/paquetes/facial/1.jpg" text="30 SESIONES, 6 VISITAS" title="LIFTING PARA PIEL FLÁCIDA:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/4.jpg" text="18 SESIONES, 4 VISITAS" title="LIFTING PARA PIEL DESVITALIZADA:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/7.jpg" text="25 SESIONES, 5 VISITAS" title="LIFTING DE OJOS:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/8.jpg" text="36 SESIONES, 5 VISITAS" title="LIMPIEZA PROFUNDA DE ESPALDA:" />
                        </div>
                        <div className={styles.widthTercio}>
                            <Tarjeta image="/images/paquetes/facial/9.jpg" text="20 SESIONES, 5 VISITAS" title="FOTOREJUVENECIMIENTO DE MANOS:" />
                        </div>
                    </Masonry>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default () => (
        <Layout active="PAQUETES">
            <div className="mx-2 px-0 mx-md-5 px-md-5 mx-auto" >
                <div className="position-relative">
                    <img src="/images/paquetes/banner.jpg" alt="servicios" className={styles.paquetesImg +" w-100 img-fluid lazyload"}/>
                    <div className={styles.containerTitulo + ' position-absolute'}>
                        <div className="d-flex align-items-center">
                            <h2 className="font-weight-light mb-0">
                                NUESTROS
                            </h2>
                            <div className={styles.line +" d-none d-lg-block mx-3"}></div>
                        </div>
                        <h1 className="font-weight-bold mb-0">
                            PAQUETES
                        </h1>
                    </div>
                </div>
                <div className="w-25 d-none d-lg-block mx-auto my-5 text-center">
                    Da click en la categoría que te interese para ver los diferentes paquetes que tenemos para ti. 
                </div>
                <div className="">
                    <TabsPaquetes />
                </div>
            </div>
        </Layout>
    )
