import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = lazy(() => import("../../components/ContactForm"));
const Sale = lazy(() => import("../../components/Sale"));
const Buy = lazy(() => import("../../components/Buy"));
const Team = lazy(() => import("../../components/Team"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <Header />
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <Sale />
      <Buy />
      <Team />
      <Contact /> 
      <Footer />
    </Container>
  );
};

export default Home;
