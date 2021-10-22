import React from 'react';
import { Card } from 'reactstrap'
import styles from './tarjetasimple.module.scss'
import FadeInSection from './fadeInSection';

const Tarjetasimple = (props) => {
    return (
        <FadeInSection className={styles.cardMasonry}>
            <Card>
                {props.image ?
                    <img src={props.image} alt={props.altImage} className={'w-100 img-fluid lazyload'}/>
                :   <div className={styles.greenLine}>

                    </div>
                }
                <h1 className={styles.titleMasonry}>
                    {props.title}
                </h1>
                <p className={styles.textMasonry + " mb-5 px-lg-3 px-1 mx-1 mx-lg-3"}>
                    {props.children}
                </p>
            </Card>
        </FadeInSection>
    );
}

export default Tarjetasimple;