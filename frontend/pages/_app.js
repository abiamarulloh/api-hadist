import Footer from '../layouts/footer';
import Header from '../layouts/header';
import '../styles/styles.css';

export default function App({ Component, pageProps }) {

   return (
       <>
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
       </>
   )
}