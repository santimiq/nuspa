//import styles from './servicio.module.scss'
import React from 'react';
import Layout from '../components/layout/layout';
import Tarjeta from '../components/elements/tarjeta'
import { Row, Col } from 'reactstrap'
import Slider from '../components/elements/slider'


const GridServicios = (props) => {
    let servicios = [];
    switch(props.tratamiento.slug){
        case 'corporales':
            servicios = [
                {
                    name: 'LIPO SIN CIRUGÍA',
                    text: 'Este tratamiento tiene como objetivo eliminar adiposidad a través de ondas ultrasónicas que transforman la grasa de estado sólido a líquido.',
                    slug: 'corporales/lipo-sin-cirugia',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/lipo-sin-cirugia',
                    direction: 'right',
                },
                {
                    name: 'REAFIRMANTE CORPORAL',
                    text: 'Se recomienda a personas que han perdido elasticidad y firmeza en la piel y ayuda a regenerar a nivel dérmico.',
                    slug: 'corporales/reafirmante-corporal',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/reafirmante-corporal',
                    direction: 'right',
                },
                {
                    name: 'POST - OPERATORIO',
                    text: 'Potencializa los efectos de tu cirugía con este tratamiento. ',
                    slug: 'corporales/post-operatorio',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/post-operatorio',
                    direction: 'left',
                },
                {
                    name: 'POST - NATAL',
                    text: 'Disfruta ser mamá y recupera tu cuerpo con este tratamiento que te ayudará a desinflamar, drenar y a recuperar la tonicidad de tu abdomen. ',
                    slug: 'corporales/post-natal',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/post-natal',
                    direction: 'left',
                },
                {
                    name: 'ANTICELULITICO',
                    text: 'Despídete de esa molesta piel de naranja con lo último en tecnología médico-cosmética. ',
                    slug: 'corporales/anticelulitico',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/anticelulitico',
                    direction: 'right',
                },
                {
                    name: 'GLÚTEOS PERFECTOS',
                    text: 'Reafirma y tonifica tus glúteos con nuestro paquete que incluye termoelectroestimulación que mejorará la apariencia de la piel.',
                    slug: 'corporales/gluteos-perfectos',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/gluteos-perfectos',
                    direction: 'right',
                },
                {
                    name: 'REDUCTIVO DE BRAZOS',
                    text: 'Este paquete ayudará a que te sientas muy cómodo con tus brazos.',
                    slug: 'corporales/reductivo-de-brazos',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/reductivo-de-brazos',
                    direction: 'left',
                },
                {
                    name: 'CRIOLIPÓLISIS',
                    text: 'Actúa encapsulando el tejido graso en su interior y disminuyendo la temperatura gradualmente para que se produzca apoptosis de la células grasas, es decir, muerte celular.',
                    slug: 'corporales/criolipolisis',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/corporales/criolipolisis',
                    direction: 'left',
                }
            ]
            break;
        case 'faciales':
            servicios = [
                {
                    name: 'LIFTING FACIAL',
                    text: 'Previene el envejecimiento y ayuda a mejorar el aspecto de las líneas de expresión.',
                    slug: 'faciales/lifting-facial',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/faciales/lifting-facial',
                    direction: 'right',
                },
                {
                    name: 'CUTIS GRASO',
                    text: 'Este tratamiento ayudará a equilibrar la producción de las glándulas sebáceas dando como resultado una piel más limpia y luminosa.',
                    slug: 'faciales/cutis-graso',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/faciales/cutis-graso',
                    direction: 'right',
                },
                {
                    name: 'REDUCTIVO DE PAPADA',
                    text: 'Define contorno facial, disminuye y reafirma papada.',
                    slug: 'faciales/reductivo-de-papada',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/faciales/reductivo-de-papada',
                    direction: 'left',
                },
                {
                    name: 'DESPIGMENTANTE',
                    text: 'Este tratamiento ayuda a equilibrar la melanina en la piel y a regenerar celularmente. ',
                    slug: 'faciales/despigmentante',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/faciales/despigmentante',
                    direction: 'left',
                },
                {
                    name: 'LIMPIEZA FACIAL',
                    text: 'Es un tratamiento que ayuda a eliminar impurezas en la piel (puntos negros, comedones e imperfecciones).',
                    slug: 'faciales/limpieza-facial',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/faciales/limpieza-facial',
                    direction: 'right',
                }
            ]
            break;
        case 'masajes':
            servicios = [
                {
                    name: 'RELAJANTE',
                    text: 'Relaja a nivel muscular y disminuye la ansiedad, para personas de vida acelerada y con estrés constante.',
                    slug: 'masajes/relajante',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/masajes/relajante',
                    direction: 'right',
                },
                {
                    name: 'DESCONTRACTURANTE',
                    text: 'Es uno de los más solicitados, se utiliza para desinflamar y aliviar la tensión en el músculo contracturado.',
                    slug: 'masajes/descontracturante',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/masajes/descontracturante',
                    direction: 'right',
                },
                {
                    name: 'SUECO',
                    text: 'Este masaje se realiza con presión media y disminuye la tensión muscular en la espalda.',
                    slug: 'masajes/sueco',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/masajes/sueco',
                    direction: 'left',
                },
                {
                    name: 'DRENAJE LINFÁTICO',
                    text: 'Los beneficios de este masaje están probados en el área de la cirugía estética, ya que ayuda a movilizar la carga linfática y a desinflamar zonas con algún tipo de edemas.',
                    slug: 'masajes/drenaje-linfatico',
                    buttonText: 'VER MÁS',
                    buttonUrl: 'servicios/masajes/drenaje-linfatico',
                    direction: 'left',
                }
            ]
            break;
        default:
            break;
    }
    return(
        <Row className="mx-3 mx-lg-5 px-lg-5">
            {
                servicios.map( servicio => 
                    <Col  xs="12" lg="6" className="px-0 mt-2 pb-3" key={servicio.slug}>
                        <Tarjeta tipo={servicio.direction}
                            title={servicio.name}
                            text={servicio.text}
                            image={"/images/servicios/tratamientos/"+servicio.slug+".jpg"}
                            buttonUrl={servicio.buttonUrl}
                            buttonText={servicio.buttonText}
                            buttonColor="green"
                        />
                    </Col>
                )
            }
        </Row>
    )
}

const Tratamiento = ({ pageContext: { tratamientos, tratamiento }, location }) => {
    return (
        <Layout active="SERVICIOS">
            <div className=" mx-2 px-0 mb-5 mx-md-5 px-md-5 mx-auto">
                <Slider  initialIndex={tratamiento.position - 1} autoplay={false} onChange={true} actual={tratamiento} items={tratamientos}/>
            </div>
            <GridServicios tratamiento={tratamiento} />
        </Layout>
    )
}

export default Tratamiento;