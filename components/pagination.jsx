import ChevronLeft from "@icons/chevronLeft";
import ChevronRight from "@icons/chevronRight";
import Dot from "@icons/dot";

export default function Pagination({ total, current, setCurrent }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ChevronLeft active={current > 1} />
      {Array.from({ length: total }, (_, i) => {
        return (
          <div
            onClick={() => setCurrent(i + 1)}
            style={{ cursor: "pointer" }}
            key={i}
          >
            <Dot active={current === i + 1} />
          </div>
        );
      })}
      <ChevronRight active={current !== total} />
    </div>
  );
}
