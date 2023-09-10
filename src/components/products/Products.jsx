import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./products.css";
const Products = () => {
  return (
    <div className="products container">
      <h2>Our Products</h2>
      <div className="myCards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/BAMBOO.png" />
          <Card.Body>
            <Card.Title>Candle 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, debitis.
            </Card.Text>

            <Link to={"/contact"}>
              <Button
                variant="success"
                className="go-btn-big"
              >
                Buy Now
              </Button>
            </Link>

            <h6> or buy on</h6>
            <Button variant="success" className="go-btn-small">
              <a href="tel:+917447475745">
                <MdCall />
              </a>
            </Button>
            <Button variant="success" className="go-btn-small">
              <a href="https://api.whatsapp.com/send?phone=+917447475745&text=Hello! I'm interested to buy Candle 1!">
                <BsWhatsapp />
              </a>
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/BAMBOO.png" />
          <Card.Body>
            <Card.Title>Candle 2</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, debitis.
            </Card.Text>
            <Link to={"/contact"}>
              <Button
                variant="success"
                className="go-btn-big"
              >
                Buy Now
              </Button>
            </Link>
            <h6> or buy on</h6>
            <Button variant="success" className="go-btn-small">
              <a href="tel:+917447475745">
                <MdCall />
              </a>
            </Button>
            <Button variant="success" className="go-btn-small">
              <a href="https://api.whatsapp.com/send?phone=+917447475745&text=Hello! I'm interested to buy Candle 2!">
                <BsWhatsapp />
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Products;
