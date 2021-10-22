import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Row, Col} from 'reactstrap';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './header.module.scss';
import LinkRedes from '../../elements/linkRedes';
import Ripples from 'react-ripples'

const MenuItem = (props) => {
    let active = ''
    if(props.active === props.text){
        active=styles.active
    } else {
        active=styles.inactive
    }
    return (
        <Link to={props.url} className={active +  " mx-2 " } >
            {props.text}
        </Link>
    )
}

const GridHeader = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [imgIcon, setImgIcon] = useState("/images/icons/toggler-menu.svg");
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
        if(collapsed){
            setImgIcon("/images/icons/x.svg");
        }
        else{
            setImgIcon("/images/icons/toggler-menu.svg");
        }
    };
    return (
        <Navbar className={styles.header + " " + styles.fadeIn  }>
            <Row className={'m-0 w-100 px-4 px-md-3 px-lg-4'}>
                <Col xs="6" md="5" className={'p-0 d-flex align-items-center'} >
                    <NavbarToggler onClick={toggleNavbar } className={styles.borderRight + " mr-2"} >
                        <img alt="menu-logo" className="lazyload" src={imgIcon} />
                        <span className={styles.menuText+" mx-3"}>
                            MENÚ
                        </span>
                    </NavbarToggler>
                    <div className="d-none d-md-block">
                        <Collapse isOpen={!collapsed} navbar>
                            <MenuItem active={props.active} url="/" text="INICIO" />
                            <MenuItem active={props.active} url="servicios" text="SERVICIOS" />
                            <MenuItem active={props.active} url="aparatologia" text="APARATOLOGÍA" />
                            <MenuItem active={props.active} url="paquetes" text="PAQUETES" />
                        </Collapse>
                    </div>
                </Col>
                <Col xs="6" md="2" className={'p-0 text-center'}>
                    <Link to="/">
                        <img alt="logo" className={styles.logoHeader + '  lazyload'} src="/images/logos/logo-green.svg" />
                    </Link>
                </Col>
                <Col md="5" className={'p-0 d-md-flex d-none align-items-center justify-content-end'}>
                    <div className={styles.borderRight + ' pr-lg-4' }>
                        <LinkRedes user="nuspaclinico" red="facebook" />
                        <LinkRedes user="nu.spa.mx" red="instagram" />
                        <LinkRedes user="525512579162" red="whatsapp" />
                    </div>
                    <div className={styles.telefonoText + ' text-right px-3 px-lg-4 '}>
                        <p className={'mb-0'}>
                            TEL. <a href="tel:5555402055" target="_blank" rel="noopener noreferrer">5540 2055</a>
                            <br />
                            <a href="tel:5555402060" target="_blank" rel="noopener noreferrer">5540 2060</a>
                        </p>
                    </div>
                </Col>
            </Row>
            <div  id="menures"className={"d-lg-none position-relative"} >
                <div className={collapsed ? "d-none "  + ' ' + styles.fadeOut + ' ' + styles.topHeaderResponsive : styles.topHeaderResponsive + " " + styles.fadeIn}>
                    <div onClick={toggleNavbar} className="text-green p-4">
                        <img alt="menu-logo" className="lazyload" src={imgIcon} />
                    </div>
                </div>
                <div className={collapsed ? " d-none " + styles.topHeaderImageResponsive  + ' ' + styles.fadeOut : styles.topHeaderImageResponsive + " w-100 text-center " + styles.fadeIn}>
                    <Link to="/">
                        <img alt="logo" className=" lazyload" src="/images/logos/logo-green.svg" />
                    </Link>
                </div>
                <Collapse className={ collapsed ? styles.menuResponsive + ' ' + styles.fadeOut + " align-items-center justify-content-center"  : styles.menuResponsive + " align-items-center justify-content-center d-flex" + " " + styles.fadeInFast} isOpen={!collapsed} navbar>
                    <div className="text-center">
                        <div>
                            <Ripples color="#30bbad">
                                <div className="py-3 px-5">
                                    <MenuItem active={props.active} url="/" text="INICIO" />
                                </div>
                            </Ripples>
                        </div>
                        <div>
                            <Ripples color="#30bbad">
                                <div className="py-3">
                                    <MenuItem active={props.active} url="servicios" text="SERVICIOS" />
                                </div>
                            </Ripples>
                        </div>
                        <div>
                            <Ripples color="#30bbad">
                                <div className="py-3">
                                    <MenuItem active={props.active} url="aparatologia" text="APARATOLOGÍA" />
                                </div>
                            </Ripples>
                        </div>
                        <div>
                            <Ripples color="#30bbad">
                                <div className="py-3">
                                    <MenuItem active={props.active} url="paquetes" text="PAQUETES" />
                                </div>
                            </Ripples>
                        </div>
                    </div>
                </Collapse>
                <div className={collapsed ? "d-none" : styles.bottomHeaderResponsive + " w-100 d-flex align-items-center justify-content-center"+ " " + styles.fadeIn}>
                        <LinkRedes user="nuspaclinico" red="facebook" />
                        <LinkRedes user="nu.spa.mx" red="instagram" />
                        <LinkRedes user="525512579162" red="whatsapp" />
                </div>
            </div>
        </Navbar>
    )
}

export default (props) => (
    <header>
        <GridHeader active={props.active}/>
    </header>
)