import React from "react";
import "./program.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Program = () => {
    return (
        <>
         <Row className="justify-content-evenly mt-3 p-2">
            {/* Add TREATMENTS and text */}
            <div className="treatments-info">
              <span className="small-text">TREATMENTS</span>
              <div style={{ justifyContent: "space-between" }} className="d-flex">
              <h1 className="big-text">Overcoming hair loss is finally easy!</h1>
              <a href="#" style={{ color: "black" }}  className="view-more mt-4 ">View all treatments</a>
              </div>
             
            </div>
            </Row>
          <Row className="justify-content-evenly">
            <Col md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scalpmicrousa.com/wp-content/uploads/2023/03/scalp-micropigmentation-hairline-1-411x260.png"
                />
                <Card.Body className="card-body">
                  <Card.Title cla>Hairline</Card.Title>
                  <Card.Text>
                    Restore your hairline, add density to thinning areas, and frame your face with scalp micropigmentation. Improve your look and confidence with our innovative hair loss solution.
                  </Card.Text>
                               <a href="#" style={{ color: "black" }}  className="view-more mt-4 ">Learn more</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scalpmicrousa.com/wp-content/uploads/2023/03/scalp-micropigmentation-hairline-1-411x260.png"
                />
                <Card.Body className="card-body">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                  <a href="#" style={{ color: "black", marginTop: "10px" }}  className="view-more mt-4 ">Learn more</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://scalpmicrousa.com/wp-content/uploads/2023/03/hair-transplant-scar-camouflage-411x260.jpg"
                />
                <Card.Body className="card-body">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <a href="#" style={{ color: "black" }}  className="view-more mt-4 ">Learn more</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
    );
};

export default Program;
