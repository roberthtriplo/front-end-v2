import { useEffect, useState } from 'react';
import { Container } from "./styles";
import { Button, Card, Col, Collapse, Form, Input, Modal, Row, Slider } from "antd";
import CarsService from "../../services/carsService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    EmailShareButton,
    FacebookShareButton,
    WhatsappShareButton,
} from "react-share";
import { SliderMarks } from 'antd/lib/slider';
import React from 'react';

function PaymentForm (props: any) {
    const paymentForm: any = React.useRef(null);
    
    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.wompi.co/widget.js";
        script.setAttribute('data-render',"button")
        script.setAttribute('data-public-key',"pub_prod_G8IqZbZgAQkQDuJrzAWZEvzA5zi4OZve")
        script.setAttribute('data-currency',"COP")
        script.setAttribute('data-amount-in-cents', props.amount)
        script.setAttribute('data-reference',props.reference)
        script.setAttribute('data-redirect-url', "https://triplo.com.co/respuesta")
        if(paymentForm.current.children.length === 0)
            paymentForm.current.appendChild(script)
    }, []);

    return (
        <form ref={paymentForm}></form>);
}
const BuyDetail = () => {
    const navigate = useNavigate();
    const [car, setCar] = useState({
        pictures: [],
        title: '',
        img_main: '',
        separate: 0,
        description: '',
        year: '',
        price: '',
        make: '',
        model: '',
        version: '',
        kilometers: 0,
        link_ml: '',
        color: '',
        fuel_type: '',
        transmission: '',
        vehicle_body_type: ''
    });
    const [slides, setSlides] = useState([]);
    const id: any = useParams();
    const moneyFormat = (value: any) => "$ "+new Intl.NumberFormat().format(value);
    const kmFormat = (value: any) => new Intl.NumberFormat().format(value)+" KM";
    const [isModalOpenSimulador, setIsModalOpenSimulador] = useState(false);
    const [isModalOpenPago, setIsModalOpenPago]= useState(false);
    const [isModalOpenCita, setIsModalOpenCita]= useState(false);
    const [form] = Form.useForm();
    const [cuotaValue, setCuotaValue] = useState(72);
    const [cuotaMensual, setCuotaMensual] = useState(0);
    const [cuotaInicial, setCuotaInicial] = useState(0);
    const [maxPrecio, setMaxPrecio] = useState(0);
    //const [seguro, setSeguro] = useState(0);
    const [precio, setPrecio] = useState(0);
    const interes = 0.0190;
    
    useEffect(() => {
        CarsService.getById(id.id).then(async (resp : any) =>{
            setCar(resp.cars[0]);  
            setSlides(resp.imgs);
            let _description = resp.cars[0].description;
            let _elem: any = document.getElementById("description-car");
            _elem.innerHTML = "";
            _elem.innerHTML = _description; 
            let _precio = resp.cars[0].price;  
            setPrecio(_precio);          
            setCuotaInicial(_precio * 0.20);        
            //setSeguro((_precio * 400) / 1000000);  
            setMaxPrecio(_precio - (_precio * 0.30));
            calcular((_precio -(_precio * 0.20)), 72);      
        })
    }, []);

    const calcular = (_precio: any, plazo: any) =>{
        let p1 = (_precio) * interes;
        let p2 = (1 - (1 + interes)**(-plazo));
        setCuotaMensual(redondear((p1 / p2), 0));
    }

    function redondear(value: any, precision: number) {
		if (Number.isInteger(precision)) {
			var shift = Math.pow(10, precision);
			// Limited preventing decimal issue
			return (Math.round( value * shift + 0.00000000000001 ) / shift);
		} else {
			return Math.round(value);
		}
	} 
    const onChangeCuota = (newValue: number) => {
        setCuotaValue(newValue);
        calcular(precio - cuotaInicial, newValue);
    };
    const onChangeInicial = (inicial: number) =>{
        setCuotaInicial(inicial);
        calcular(precio - inicial, cuotaValue);
    }
    const showSimulador = () => {
        setIsModalOpenSimulador(true);
    };
    const handleCancel = () => {
        setIsModalOpenSimulador(false);
    };
    const handleCancelPago = () => {
        setIsModalOpenPago(false);
    };
    const showPago = () => {
        setIsModalOpenPago(true);
    };
    const handleCancelCita = () => {
        setIsModalOpenCita(false);
    };
    const showCita = () => {
        setIsModalOpenCita(true);
    };
    const marks: SliderMarks = {
        36: '36',
        48: '48',
        60: '60',
        72: '72',
        84: '84',
    }

    const goWs = () =>{
        let lk = 'https://api.whatsapp.com/send?phone=573143781090&text=%C2%A1Hola%20Triplo!%20Quiero%20seguir%20el%20proceso%20de%20compra%20del%20veh%C3%ADculo:%20'+car.link_ml+'%20';
        window.open(lk, '_blank');
    }

    const goHome = () =>{
        navigate("/");
    }

    const showMinicard = () => {
        let _elemt: any = document.getElementsByClassName("minicard-1")[0];
        _elemt.style.display = "inherit";
        _elemt.style.transition = "opacity 2s linear";
        _elemt.style.opacity = "1";
    }
    const noShowMinicard = () => {
        let _elemt: any = document.getElementsByClassName("minicard-1")[0];
        _elemt.style.display = "none";
        _elemt.style.transition = "opacity 2s linear";
        _elemt.style.opacity = "0";
    }
    const showMinicard2 = () => {
        let _elemt: any = document.getElementsByClassName("minicard-2")[0];
        _elemt.style.display = "inherit";
        _elemt.style.transition = "opacity 2s linear";
        _elemt.style.opacity = "1";      
    }
    const noShowMinicard2 = () => {
        let _elemt: any = document.getElementsByClassName("minicard-2")[0];
        _elemt.style.display = "none";
        _elemt.style.transition = "opacity 2s linear";
        _elemt.style.opacity = "0";  
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    }
    const formatter = (value: any) => {
        
        return `${moneyFormat(value)}`
    };
    const  generateRandomString = (num: number) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result1;
    }

  return (
    <Container>
        <Modal title="Agendar cita" open={isModalOpenCita} onCancel={handleCancelCita} width={1000} className="body-modal body-modal-3" footer={null}>
          <Row className="body-modal">
            <Col span={24} className='text-center'>
                <iframe src='https://outlook.office365.com/owa/calendar/TriploComercial@triplo.com.co/bookings/' width='100%' height='100%'></iframe>
            </Col>
          </Row>
        </Modal>
        <Modal title="Realizar pago" open={isModalOpenPago} onCancel={handleCancelPago} width={1000} className="body-modal body-modal-2" footer={null}>
          <Row className="body-modal">
            <Col span={24} className='text-center'>
                <p>Haz clic en el siguiente botón para completar el pago y separar el vehículo seleccionado</p>
                <PaymentForm reference={id+'-'+generateRandomString(10)+'-'+id} amount={100000000}/>
            </Col>
          </Row>
        </Modal>
        <Modal title="Simulador de crédito" open={isModalOpenSimulador} onCancel={handleCancel} width={1000} className="body-modal body-modal-2" footer={null}>
          <Row className="body-modal">
            <Col span={24}>
                <div className='form-group'>
                    <label>Selecciona tu cuota inicial</label>
                    <Slider tooltip={{ formatter}} defaultValue={30} railStyle={{ backgroundColor: '#ff860080' }} handleStyle={{ backgroundColor: '#7fc9ea', borderColor: '#7fc9ea', width:'20px', height:'20px', marginTop: '-10px'}} trackStyle={{ backgroundColor: '#ff8600'}} onChange={onChangeInicial} min={0} step={1000000} max={maxPrecio}
                    value={typeof cuotaInicial === 'number' ? cuotaInicial : 0}/>
                </div>
            </Col>
            <Col span={24}>
                <div className='form-group'>
                    <label>Selecciona el número de cuotas</label>
                    <Slider defaultValue={72}  min={36} max={84} 
                    onChange={onChangeCuota} value={typeof cuotaValue === 'number' ? cuotaValue : 72} railStyle={{ backgroundColor: '#ff860080' }} handleStyle={{ backgroundColor: '#7fc9ea', borderColor: '#7fc9ea', width:'20px', height:'20px', marginTop: '-10px'}} trackStyle={{ backgroundColor: '#ff8600'}}  marks={marks} step={12}/>
                </div>
            </Col>
            <Col span={8}>
                <div className='form-group'>
                    <label>Inicial</label>
                    <p>{ moneyFormat(cuotaInicial) }</p>
                </div>
            </Col>
            <Col span={8}>
                <div className='form-group'>
                    <label>Nro de cuotas</label>
                    <p>{ cuotaValue }</p>
                </div>
            </Col>            
            <Col span={8}>
                <div className='form-group'>
                    <label>Cuota mensual</label>
                    <p>{ moneyFormat(cuotaMensual) }</p>
                </div>
            </Col>
            <Col span={24}>
                <Collapse>
                    <Collapse.Panel key={1} header="¿Quieres enviar esta información a nuestros asesores?" showArrow={false}>
                        <div className='form-sim'>
                            <Form
                                name="basic"
                                form={form}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                requiredMark={false}>
                                <Row>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Nombre(s) y Apellido(s)"
                                            name="nombres"
                                            rules={[
                                                { required: true, message: 'El nombre y apellido es requerido' },
                                                { pattern: /^(?:\b\w+\b[\s\r\n]*){2}$/i, message: "Debe ingresar al menos un nombre y un apellido"}  
                                            ]}>
                                            <Input  />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Correo electrónico"
                                            name="correo"
                                            rules={[
                                                { required: true, message: 'El correo electrónico es requerido' },
                                                { type: 'email', message: 'Ingrese un correo electrónico válido'}
                                            ]}>
                                            <Input  />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Cédula"
                                            name="cedula"
                                            rules={[
                                                { required: true, message: 'La cédula es requerida' },
                                            ]}>
                                            <Input type="number"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Celular"
                                            name="celular"
                                            rules={[
                                                { required: true, message: 'El celular es requerido' },
                                                { len: 10, message: 'Debe contener diez digitos'}
                                            ]}>
                                            <Input type="number"/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                        <Form.Item
                                            label="Ciudad"
                                            name="ciudad"
                                            rules={[
                                                { required: true, message: 'La ciudad es requerida' },
                                            ]}>
                                            <Input type="text"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24} className='text-end'>
                                    <Button type="primary" htmlType="submit" className="btn2">
                                            ENVIAR
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Collapse.Panel>
                </Collapse>
            </Col>
            <Col span={24}>
                <p className='small'>** Las mensualidades están calculadas a una tasa promedio mensual de 1.9%, al plazo y al pago inicial seleccionado. La cuota mensual y tasa de financiación pueden variar según el perfil crediticio del cliente.</p>
            </Col>
          </Row>
        </Modal>
        <Row className='ccontainer'>
            <img src="/img/bg.webp" className="img-fluid img1" alt="Triplo Autos" />
            <img src="/img/sticker3.webp" className="img-fluid logo-c" alt="Car #1" onClick={goHome} />
            <Col span={24}>
                <Card className='card-custom'>
                    <Row>
                        <Col xs={12} className='text-start'>
                            <h1>{ car.make +' '+car.model+' '+car.version }</h1>
                            <p>{ car.year }</p>
                        </Col>
                        <Col xs={12} className='text-end'>
                            <p>Precio</p>
                            <h2>{ moneyFormat(car.price) }</h2>
                            <p>Descuento disponible</p>
                        </Col>
                    </Row>
                    <Row className='mt-30'>
                        <Col span={12} className='border-r'>
                            <Row className='mb25'>
                                <Col span={12}>
                                    <div className='caracteristica'>
                                        <img src='/img/icons/kilometraje.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ kmFormat(car.kilometers) }</p>
                                            <p>Kilometraje</p>
                                        </div>                                        
                                    </div>
                                </Col>
                                <Col span={12}>
                                <div className='caracteristica'>
                                        <img src='/img/icons/color.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ car.color }</p>
                                            <p>Color</p>
                                        </div>                                        
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb25'>
                                <Col span={12}>
                                    <div className='caracteristica'>
                                        <img src='/img/icons/combustible.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ car.fuel_type }</p>
                                            <p>Combustible</p>
                                        </div>                                        
                                    </div>
                                </Col>
                                <Col span={12}>
                                <div className='caracteristica'>
                                        <img src='/img/icons/transmision.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ car.transmission }</p>
                                            <p>Transmisión</p>
                                        </div>                                        
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb25'>
                                <Col span={12}>
                                    <div className='caracteristica'>
                                        <img src='/img/icons/version.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ car.version }</p>
                                            <p>Versión</p>
                                        </div>                                        
                                    </div>
                                </Col>
                                <Col span={12}>
                                <div className='caracteristica'>
                                        <img src='/img/icons/carroceria.png' alt='Triplo Autos' />
                                        <div>
                                            <p>{ car.vehicle_body_type }</p>
                                            <p>Carroceria</p>
                                        </div>                                        
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={6} className='text-center border-r'>
                            <p>Cuotas mensuales de</p>
                            <h2>{ moneyFormat(car.price) }</h2>
                            <a onClick={ showSimulador } className='lk'>Ingresar al simulador</a>
                            <a href="https://www.busqo.com/campanas/TriploVh/seguro-carro" target='_blank' className='btn-cotiza'>Cotizar seguro de mi vehículo</a>
                        </Col>
                        <Col span={6} className='text-center'>
                            <p className='pasesor'>Ponte en contacto con un asesor</p>
                            <img src="/img/icons/icon_what.webp" onClick={goWs} className="img-fluid icon-what" alt="Car #1" />  
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={24}>
                <div className="form-group ff1">
                    <label>Compartir: </label>
                    <WhatsappShareButton title={ car ? (car.make +' '+car.model+' '+car.version) : ''} url={"https://triplo.com.co/comprar/carro/detalle/"+id}>
                        <img className="icon1" src="/img/icons/what.png" alt='Triplo Autos' />    
                    </WhatsappShareButton>
                    <FacebookShareButton title={ car ? (car.make +' '+car.model+' '+car.version) : ''} url={"https://triplo.com.co/comprar/carro/detalle/"+id}>
                        <img className="icon1" src="/img/icons/face.png" alt='Triplo Autos' />
                    </FacebookShareButton>
                    <EmailShareButton title={ car ? (car.make +' '+car.model+' '+car.version) : ''} url={"https://triplo.com.co/comprar/carro/detalle/"+id}>
                        <img className="icon1" src="/img/icons/mail.png" alt='Triplo Autos' />
                    </EmailShareButton>
                </div>
            </Col>
        </Row>
        <Row className='ccontainer'>
            <Col span={24}>
                <img src={ car.img_main } className='imgs' alt='Triplo Autos'/>
            </Col>
        </Row>
        <Row className='ccontainer my-3'>
            {
                car.separate === 1 ?
                <Col xs={24}>
                    <p>Este vehículo ya se encuentra <span>separado</span></p>
                </Col> :
                <>
                    <Col span={12} className='text-center'>
                        <button className="btn btn-tipo2" onMouseEnter={showMinicard} onMouseLeave={noShowMinicard} onClick={ showPago }>Separar el carro</button>
                        <div className="minicard minicard-1">
                            <p>¡<span>Asegura</span> el carro de tus sueños y evita que alguien más se quede con él! Reservalo con <span>$1.000.000</span> y en caso de que te arrepientas realizamos la devolución del <span>100%</span></p>
                        </div>
                    </Col>
                    <Col span={12} className='text-center'>
                        <button className="btn btn-tipo2" onMouseEnter={showMinicard2} onMouseLeave={noShowMinicard2} onClick={ showCita }>Agendar cita</button>
                        <div className="minicard minicard-2">
                            <p><span>Agenda</span> tu cita con uno de nuestros asesores y conoce pronto tu <span>nuevo vehículo</span></p>
                        </div>
                    </Col>
                </>
            }
        </Row>
        <Row>
            <Col xs={24}>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <h1 className="titCar">&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                    </div>
                    <div className="slide-track2">
                        <div className="slide">
                            <h1 className="titCar">&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                        <div className="slide">
                            <h1 className="titCar" >&nbsp;Características del vehículo </h1>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='ccontainer my-3'>
            <Col span={12} className='description'>
                {
                    car.description !== '' ? <div id="description-car"></div> : ''
                }
            </Col>
            <Col span={12}>
                <div className="bgDesc"></div>
            </Col>
        </Row>
        <Row className='ccontainer my-3'>
            {
                slides.map(
                    (item, index) => (
                        <Col span={12} className='ma-2'>
                            <img src={item} key={index} className="img-fluid imgs" alt="Car #1" />
                        </Col>
                    )
                )
            }
        </Row>
    </Container>
  );
};

export default BuyDetail;