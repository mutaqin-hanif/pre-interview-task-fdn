export default function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        marginInline: "auto",
        maxWidth: "min-content",
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
