import React from "react"
import styles from './previewServicios.module.scss'
import { Link } from "gatsby"

const PreviewServicios = (props) => {
    return (
        <Link to={props.to} state={props.state} className={styles.containerPreviewService + " position-relative"}>
            <img src={props.img} alt={props.text} className="img-fluid w-100 lazyload"/>
            <div className={styles.captionService + " position-absolute py-1 px-3"}>
                <span>
                    {props.text}
                </span>
                <div className={styles.underlineCaption + " mx-1"}>

                </div>
            </div>
        </Link>
    )
}

export default PreviewServicios;