import { withTranslation } from "react-i18next";
import { Container } from "./styles";
import { Col, Row, Carousel } from "antd";


const Team = () => {
  return (
    <Container id="quienes_somos">
      <Row className="bg">
        <Col span={24} className="prelative">
          <img src="/img/sticker.webp" alt="sticker" loading="lazy"/>
          <h1>Somos tu amigo nerd, que ama los carros y solo habla de ellos</h1>
          <p >Por eso, te ayudamos con la compra y/o venta de tu vehículo</p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Carousel effect="fade" autoplaySpeed={5000} autoplay className="cimages">
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/1.webp" />
                <img src="/img/slider/1-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/2.webp" />
                <img src="/img/slider/2-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/3.webp" />
                <img src="/img/slider/3-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/4.webp" />
                <img src="/img/slider/4-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/5.webp" />
                <img src="/img/slider/5-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/6.webp" />
                <img src="/img/slider/6-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/7.webp" />
                <img src="/img/slider/7-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/8.webp" />
                <img src="/img/slider/8-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/9.webp" />
                <img src="/img/slider/9-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
            <div>
              <picture>
                <source media="(min-width:576px)" srcSet="/img/slider/10.webp" />
                <img src="/img/slider/10-mob.webp" loading="lazy" alt='Quienes somos' />
              </picture>
            </div>
          </Carousel>
          <p className="petiqueta">Algunos de los carros que hemos vendido</p>
        </Col>
      </Row>
    </Container>
  );
};

export default withTranslation()(Team);
