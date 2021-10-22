import React from "react"
import styles from './button.module.scss'
import { Link } from "gatsby"
import { Button as ButtonReacstrap} from 'reactstrap';

const Button = (props) => {

    return (
        <div >
            {
                props.url ?
                    <Link state={props.state} className={styles[props.color]} to={props.url}>
                        {props.text}
                    </Link>
                :
                    <ButtonReacstrap className={ props.disabled ? styles.disabled + ' ' + styles[props.color] + ' ' + styles.button : styles[props.color] + ' ' + styles.button} >
                        {props.text}
                    </ButtonReacstrap>
            }
        </div>
    );
}

export default Button;