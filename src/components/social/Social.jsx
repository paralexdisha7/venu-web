import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./Social.css";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
const Social = () => {
  return (
    <div>
      <h3>Connect On</h3>

      <ListGroup horizontal className="social-links">
        <ListGroup.Item className="link-s">
          <a href="https://instagram.com/venu.bamboo?igshid=MzRlODBiNWFlZA==">
            <BsInstagram />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="link-s">
          <a href="#">
            <BsFacebook />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="link-s">
          <a href="tel:+917447475745">
            <BsFillTelephoneFill />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="link-s">
          <a href="https://api.whatsapp.com/send?phone=+917447475745&text=Hello! I'm interested to buy Candles!">
            <BsWhatsapp />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Social;
