import { Children } from "react";
import Header from "./Navbar";
import BeforFoter from "./BeforFoter";
import Footer from "./Footer";


function layout({children}) {
    return (
        <>
        <Header /> { children } <Footer />
        </>
        
  )
}

export default layout