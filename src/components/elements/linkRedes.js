import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './linkRedes.module.scss';

const LinkRedes = (props) => {
    let url = ''
    let img = ''
    if(props.color)
        switch(props.red){
            case 'whatsapp':
                url = "https://wa.me/"+props.user
                img = '/images/icons/whatsapp-white.svg'
                break;
            case 'facebook':
                url = "https://facebook.com/"+props.user
                img = '/images/icons/facebook-white.svg'
                break;
            case 'instagram':
                url = "https://instagram.com/"+props.user
                img = '/images/icons/instagram-white.svg'
                break;
            default:
                url = "/"
                break;
        }
    else
        switch(props.red){
            case 'whatsapp':
                url = "https://wa.me/"+props.user
                img = '/images/icons/whatsapp.svg'
                break;
            case 'facebook':
                url = "https://facebook.com/"+props.user
                img = '/images/icons/facebook.svg'
                break;
            case 'instagram':
                url = "https://instagram.com/"+props.user
                img = '/images/icons/instagram.svg'
                break;
            default:
                url = "/"
                break;
        }
    return (
        <a className={styles.redesLink} target="_blank" href={url} rel="noopener noreferrer" >
            <img className={'mx-2 lazyload'} src={img} alt={props.red}/>
        </a>
    )
}

export default LinkRedes;