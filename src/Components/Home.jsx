import React, { Fragment } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer/>
    </Fragment>
  );
}

export default Home;
