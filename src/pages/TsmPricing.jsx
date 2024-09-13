import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataTable, RealmSelect } from "../components/";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";

const TsmPricing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [realmOne, setRealmOne] = useState();
  const [realmTwo, setRealmTwo] = useState();

  const getApiData = async () => {
    setLoading(true);
    return await axios
      .get(
        `https://api.jbalkobsn.it/api/v1/getTsmData?realmName1=${realmOne.value}&realmName2=${realmTwo.label}&ahId1=${realmOne.value}&ahId2=${realmTwo.value}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  };

  const RealmSelection = () => {
    return (
      <div>
        <Row>
          <Col xs={2} />
          <Col xs={4}>
            <RealmSelect setRealm={setRealmOne} />
          </Col>
          <Col xs={4}>
            <RealmSelect setRealm={setRealmTwo} />
          </Col>
          <Col xs={2}>
            <Button className="zoomSmall" onClick={getApiData}>
              Get Data
            </Button>
          </Col>
          <Col xs={2} />
        </Row>
      </div>
    );
  };

  if (loading) {
    return (
      <div>
        <Container
          fluid
          style={{
            height: "95vh",
            overflow: "scroll",
          }}
        >
          <RealmSelection />
          <div style={{ color: "white" }}>Lade Daten...</div>
        </Container>
      </div>
    );
  } else if (data.length < 1) {
    return (
      <div>
        <Container
          fluid
          style={{
            height: "95vh",
            overflow: "scroll",
          }}
        >
          <RealmSelection />
          <div style={{ color: "white" }}>Keine Daten verfügbar</div>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container
          fluid
          style={{
            height: "95vh",
            overflow: "scroll",
          }}
        >
          <RealmSelection />
          <h1 style={{ color: "white" }}>Daten-Tabelle</h1>
          <DataTable data={data} />
        </Container>
      </div>
    );
  }
};

export default TsmPricing;
