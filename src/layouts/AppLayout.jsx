import * as React from "react";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import { AppBar } from "../components";

const AppLayout = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#202124",
        height: "100vh",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default AppLayout;
