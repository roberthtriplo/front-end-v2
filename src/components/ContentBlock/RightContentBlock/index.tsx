import { Row, Col, Carousel, Button  } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
} from "./styles";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer className="header_home">
      <Fade direction="right">
        <Row id={id}>
          <Col span={24}>
            <Carousel autoplay effect="fade" dots={false} autoplaySpeed={10000}>
              <div>
                <picture>
                  <source media="(min-width:576px)" srcSet="/img/slider/foto1.webp" />
                  <img src="/img/slider/foto1MobN.webp" alt="Triplo autos" className="img_slider"/>
                </picture>                 
              </div>
              <div>
                <picture>
                  <source media="(min-width:576px)" srcSet="/img/slider/foto2.webp" />
                  <img src="/img/slider/foto2MobN.webp" alt="Triplo autos" className="img_slider"/>
                </picture>
              </div>
              <div>
              <picture>
                  <source media="(min-width:576px)" srcSet="/img/slider/foto3.webp" />
                  <img src="/img/slider/foto4MobN.webp" alt="Triplo autos" className="img_slider"/>
                </picture>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Fade>
      <div className="d-desktop">
        <div className="buttons-group">
          <picture>
            <source media="(min-width:576px)" srcSet="/img/border_azul.webp" />
            <img src="/img/border_azul_mob.webp" className="img-blue"/>
          </picture>        
          <Button type="primary" className="btn1" onClick={ () => scrollTo('sale') }>Quiero Vender</Button>
          <Button type="primary" className="btn2" onClick={ () => scrollTo('buy') }>Quiero Comprar</Button>        
        </div>
        
        <div className="text-end-float">        
          <picture>
            <source media="(min-width:576px)" srcSet="/img/border_naranja.webp" />
            <img src="/img/border_naranja_mob.webp" className="img-orange"/>
          </picture>
          <h1>Usados, recomendados por amigos</h1>
          <p>Somos el amigo nerd que ama
          <br/>los carros y le gusta hablar de ellos</p>
        </div>
      </div>
      <div className="d-mobile">
        <Row className="content">
          <Col xs={24}>
            <h1>Usados, recomendados por amigos</h1>
            <p>Somos el amigo nerd que ama los carros y les gusta hablar de ellos.</p>
          </Col>
          <Col xs={24} className="text-center">
            <Button type="primary" className="btn1" onClick={ () => scrollTo('sale') }>Quiero Vender</Button>
            <Button type="primary" className="btn1" onClick={ () => scrollTo('buy') }>Quiero Comprar</Button>  
            <img src="/img/border_azul_mob.webp" className="img-blue"/>
          </Col>
        </Row>
      </div>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
