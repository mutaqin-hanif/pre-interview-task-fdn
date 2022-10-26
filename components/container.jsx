export default function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        marginInline: "auto",
        maxWidth: "80%",
        flexDirection: "column",
        alignItems: "center",
        marginBlock: "1rem",
        gap: "2rem",
      }}
    >
      {children}
    </div>
  );
}
