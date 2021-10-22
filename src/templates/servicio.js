import React from 'react'
import Layout from '../components/layout/layout'
import SliderCard from '../components/elements/sliderCard'

const Servicio = ({ pageContext: { servicios, servicio } }) => {
    let serviciosTratamiento = [];
    servicios.forEach(serv => {
        if(serv.tratamiento === servicio.tratamiento){
            serviciosTratamiento.push(serv);
        }
    })
    return (
        <Layout active="SERVICIOS" field={servicio}>
            <div className="mx-2 px-0 mb-5 mx-md-5 px-md-5 mx-auto" >
                <SliderCard initialIndex={servicio.position - 1} autoplay={false} actual={servicio} items={serviciosTratamiento} />
            </div>
        </Layout>
    )
}

export default Servicio;