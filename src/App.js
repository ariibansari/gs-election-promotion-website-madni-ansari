import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {

  let mounted = false
  useEffect(() => {
    if (!mounted) {
      mounted = true
      ReactGA.initialize("G-TGWDM03M0F");
    }
  }, [])

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
