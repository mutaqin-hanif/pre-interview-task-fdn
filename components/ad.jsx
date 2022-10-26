export default function Ad({ width, height, text }) {
  return (
    <div
      style={{
        width,
        height,
        border: "1px solid #B0B0B0",
        backgroundColor: "#D8D8D8",
        color: "#5A5A5A",
        display: "grid",
        placeItems: "center",
        fontSize: "1.5rem",
        fontWeight: 700,
      }}
    >
      {text}
    </div>
  );
}
