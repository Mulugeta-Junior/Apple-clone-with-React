import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "./css/bootstrap.css";

import Navigation from "./main body/Nav/Navigation";
// import HeaderLink from "./Componenet/main body/Header/";
import Main from "./main body/mainall";
import Footer from "./main body/Footer";
import Mac from "./Componenet2/Mac";
import Cart from "./Componenet2/cart";
import Ipad from "./Componenet2/ipad";
import Iphone from "./Componenet2/iphone";
import Music from "./Componenet2/music";
import Support from "./Componenet2/support";
import Tv from "./Componenet2/Tv";
import Watch from "./Componenet2/watch";
import Four04 from "./Componenet2/Four04";
import YoutubeVideos from "./Componenet2/YoutubeVideos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="Iphone" element={<Iphone />} />
        <Route path="Ipad" element={<Ipad />} />
        <Route path="Watch" element={<Watch />} />
        <Route path="Tv" element={<Tv />} />
        <Route path="Music" element={<Music />} />
        <Route path="Support" element={<Support />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
      <YoutubeVideos />
      <Footer />
    </div>
  );
}

export default App;
