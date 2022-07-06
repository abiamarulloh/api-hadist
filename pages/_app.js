import Footer from "../layouts/footer";
import Header from "../layouts/header";
import "../styles/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
