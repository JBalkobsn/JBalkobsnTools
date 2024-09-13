import React from "react";
import { useNavigate } from "react-router-dom";

const Tile = ({ tileRoute, tileName }) => {
  const navigate = useNavigate();

  const onTileClick = () => {
    navigate(tileRoute, { state: { loginNotify: true } });
  };

  return (
    <div
      onClick={onTileClick}
      style={{
        height: "10vh",
        width: "90%",
        overflow: "hidden",
        padding: "0",
        backgroundColor: "white",
        borderRadius: "20px",
        border: "solid blue",
        opacity: "0.5",
        cursor: "pointer",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="zoom"
    >
      <p style={{ textAlign: "center" }}>{tileName}</p>
    </div>
  );
};

export default Tile;
