import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        {/* ... (Código existente) ... */}

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Diseños Bordados</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Contenido de la sección de productos */}
        <FooterSection />

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
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
     <h2>Información del Producto</h2>
      <h5>Diseños , Precio, Tiempo </h5>
 
    </div>



  );
};
