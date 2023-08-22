import { Card, Col, Row, Collapse  } from "antd";
import { Container } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import gifJson from "./gif_resultado.json";
import { useState } from "react";
import QuoteService from "../../services/quoteService";
import PriceService from "../../services/priceService";

const SaleDetail = () => {
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState(0);
    var id: any = useParams();
    const [showResult, setShowResult] = useState(false);

    const goHome = () =>{
        navigate("/");
    }

    const changeStyles = () =>{
        let _element: any = document.getElementById("headerSales");        
        if(_element.classList.contains('bg_header2')){
            _element.classList.remove('bg_header2');
        }else{
            _element.classList.add('bg_header2');
        }
    }
    const goResult = (_type: any) =>{
        QuoteService.get(id.id).then((resp: any) =>{
            let _data = resp.data[0];
            let _make = _data.make.replaceAll(' ', '-')
            let _url = "https://carros.tucarro.com.co/"+_make.toLowerCase()+"/"+_data.sname.toLowerCase()+"/"+_data.year+"_OrderId_PRICE_ITEM*CONDITION_2230581_NoIndex_True";
            let _dataTuCarro = {
                "url": _url,
                "category": _data.category,
                "status": _data.status,
                "keys": _data.key,
                "km": _data.km,
                "year": _data.year,
                "make": _make
            }
            QuoteService.getTuCarro(_dataTuCarro)
            .then((resp_tc: any) => {
                let price = resp_tc.respuesta.offer_price;
                PriceService.save({ "id": id.id, "price": price, "option": _type })
                .then(resp_p => { 
                    setShowResult(true); 
                });
            });
        })
    }

    return (
    
        !showResult ?  
        <Container>
            <Row className="row1" id="headerSales">
                <Col span={24} xs={24} sm={24} md={24}>
                    <img src="/img/sticker_result_2.webp" id="imgTP1"  alt="Triplo, Ventas, Compras, Colombia Bogota" className="imgSticker" onClick={ goHome }/> 
                    {/* <div className="bg_header d-none d-sm-block" id="headerSales"></div> */}
                </Col> 
                <Col span={24} className="text-right d-mobile d-mobile-3">
                    <p className="tit1">ELIGE TU OPCIÓN</p>
                    <p className="tit2">FAVORITA</p>
                </Col>
                <Col span={24} className="d-desktop"> 
                    <p className="p1">ELIGE TU OPCIÓN</p> 
                </Col> 
            </Row> 
            <Row className="row2 d-desktop" > 
                <Col span={24}> <p className="p1">FAVORITA</p> </Col> 
            </Row> 
            <Row className="row3 d-desktop3"> 
                <Col span={12} xs={24} sm={12} md={12} className="text-center"> 
                    <Card className="card-custom directa" onMouseEnter={ changeStyles } onMouseLeave={ changeStyles } onClick={() => goResult('directa') }> 
                        <img src="/img/conocer_oferta.webp" alt="Triplo Autos"  onClick={() => goResult('directa') }/> 
                        <div className="cbody"> 
                            <h1>Venta directa</h1> 
                            <h5>Te lo compramos en tiempo record</h5> 
                            <ul> 
                                <li> <h2>Precio preliminar en línea</h2> <p>Obtén un precio preliminar de  inmediato</p> </li> 
                                <li> <h2>Peritaje</h2> <p>La revisión va por nuestra cuenta. Solo sigue las  instrucciones para agendarla.</p> </li> 
                                <li> <h2>Documentación</h2> <p>¡Validamos el precio y listo!  Nos encargamos de toda la documentación necesaria y recibes el pago hasta en el mismo día.</p> </li>
                            </ul> 
                        </div> 
                    </Card> 
                </Col> 
                <Col span={12} xs={24} sm={12} md={12} className="text-center"> 
                    <Card className="card-custom consignacion" onMouseEnter={ changeStyles } onMouseLeave={ changeStyles } onClick={() => goResult('consignacion') }> 
                        <img src="/img/conocer_consignacion.webp" alt="Triplo Autos" onClick={() => goResult('consignacion') }/> 
                        <div className="cbody"> 
                            <h1>Consignación</h1> 
                            <h5>Nos encargamos de todo en la venta de tu vehículo</h5>
                            <Collapse accordion activeKey={activeKey} className="d-desktop"> 
                                <Collapse.Panel key={1} header={<div onMouseLeave={() => setActiveKey(0) } onMouseEnter={ () => setActiveKey(1)}>Fotos profesionales</div>} showArrow={false}>
                                    <p>Nos aseguramos de crear una publicación, <span>totalmente gratis,</span> con altos estándares de diseño y fotografia, detallando fuertemente tu vehículo.</p> 
                                </Collapse.Panel> 
                                <Collapse.Panel key={2} header={<div onMouseLeave={() => setActiveKey(0) } onMouseEnter={ () => setActiveKey(2)}>Red de contactos</div>} showArrow={false}> 
                                    <p>Aprovecha nuestra amplia red de contactos en la industria. Es probable que tengamos <span>listo un cliente</span> para tu vehículo.</p> 
                                </Collapse.Panel> 
                                <Collapse.Panel key={3} header={<div onMouseLeave={() => setActiveKey(0) } onMouseEnter={ () => setActiveKey(3)}>Lo hacemos por ti</div>} showArrow={false}> <p>No tienes que contestar llamadas, correos ni preocuparte por mostrar el carro. Nosotros nos encargamos de <span>todo el proceso</span> de una manera
                            segura, incluyendo la documentación.</p> 
                                </Collapse.Panel> 
                                <Collapse.Panel key={4} header={<div onMouseLeave={() => setActiveKey(0) } onMouseEnter={ () => setActiveKey(4)}>Facilitamos el negocio</div>} showArrow={false}> <p>Ofrecemos al cliente diferentes posibilidades de financiación y
                            retomas para hacer la venta de tu vehículo mas <span>sencilla y rápida</span></p>
                                </Collapse.Panel>
                                <Collapse.Panel key={5} header={<div onMouseLeave={() => setActiveKey(0) } onMouseEnter={ () => setActiveKey(5)}>Cuidamos tu bolsillo</div>} showArrow={false}> <p>Buscamos maximizar el precio de la venta de tu vehículo para <span>tu beneficio,</span> con un servicio costo efectivo.</p>
                                </Collapse.Panel>
                            </Collapse> 
                        </div> 
                    </Card> 
                </Col> 
            </Row> 
            <Row className="row3 d-mobile"> 
                <Col span={12} xs={24} sm={12} md={12} className="text-center"> 
                    <Card className="card-custom directa"> 
                        <img src="/img/conocer_oferta.webp" alt="Triplo Autos"  onClick={() => goResult('directa') }/> 
                        <div className="cbody"> 
                            <h1>Te lo compramos en tiempo record</h1> 
                            <h5 className="mostaza">Venta directa</h5> 
                            <ul> 
                                <li> <h2>Precio preliminar en línea</h2> <p>Obtén un precio preliminar de  inmediato</p> </li> 
                                <li> <h2>Peritaje</h2> <p>La revisión va por nuestra cuenta. Solo sigue las  instrucciones para agendarla.</p> </li> 
                                <li> <h2>Documentación</h2> <p>¡Validamos el precio y listo!  Nos encargamos de toda la documentación necesaria y recibes el pago hasta en el mismo día.</p> </li>
                            </ul> 
                        </div> 
                    </Card> 
                </Col> 
                <Col span={12} xs={24} sm={12} md={12} className="text-center"> 
                    <Card className="card-custom consignacion"> 
                        <img src="/img/conocer_consignacion.webp" alt="Triplo Autos" onClick={() => goResult('consignacion') }/> 
                        <div className="cbody"> 
                            <h1>Te ayudamos a venderlo al mejor precio</h1> 
                            <h5 className="mostaza">Consignación</h5>                           
                            <Collapse accordion className="d-mobile">
                                <Collapse.Panel key={1} header="Fotos profesionales">
                                    <p>Nos aseguramos de crear una publicación, <span>totalmente gratis,</span> con altos estándares de diseño y fotografia, detallando fuertemente tu vehículo.</p> 
                                </Collapse.Panel>
                                <Collapse.Panel key={2} header="Red de contactos"> 
                                    <p>Aprovecha nuestra amplia red de contactos en la industria. Es probable que tengamos <span>listo un cliente</span> para tu vehículo.</p> 
                                </Collapse.Panel> 
                                <Collapse.Panel key={3} header="Lo hacemos por ti"> <p>No tienes que contestar llamadas, correos ni preocuparte por mostrar el carro. Nosotros nos encargamos de <span>todo el proceso</span> de una manera segura, incluyendo la documentación.</p> 
                                </Collapse.Panel> 
                                <Collapse.Panel key={4} header="Facilitamos el negocio"> <p>Ofrecemos al cliente diferentes posibilidades de financiación y retomas para hacer la venta de tu vehículo mas <span>sencilla y rápida</span></p>
                                </Collapse.Panel>
                                <Collapse.Panel key={5} header="Cuidamos tu bolsillo"> <p>Buscamos maximizar el precio de la venta de tu vehículo para <span>tu beneficio,</span> con un servicio costo efectivo.</p>
                                </Collapse.Panel>
                            </Collapse> 
                        </div> 
                    </Card> 
                </Col> 
            </Row> 
        </Container>
        :
        <Container>
            <Row className="superior">
                <Col span={9} md={9} xs={1}></Col>
                <Col span={8} md={8} xs={22}>
                    <p className='tit'>¡Ya casi llegas a la meta!</p> 
                    <div className='wc'>
                        <Lottie animationData={gifJson} height={240} width={'75%'}  />    
                    </div> 
                </Col>
                <Col span={24}>
                    <div className='what-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </div>  
                </Col>
            </Row>
            <Row className="inferior">
                <Col span={24}>
                    <p className='text1'>Pronto recibirás un correo electrónico con los pasos a seguir. ¡También nos comunicaremos contigo por WhatsApp al teléfono que nos diste!</p>
                </Col>
            </Row>
            <Row className="custom-top">
                <Col span={12} xs={24} sm={12} md={12} className="text-center c1">
                    <img src="/img/sticker3.webp" className="img-sticker" alt="Triplo Autos" onClick={ goHome } />
                    <img src="/img/ninas.webp" className="img-ninas" alt="Triplo Autos"/>
                </Col>
            </Row>
        </Container>
        
        
    )
}
export default SaleDetail;