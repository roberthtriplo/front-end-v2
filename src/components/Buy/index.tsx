import { useEffect, useState } from 'react';
import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Col, Row} from "antd";
import CarsService from '../../services/carsService';
import { Link } from 'react-router-dom';

const Buy = () => {
  const [cars, setCars] = useState([]);
  const [showMas, setShowMas] = useState(false);
  const moneyFormat = (value: any) => "$ "+new Intl.NumberFormat().format(value);
  const verMas = () =>{
    setShowMas(!showMas);
  }
  useEffect(() => {
    CarsService.getAll("").then((resp : any) =>{
      setCars(resp.cars);
    })
  }, []);

  return (
    <Container id="buy">
      <Row className="bg">
        <Col span={24}>
          <img alt="Triplo Autos" src="/img/logo.webp" />
        </Col>
      </Row>
      <Row className="p80">
        <Col span={12}>
          <h1 className="titleh1">"COOL CARS FOR COOL KIDS"</h1>
          <p className="subtitle">Escoge el tuyo</p>
        </Col>
        <Col span={12}>

        </Col>
      </Row>
      <Row className="p80">
      {
          cars.length > 0 ? cars.slice(0, showMas ? cars.length : 4).map(
            (item: any, index) => (
              <Col span={24} xs={24} md={12} key={index}>
                <Link to={"/comprar/detalle/"+item.id}>
                  <div className='img-wrap' >
                      <img src={item.img_main } className="img-fluid img__img img_car" alt="Car #1" loading="lazy" />
                      <div className="description">
                          <div className='content'>
                              <p>{ item.make }</p>
                              <p>{ item.model }</p>
                              <p>{ moneyFormat(item.price) }</p>
                          </div>
                      </div>
                  </div>  
                </Link>                  
              </Col>
            )
        ): 
        (
            <Col span={24} className='text-center'>
                <h3>La búsqueda no arrojó ningún resultado.</h3>
            </Col>
        )
        }
      </Row>
      <Row>
          <Col xs={24} className='text-center'>
              {
                  showMas ? '' : (<p className='verMas' onClick={verMas}>Ver más</p>)
              }                    
          </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(Buy);
