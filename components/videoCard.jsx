import Play from "@icons/play";
import img from "../public/video.jpg";
export default function VideoCard() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
      }}
    >
      <Play />
    </div>
  );
}
