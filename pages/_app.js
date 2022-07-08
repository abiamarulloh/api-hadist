import Footer from "../layouts/footer";
import Header from "../layouts/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

library.add(fas);

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
