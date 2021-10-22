import React from "react"
import styles from './form.module.scss'
import { Form, FormGroup, Input, FormFeedback } from 'reactstrap'
import StylesForm from './form.scss'
import Button from '../../components/elements/button'
import axios from 'axios';
import swal from 'sweetalert2';

class Formulario extends React.Component {
    url = 'https://hooks.zapier.com/hooks/catch/2364137/o66v7bx/';
    url_general = 'https://hooks.zapier.com/hooks/catch/2364137/o6h6650/';
    state = {
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        servicio: this.props.field ? this.props.field.name : '',
        mensaje: '',
        validator: false,
        errors:{
            nombre: {
                value: false,
                text: ''
            },
            apellido: {
                value: false,
                text: ''
            },
            telefono: {
                value: false,
                text: ''
            },
            email: {
                value: false,
                text: ''
            },
            mensaje: {
                value: false,
                text: ''
            },
        }
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    successAlert =  () => {
        swal.fire({
            title: 'Gracias',
            text: 'Pronto nos pondremos en contacto contigo.',
            icon: 'success',
            confirmButtonColor: '#30bbad',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'confirmButton',
            },
        })
        this.setState({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            servicio: this.props.field ? this.props.field.name : '',
            mensaje: '',
            validator: false,
            errors:{
                nombre: {
                    value: false,
                    text: ''
                },
                apellido: {
                    value: false,
                    text: ''
                },
                telefono: {
                    value: false,
                    text: ''
                },
                email: {
                    value: false,
                    text: ''
                },
                mensaje: {
                    value: false,
                    text: ''
                },
            }
        });
    }
    errorAlert = () => {
        swal.fire({
            title: 'Ops',
            text: 'Ocurrió un error, intenta de nuevo más tarde.',
            icon: 'error',
            confirmButtonColor: '#30bbad',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'confirmButton',
            },
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.props.field){
            axios.post(this.url, {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                email: this.state.email,
                servicio: this.state.servicio
            },{ headers: this.headers }).then((res) => {
                this.successAlert();
            }, (error) => {
                this.errorAlert();
            })
        }
        else{
            axios.post(this.url_general, {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                email: this.state.email,
                telefono: this.state.telefono,
                mensaje: this.state.mensaje
            },{ headers: this.headers  }).then((res) => {
                this.successAlert();
            }, (error) => {
                this.errorAlert();
            })
        }
    }
    handleInputChange = (event) => {
        const regexp = new RegExp(`^-?[0-9]*$`);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.errorsConst = this.state.errors;
        switch(name){
            case 'nombre':
                if(value.length === 0){
                    this.errorsConst[name].value = true
                    this.errorsConst[name].text = 'Este campo es requerido'
                }else{
                    this.errorsConst[name].value = false
                    this.errorsConst[name].text = ''
                }
                break;
            case 'apellido':
                if(value.length === 0){
                    this.errorsConst[name].value = true
                    this.errorsConst[name].text = 'Este campo es requerido'
                }else{
                    this.errorsConst[name].value = false
                    this.errorsConst[name].text = ''
                }
                break;
            case 'telefono':
                if(value.length === 0){
                    this.errorsConst[name].value = true
                    this.errorsConst[name].text = 'Este campo es requerido'
                }else{
                    if(!regexp.test(value)){
                        this.errorsConst[name].value = true
                        this.errorsConst[name].text = 'Ingresa solo carácteres numéricos'
                    }
                    else{
                        if(value.length <= 6){
                            this.errorsConst[name].value = true
                            this.errorsConst[name].text = 'Número telefónico invalido'
                        }
                        else{
                            this.errorsConst[name].value = false
                            this.errorsConst[name].text = ''
                        }
                    }
                }
                break;
            case 'email':
                if(value.length === 0){
                    this.errorsConst[name].value = true
                    this.errorsConst[name].text = 'Este campo es requerido'
                }else{
                    if(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                        this.errorsConst[name].value = true
                        this.errorsConst[name].text = 'Ingresa un correo electrónico valido'
                    }
                    else{
                        this.errorsConst[name].value = false
                        this.errorsConst[name].text = ''
                    }
                }
                break;
            case 'mensaje':
                if(value.length === 0){
                    this.errorsConst[name].value = true
                    this.errorsConst[name].text = 'Este campo es requerido'
                }else{
                    this.errorsConst[name].value = false
                    this.errorsConst[name].text = ''
                }
                break;
            default:
                break;
        }
        this.setState({
            [name]: value,
            errors: this.errorsConst,
        });
        if(this.errorsConst.nombre.value || this.errorsConst.apellido.value || this.errorsConst.telefono.value || this.errorsConst.email.value || this.errorsConst.mensaje.value){
            this.setState({
                validator: false
            })
        }else{
            this.setState({
                validator: true
            })
        }
        console.log(this.errorsConst, 'error')

    }
    render(props) {
        return (
            <Form
                onSubmit={this.onFormSubmit}
                className="py-4 py-lg-0">
                <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}>
                    <div className={styles.halfInput + " mr-lg-2"} >
                        <Input
                            type="text"
                            cssModule={StylesForm}
                            className={this.props.field && 'green'}
                            name="nombre"
                            id="nombre"
                            placeholder="Nombre"
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            required
                            invalid={this.state.errors.nombre.value}
                            />
                        <FormFeedback>{this.state.errors.nombre.text}</FormFeedback>
                    </div>
                    <div className={styles.halfInput + " ml-lg-2"} >
                        <Input
                            type="text"
                            cssModule={StylesForm}
                            className={this.props.field && 'green'}
                            name="apellido"
                            id="apellido"
                            placeholder="Apellido"
                            value={this.state.apellido}
                            onChange={this.handleInputChange}
                            required
                            invalid={this.state.errors.apellido.value}
                            />
                        <FormFeedback>{this.state.errors.apellido.text}</FormFeedback>
                    </div>
                </FormGroup>
                {
                    !this.props.field &&
                    <FormGroup className={"d-lg-flex mb-0 mb-lg-0 py-0 py-lg-3 px-3 "}>
                        <div className={styles.halfInput + " mr-lg-2"} >
                            <Input
                                type="text"
                                cssModule={StylesForm}
                                name="telefono"
                                id="telefono"
                                placeholder="Tel."
                                value={this.state.telefono}
                                onChange={this.handleInputChange}
                                required
                                invalid={this.state.errors.telefono.value}
                                />
                            <FormFeedback>{this.state.errors.telefono.text}</FormFeedback>
                        </div>
                        <div className={styles.halfInput + " ml-lg-2"} >
                            <Input
                                type="email"
                                cssModule={StylesForm}
                                name="email"
                                id="email"
                                placeholder="Correo electrónico"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required
                                invalid={this.state.errors.email.value}
                                />
                            <FormFeedback>{this.state.errors.email.text}</FormFeedback>
                        </div>
                    </FormGroup>
                }
                {
                    this.props.field &&
                    <FormGroup className="py-0 py-lg-3 px-3  mb-0 mb-lg-0">
                        <Input
                            type="email"
                            cssModule={StylesForm}
                            className="green"
                            name="email"
                            id="email"
                            placeholder="Correo electrónico"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                            invalid={this.state.errors.email.value}
                            />
                        <FormFeedback>{this.state.errors.email.text}</FormFeedback>
                    </FormGroup>
                }
                {
                    this.props.field &&
                    <FormGroup className="py-0 py-lg-3 px-3  mb-0 mb-lg-0">
                        <Input
                            type="text"
                            cssModule={StylesForm}
                            className="green"
                            name="servicio"
                            value={this.props.field.name}
                            id="servicio"
                            placeholder="servicio"
                            disabled
                            required/>
                    </FormGroup>
                }
                {
                    !this.props.field &&
                    <FormGroup className="py-0 py-lg-3 px-3  mb-0 mb-lg-0">
                        <Input
                            type="textarea"
                            cssModule={StylesForm}
                            name="mensaje"
                            id="mensaje"
                            placeholder="Mensaje"
                            value={this.state.mensaje}
                            onChange={this.handleInputChange}
                            required
                            invalid={this.state.errors.mensaje.value}
                            />
                        <FormFeedback>{this.state.errors.mensaje.text}</FormFeedback>
                    </FormGroup>
                }
                <div className=" mt-5 d-flex justify-content-center">
                    <Button
                        disabled={!this.state.validator}
                        text="ENVIAR"
                        color="green"/>
                </div>
            </Form>
        )
    }
}


export default Formulario;