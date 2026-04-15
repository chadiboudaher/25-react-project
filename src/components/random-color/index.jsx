import { useEffect, useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randonColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randonColorUtility(hex.length)];
    }

    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randonColorUtility(256);
    const g = randonColorUtility(256);
    const b = randonColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  //   useEffect(() => {
  //     if (typeOfColor === "rgb") {
  //       handleCreateRandomRgbColor();
  //     } else {
  //       handleCreateRandomHexColor();
  //     }
  //   }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB" : "HEX"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
