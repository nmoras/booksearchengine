import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";

const Layout = ({children}) => {
    return ( 
        <>
        <div class="container-sm">

            <Header/>
                {children}
            <Footer/>
        </div>
    </>
     );
}
 
export default Layout;