import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { home } from "../assets";

const AppBar = () => {
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <Row className="h-20" style={{ backgroundColor: "#303134" }}>
      <Col xs={2}>
        <img
          src={home}
          alt="home"
          onClick={onHomeClick}
          className="zoom p-2"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </Col>
      <Col xs={8} style={{ textAlign: "center" }}>
        <a style={{ color: "#646cff", fontSize: "1.5rem", fontWeight: "600" }}>
          JBalkobsn Tools
        </a>
      </Col>
    </Row>
  );
};

export default AppBar;
