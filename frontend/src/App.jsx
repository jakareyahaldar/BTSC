import { BrowserRouter, Routes, Route } from "react-router-dom"

import BottomBar from "./Components/BottomBar.jsx"
import NavBar from "./Components/Navbar/Navbar.jsx"
import Home from "./Pages/Home/Home.jsx"
import PdfBoi from "./Pages/PdfBoi/PdfBoi.jsx"
import Videos from "./Pages/Videos/Videos.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <BottomBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdf-books" element={<PdfBoi />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
