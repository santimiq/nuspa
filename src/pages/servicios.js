import React from "react"
import { Row, Col } from 'reactstrap'
import Layout from '../components/layout/layout'
import styles from './servicios.module.scss'
import Tarjeta from '../components/elements/tarjeta'
import { Link } from "gatsby"

export default () => (
        <Layout active="SERVICIOS">
            <div className="mx-2 px-0 mx-md-5 px-md-5 mx-auto" >
                <div className="position-relative">
                    <img src="/images/servicios/banner.jpg" alt="servicios" className={styles.imgServicios + " img-fluid w-100 lazyload"}/>
                    <div className={styles.containerTitulo + ' position-absolute'}>
                        <div className="d-flex align-items-center">
                            <h2 className="font-weight-light mb-0">
                                NUESTROS
                            </h2>
                            <div className={styles.line +" mx-3"}></div>
                        </div>
                        <h1 className="font-weight-bold mb-0">
                            SERVICIOS
                        </h1>
                    </div>
                </div>
                <div className="my-3">
                    <Row className="m-0 d-none d-md-flex" >
                        <Col sm="12" md="6" className="p-1" >
                            <Tarjeta
                                tipo="full"
                                title="TRATAMIENTOS CORPORALES"
                                text="Define tu vida y obtén el cuerpo que siempre has deseado."
                                image="/images/servicios/corporales.jpg"
                                buttonUrl="servicios/corporales"
                                buttonText="VER TODOS"
                                buttonColor="green"
                            />
                        </Col>
                        <Col sm="12" md="6" className="p-1" >
                            <Row className="h-100 m-0">
                                <Col m="12" md="12" className="p-1" >
                                    <Tarjeta tipo="right"
                                        title="TRATAMIENTOS FACIALES"
                                        text="Dale a tu piel un merecido descanso con nuestros tratamientos y luce mejor que nunca."
                                        image="/images/servicios/faciales.jpg"
                                        buttonUrl="servicios/faciales"
                                        buttonText="VER TODOS"
                                        buttonColor="green"
                                    />
                                </Col>
                                <Col sm="12" md="12" className="p-1" >
                                    <Tarjeta tipo="left"
                                        title="DEPILACIÓN"
                                        text="Olvídate del vello no deseado con nuestra alta tecnología de depilación definitiva."
                                        image="/images/servicios/depilacion.jpg"
                                        buttonUrl="servicios/depilacion/depilacion"
                                        buttonState={{tratamiento: ['Depilacion'], servicio: 0}}
                                        buttonText="VER TODOS"
                                        buttonColor="green"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-0 d-none d-md-flex">
                        <Col sm="12" md="6" className="p-1" >
                            <Tarjeta tipo="top"
                                title="NUTRICIÓN"
                                text="Todos nuestros tratamientos siempre van acompañados de un programa de nutrición para obtener resultados óptimos."
                                image="/images/servicios/nutricion.jpg"
                                buttonUrl="servicios/nutricion/nutricion"
                                buttonState={{tratamiento: ['Nutricion'], servicio: 0}}
                                buttonText="VER TODOS"
                                buttonColor="green"
                            />
                        </Col>
                        <Col sm="12" md="6" className="p-1" >
                            <Tarjeta tipo="full"
                                title="MASAJES"
                                text="Toma un break y relájate con nuestra variedad de masajes. "
                                image="/images/servicios/masajes.jpg"
                                buttonUrl="servicios/masajes"
                                buttonText="VER TODOS"
                                buttonColor="green"
                            />
                        </Col>
                    </Row>
                    <div className="d-md-none">
                        <div className="px-3 py-1">
                            <Link to="/servicios/corporales">
                                <Tarjeta hideLine={true} image="/images/servicios/corporales-responsive.jpg" title="TRATAMIENTOS CORPORALES" />
                            </Link>
                        </div>
                        <div className="px-3 py-1">
                            <Link to="/servicios/faciales">
                                <Tarjeta hideLine={true} image="/images/servicios/faciales-responsive.jpg" title="TRATAMIENTOS FACIALES" />
                            </Link>
                        </div>
                        <div className="px-3 py-1">
                            <Link to="/servicios/depilacion/depilacion">
                                <Tarjeta hideLine={true} image="/images/servicios/depilacion-responsive.jpg" title="DEPILACIÓN" />
                            </Link>
                        </div>
                        <div className="px-3 py-1">
                            <Link to="/servicios/nutricion/nutricion">
                                <Tarjeta hideLine={true} image="/images/servicios/nutricion-responsive.jpg" title="NUTRICIÓN" />
                            </Link>
                        </div>
                        <div className="px-3 py-1">
                            <Link to="/servicios/masajes">
                                <Tarjeta hideLine={true} image="/images/servicios/masajes-responsive.jpg" title="TRATAMIENTOS MASAJES" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
