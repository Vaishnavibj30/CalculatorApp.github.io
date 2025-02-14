import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString()); // eval is used carefully
    } catch {
      setResult("Error");
    }
  };

  const theme = {
    background: "#f9f9f9",
    button: "#ddd",
    text: "black",
    display: "#fff",
    buttonHover: "#ccc",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "25px", backgroundColor: theme.background, color: theme.text, borderRadius: "15px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", maxWidth: "350px", marginLeft: "550px" }}>
      <div style={{ width: "100%", padding: "20px", marginBottom: "15px", textAlign: "right", backgroundColor: theme.display, borderRadius: "10px", boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.5)", fontSize: "20px" }}>
        <div style={{ color: theme.text, marginBottom: "5px" }}>{input || "0"}</div>
        <div style={{ fontSize: "26px", fontWeight: "bold" }}>{result}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {"C ( ) % / 7 8 9 * 4 5 6 - 1 2 3 + 0 . =".split(" ")
          .map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? calculateResult() : char === "C" ? clearInput() : handleClick(char)
              }
              style={{
                padding: "15px",
                fontSize: "18px",
                fontWeight: "bold",
                backgroundColor: theme.button,
                color: theme.text,
                borderRadius: "40%",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                width: "50px",
                height: "50px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover)}
              onMouseOut={(e) => (e.target.style.backgroundColor = theme.button)}
            >
              {char}
            </button>
          ))}
      </div>
    </div>
  );
}
