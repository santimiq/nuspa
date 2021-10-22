import React from 'react'
import styles from './footer.module.scss'

import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GridFooter = (props) => {
    return (
        <Row className="m-0 mt-md-2">
            <Col className="text-center text-md-left px-0 py-3 pl-md-5" sm="12" md="4">
                <img alt="logo" className="pr-0 pl-md-5 lazyload" src="/images/logos/logo-white.svg" />
            </Col>
            <Col className="text-center px-0 py-4 d-flex align-items-center justify-content-center" sm="12" md="4">
                <span className="text-white text-center">
                    ©2019 Todos los derechos reservados
                </span>
            </Col>
            <Col className="px-0 pr-md-5 py-3 d-flex align-items-center justify-content-center justify-content-md-end" sm="12" md="4">
                <span className={styles.powered + " pr-0 pr-md-5"}>
                    Powered by 
                    <a href="https://concepthaus.mx/" rel="noopener noreferrer" className="pl-1 text-white" target="_blank">
                        ConceptHaus
                    </a>
                </span>
            </Col>
        </Row>
    )
}

export default (props) => (
    <footer className={styles.footerContainer}>
        <GridFooter />
    </footer>
)