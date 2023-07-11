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
            <Carousel autoplay effect="fade" dots={false}>
              <div>
                <img src="/img/slider/foto1.webp" />
              </div>
              <div>
                <img src="/img/slider/foto2.webp" />
              </div>
              <div>
                <img src="/img/slider/foto3.webp" />
              </div>
            </Carousel>
          </Col>
        </Row>
        
      </Fade>
      <div className="buttons-group">
      <img src="/img/border_azul.webp" className="img-blue"/>
        <Button type="primary" className="btn1">Comprar</Button>
        <Button type="primary" className="btn2">Vender</Button>
      </div>
      
      <div className="text-end-float">
        <img src="/img/border_naranja.webp" className="img-orange"/>
        <h1>Usados, recomendados por amigos</h1>
        <p>Somos el amigo nerd que ama
        <br/>los carros y le gusta hablar de ellos</p>
      </div>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
