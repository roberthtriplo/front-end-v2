import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Extra,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterSection id="contactanos">
        <Container>
          <Row>
            <Col span={24}>
            <h1>CONTÁCTANOS</h1>
            <p>Cuando quieras</p>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container>
          <Row>
            <Col span={24} className="text-center">
              <a href="#">info@triplo.com.co</a>
            </Col>
          </Row>
          <Row className="pfooter">
            <Col span={12}>
              <p>Todos los derechos reservados © 2022</p>
            </Col>
            <Col span={12} className="text-end">
              <a href="#">Términos de uso</a>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
