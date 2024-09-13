import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Tiles } from "../constants";
import Tile from "../components/Tile";

const Home = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          height: "95vh",
          overflow: "visible",
          // padding: '0',
          // backgroundColor: 'white',
          borderRadius: "20px",
          // border: 'solid blue',
          // opacity: '1'

          alignContent: "top",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Row>
          {Tiles.map((tile, index) => (
            <Col style={{ padding: "2%" }} key={tile.tileRoute}>
              <Tile tileRoute={tile.tileRoute} tileName={tile.tileName} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
