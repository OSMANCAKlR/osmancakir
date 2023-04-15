import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </>

    )
    
}
