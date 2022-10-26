import Star from "@icons/star";

export default function Rating({ value }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i + 1 < value) {
          return <Star outlined={false} key={i} />;
        }
        return <Star key={i} />;
      })}
    </div>
  );
}
