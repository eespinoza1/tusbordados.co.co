import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, dataprogramas, meta } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Productos | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Instalación de software</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Contenido de la sección de productos */}
        <FooterSection />

        <div className="mb-5 po_items_ho">
          {dataprogramas.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>Detalles</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contenido adicional */}
        {/* <div className="footer-section1">
          <h2>Instalacion de Software</h2>
          <h5>Diseños en Wilcom</h5>
          <h5>Diseños en Corel Draw</h5>
          <h5>Diseños en Opitek</h5>
        </div> */}

      </Container>
    </HelmetProvider>
  );
};

// Nueva sección de pie de página
const FooterSection = () => {
  return (
    <div className="footer-section">
      <h5>🚀 Potencia tu creatividad con nuestra instalación de software.<br/> <br/> 💻 Especialistas en diseño gráfico, textil y bordados. ¡Descubre soluciones tecnológicas para elevar tus proyectos!</h5>
    </div>
  );
};
