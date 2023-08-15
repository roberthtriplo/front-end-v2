import { Col, Row  } from "antd";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarsService from "../../services/carsService";
const SaleResponse = () => {
    const [link, setLink] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        let idCar: any = localStorage.getItem("car_id_wompi") ? localStorage.getItem("car_id_wompi") : 0; 
        // CarsService.getById(parseInt(idCar)).then((data: any) => {
        //     setLink('https://api.whatsapp.com/send?phone=573143781090&text=%C2%A1Hola%20Triplo!%20Quiero%20acelerar%20el%20proceso%20de%20compra%20del%20veh%C3%ADculo:%20'+data.cars[0].link_ml+'%20');
        //     let _data = {
        //         id: idCar,
        //         value: 1
        //     }
        //     CarsService.updateSeparate(_data).then(resp =>{
        //         console.log("Done");
        //         localStorage.removeItem("car_id_wompi");
        //     })
        // }).catch(error => console.log(error));
    }, [])
    
    const goHome = () =>{
        navigate("/");
    }


    return (
        <Container>
            <Row className="row1">
                
            </Row>
            <Row className="row2">
                <img src="/img/sticker2.webp" onClick={ goHome} className="img-fluid st" alt="Car #1" />
                <Col span={18} offset={3} >
                    <h2>VE PREPARANDO LAS MALETAS PORQUE DENTRO DE POCO RE-ESTRENARÁS CARRO</h2>
                    <p>En Triplo estamos muy felices de que hayas hecho la separación de tú proximo carro. Nos encantaría ayudar a la gente en <span>Colombia</span> a encontrar el carro que mas se ajuste a sus necesidades y gustos, y estamos muy agradecidos de que hayas confiado en nosotros para ser parte de este proceso</p>
                    <p>Pronto uno de nuestros asesores se pondrá en contacto contigo al número de teléfono que relacionaste en el proceso de pago para continuar con todo el proceso. Si quieres acelerar este proceso, puedes ponerte en contacto con el/ella haciendo <a href={link} target="_blank">click aquí</a></p>
                </Col>
            </Row>
        </Container>
    )
}
export default SaleResponse;