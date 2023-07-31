import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  let mounted = false
  useEffect(() => {
    if (!mounted) {
      mounted = true
      AOS.init({
        easing: 'ease-in-out',
        duration: 800,
        offset: 50, // delay the animation until the element is 200 pixels from the viewport
      });
      AOS.refresh();
    }
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
