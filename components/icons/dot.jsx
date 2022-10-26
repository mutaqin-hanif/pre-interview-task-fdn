export default function Dot({ active }) {
  return (
    <svg
      width="18"
      height="18"
      fill={active ? "#DB284E" : "#FDDAE0"}
      viewBox="0 0 32 32"
    >
      <circle r="10" cx="16" cy="16" />
    </svg>
  );
}
