import React from "react";
import Analytics from "./component/Analytics";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
