import Ad from "components/ad";
import Content from "components/layout/content";
import Footer from "components/layout/footer";
import Header from "components/layout/header";
import { Provider } from "react-redux";
import store from "redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
      <Footer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Ad
          height={50}
          width={970}
          text="Bottom Frame 970x50, 468x60, 320x50"
        />
      </div>
    </Provider>
  );
}
