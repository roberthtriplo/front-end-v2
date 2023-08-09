import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactContainer} from "./styles";

const Contact = () => {
  return (
    <ContactContainer>
      <Row >
        <Col xs={24}>
          <div className='mural'>
            <picture>
              <source media="(min-width:576px)" srcSet="/img/mural.webp" />
              <img src="/img/mural_mb.webp" loading="lazy" alt='Mural Triplo Autos' />
            </picture>
          </div>
        </Col>
        <Col xs={24}>
          <Slide direction="left">          
            <div className="slider">
            <img src="/img/aliados.webp" alt="Aliados Triplo" className='sticker'/>
              <div className="slide-track">
                <div className="slide">
                  <img src="/img/aliados/mercadolibre.webp" alt="Mercado Libre Triplo"/>
                </div>
                <div className="slide">
                  <img src="/img/aliados/alfred.webp" alt="Alfred Triplo"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/colserauto.webp" alt="Colserauto Triplo"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/phenomenon.png" alt="Phenomenon"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/elperito.png" alt="El perito"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/busqo.png" alt="Busqo"/>
                </div>
                <div className="slide">
                  <img src="/img/aliados/ballistic.png" alt="Ballistic"/>
                </div>
                <div className="slide">
                  <img src="/img/aliados/mercadolibre.webp" alt="Mercado Libre Triplo"/>
                </div>
                <div className="slide">
                  <img src="/img/aliados/alfred.webp" alt="Alfred Triplo"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/colserauto.webp" alt="Colserauto Triplo"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/phenomenon.png" alt="Phenomenon"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/elperito.png" alt="El perito"/>
                </div>
                <div className="slide">
                    <img src="/img/aliados/busqo.png" alt="Busqo"/>
                </div>
                <div className="slide">
                  <img src="/img/aliados/ballistic.png" alt="Ballistic"/>
                </div>
              </div>
            </div>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
