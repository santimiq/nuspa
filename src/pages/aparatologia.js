import React from "react"
import Layout from '../components/layout/layout'
import styles from './aparatologia.module.scss'
import Masonry from 'react-masonry-component';
import DropdownApa from '../components/elements/dropdown';
import Tarjetasimple from '../components/elements/tarjetasimple';

export default () => (
        <Layout active="APARATOLOGÍA">
            <div className="mx-2 px-0 mx-md-5 px-md-5 mx-auto" >
                <div className="position-relative">
                    <img src="/images/aparatologia/banner.jpg" alt="servicios" className={"d-none d-lg-block w-100 img-fluid lazyload"}/>
                    <img src="/images/aparatologia/aparatologia-mobile.png" alt="servicios" className={"d-lg-none d-block w-100 img-fluid lazyload"}/>
                    <div className={styles.containerTitulo + ' position-absolute'}>
                        <div className="d-flex align-items-center">
                            <div className={styles.line +" d-none d-lg-block mx-3"}></div>
                            <h1 className={styles.textSection +" font-weight-bold mb-0"}>
                                APARATOLOGÍA
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="my-4 mx-lg-5 mx-2 px-4">
                    <Masonry className="d-none d-lg-block">
                        <Tarjetasimple image="/images/aparatologia/alta-frecuencia.jpg" altImage="Alta Frecuencia:" title="Alta Frecuencia:">
                            Se utiliza para oxigenar la piel, activa la circulación sanguínea y sirve como germicida matando las bacterias en la piel.
                        </Tarjetasimple>
                        <Tarjetasimple title="CARBOXTONIC® (Carboxiterapia): ">
                            El dióxido de carbono destruye físicamente las células grasas, el suministro de oxígeno se incrementa sobre la piel, por tanto, mejora su apariencia y reafirma a nivel dérmico, moldea la figura y mejora la elasticidad.
                        </Tarjetasimple>
                        <Tarjetasimple title="Electroestimulación de barrido: ">
                            Conjunta los beneficios de la electroestimulación mediante el barrido de electrodos bipolares. Se puede utilizar en tratamientos faciales y corporales y tiene diferentes funciones como tonificar (efecto lifting), hidratar, drenar, desinflamar y también es auxiliar en tratamientos tanto pre como post quirúrgicos.
                        </Tarjetasimple>
                        <Tarjetasimple image="/images/aparatologia/cavitacion.jpg" altImage="Cavitación:" title="Cavitación:">
                            Es una técnica no invasiva para degradar grasa que funciona a partir de ondas ultrasónicas que saturan la ruptura de la membrana del adiposito y transforman la grasa de estado sólido a líquido y se elimina a través del sistema linfático. Se utiliza principalmente en tratamientos reductivos y se conoce como lipo sin cirugía.
                        </Tarjetasimple>
                        <Tarjetasimple title="Criolipólisis: ">
                            Es un proceso de enfriamiento (cooling) no invasivo del tejido adiposo para inducir la lipólisis (ruptura) de las células grasas o adipocitos con la consiguiente apoptosis, es decir, muerte celular.
                        </Tarjetasimple>
                        <Tarjetasimple title="HIDROFACIAL DIAMOND® (Hidrofacial): ">
                            Realiza una limpieza profunda que también hidrata y no es invasiva. En este tratamiento las células muertas de la piel se exfolian y se aspiran con un equipo de microdermoabrasión con puntas cubiertas con limadura de diamantes.  Aumenta el flujo de sangre a la piel y ayuda en la producción de colágeno.
                        </Tarjetasimple>
                        <Tarjetasimple title="Electroporación: ">
                            Potencializa la penetración de activos específicos para cada tipo de piel (mesoterapia virtual), también brinda luminosidad a la piel.
                        </Tarjetasimple>
                        <Tarjetasimple image="/images/aparatologia/depiltech.jpg" altImage="DEPILTECH®:" title="DEPILTECH® (Fotodepilación IPL):">
                            Es un método para la remoción de vello en el cual la luz aplicada en la superficie de la piel, viaja a través de ella hasta que es absorbida por la raíz del vello. El intenso calor irradiado destruye el folículo del vello.
                        </Tarjetasimple>
                        <Tarjetasimple title="LIPOMESOTERAPIA (Mesoterapia virtual): ">
                            Se aplica de manera tópica y con ayuda del electroporador, los activos faciales tienen efecto lifting, hidratante o despigmentante y los activos corporales son drenantes, lipolíticos y reafirmantes.
                        </Tarjetasimple>
                        <Tarjetasimple title="LASSER ULTRA SILK® (Láser): ">
                            Es un excelente aliado en tratamientos postquirúrgicos por su efecto desinflamatorio y proceso cicatricial. Estimula la producción de colágeno de manera natural, reduce las líneas de expresión y arrugas, brinda a tu piel un aspecto fresco y terso, también hidrata y tonifica.
                        </Tarjetasimple>
                        <Tarjetasimple title="Luz Pulsada Intensa: ">
                            Es ideal en tratamiento despigmentante, acné y fotorejuvenecimiento. Afecta directamente al colágeno y acelera los procesos de remodelación, promueve rejuvenecimiento y elimina lesiones de la edad como líneas de expresión finas y profundas.
                        </Tarjetasimple>
                        <Tarjetasimple image="/images/aparatologia/termoelectrofit.jpg" altImage="TERMOELECTROFIT®" title="TERMOELECTROFIT® (Termoelectroestimulación): ">
                            Este aparato combina termoterapia y electroestimulación de frecuencia mediam, mejora el aspecto de las celulitis, reafirma, realiza un rompimiento de célula grasa (lipólisis) y también es auxiliar en tratamientos de rehabilitación muscular
                        </Tarjetasimple>
                        <Tarjetasimple image="/images/aparatologia/presoterapia.jpg" altImage="Presoterapia:" title="Presoterapia: ">
                            Realiza drenaje linfático, estimula realizando presión en la piel, promueve el flujo sanguíneo adecuado y previene la hinchazón de los tejidos internos del cuerpo. Ayuda a drenar grasa que previamente ha sido degradada, desintoxica y es auxiliar en tratamientos pre y post quirúrgicos.
                        </Tarjetasimple>
                        <Tarjetasimple title="RADIOFRECUENCIA SLIMFIT® (Radiofrecuencia): ">
                            Colabora en procedimientos no invasivos que pueden ser tanto faciales como corporales. Funciona a partir de diatermia localizada, disuelve grasa localizada y simultáneamente reafirma los tejidos. Estimula la producción de colágeno y elastina, previene arrugas y combate la flacidez
                        </Tarjetasimple>
                        <Tarjetasimple title="Ultrasonido: ">
                            Es un reparador celular, aumenta la circulación sanguínea, sus ondas estimulan el colágeno y colabora en la absorción y penetración de activos en la piel.
                        </Tarjetasimple>
                        
                    </Masonry>
                    <div className="d-lg-none d-block">
                    <DropdownApa title="Alta Frecuencia:">
                    Se utiliza para oxigenar la piel, activa la circulación sanguínea y sirve como germicida matando las bacterias en la piel.
                    </DropdownApa>
                    <DropdownApa title="CARBOXTONIC® (Carboxiterapia): ">
                    El dióxido de carbono destruye físicamente las células grasas, el suministro de oxígeno se incrementa sobre la piel, por tanto, mejora su apariencia y reafirma a nivel dérmico, moldea la figura y mejora la elasticidad.
                    </DropdownApa>
                    <DropdownApa title="Electroestimulación de barrido: ">
                    Conjunta los beneficios de la electroestimulación mediante el barrido de electrodos bipolares. Se puede utilizar en tratamientos faciales y corporales y tiene diferentes funciones como tonificar (efecto lifting), hidratar, drenar, desinflamar y también es auxiliar en tratamientos tanto pre como post quirúrgicos.
                    </DropdownApa>
                    <DropdownApa title="Cavitación:">
                    Es una técnica no invasiva para degradar grasa que funciona a partir de ondas ultrasónicas que saturan la ruptura de la membrana del adiposito y transforman la grasa de estado sólido a líquido y se elimina a través del sistema linfático. Se utiliza principalmente en tratamientos reductivos y se conoce como lipo sin cirugía.
                    </DropdownApa>
                    <DropdownApa title="Criolipólisis: ">
                    Es un proceso de enfriamiento (cooling) no invasivo del tejido adiposo para inducir la lipólisis (ruptura) de las células grasas o adipocitos con la consiguiente apoptosis, es decir, muerte celular.
                    </DropdownApa>
                    <DropdownApa title="HIDROFACIAL DIAMOND® (Hidrofacial): ">
                            Realiza una limpieza profunda que también hidrata y no es invasiva. En este tratamiento las células muertas de la piel se exfolian y se aspiran con un equipo de microdermoabrasión con puntas cubiertas con limadura de diamantes.  Aumenta el flujo de sangre a la piel y ayuda en la producción de colágeno.
                    </DropdownApa>
                    <DropdownApa title="Electroporación: ">
                            Potencializa la penetración de activos específicos para cada tipo de piel (mesoterapia virtual), también brinda luminosidad a la piel.
                    </DropdownApa>
                    <DropdownApa title="DEPILTECH® (Fotodepilación IPL):">
                        Es un método para la remoción de vello en el cual la luz aplicada en la superficie de la piel, viaja a través de ella hasta que es absorbida por la raíz del vello. El intenso calor irradiado destruye el folículo del vello.
                    </DropdownApa>
                    <DropdownApa title="LIPOMESOTERAPIA (Mesoterapia virtual): ">
                        Se aplica de manera tópica y con ayuda del electroporador, los activos faciales tienen efecto lifting, hidratante o despigmentante y los activos corporales son drenantes, lipolíticos y reafirmantes.
                    </DropdownApa>
                    <DropdownApa title="LASSER ULTRA SILK® (Láser): ">
                        Es un excelente aliado en tratamientos postquirúrgicos por su efecto desinflamatorio y proceso cicatricial. Estimula la producción de colágeno de manera natural, reduce las líneas de expresión y arrugas, brinda a tu piel un aspecto fresco y terso, también hidrata y tonifica.
                    </DropdownApa>
                    <DropdownApa title="Luz Pulsada Intensa: ">
                        Es ideal en tratamiento despigmentante, acné y fotorejuvenecimiento. Afecta directamente al colágeno y acelera los procesos de remodelación, promueve rejuvenecimiento y elimina lesiones de la edad como líneas de expresión finas y profundas.
                    </DropdownApa>
                    <DropdownApa title="TERMOELECTROFIT® (Termoelectroestimulación): ">
                        Este aparato combina termoterapia y electroestimulación de frecuencia mediam, mejora el aspecto de las celulitis, reafirma, realiza un rompimiento de célula grasa (lipólisis) y también es auxiliar en tratamientos de rehabilitación muscular
                    </DropdownApa>
                    <DropdownApa title="Presoterapia: ">
                        Realiza drenaje linfático, estimula realizando presión en la piel, promueve el flujo sanguíneo adecuado y previene la hinchazón de los tejidos internos del cuerpo. Ayuda a drenar grasa que previamente ha sido degradada, desintoxica y es auxiliar en tratamientos pre y post quirúrgicos.
                    </DropdownApa>
                    <DropdownApa title="RADIOFRECUENCIA SLIMFIT® (Radiofrecuencia): ">
                        Colabora en procedimientos no invasivos que pueden ser tanto faciales como corporales. Funciona a partir de diatermia localizada, disuelve grasa localizada y simultáneamente reafirma los tejidos. Estimula la producción de colágeno y elastina, previene arrugas y combate la flacidez
                    </DropdownApa>
                    <DropdownApa title="Ultrasonido: ">
                        Es un reparador celular, aumenta la circulación sanguínea, sus ondas estimulan el colágeno y colabora en la absorción y penetración de activos en la piel.
                    </DropdownApa>
                    </div>
                </div>
            </div>
        </Layout>
    )
