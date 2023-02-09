import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Layout = ({children}) => {
    return ( 
        <>
            <Header/>
                {children}
            <Footer/>
        </>
     );
}
 
export default Layout;