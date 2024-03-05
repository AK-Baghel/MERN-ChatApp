import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Chatpage from "./pages/Chatpage"

function App() {

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="MERN Chat App" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/api" element={<Chatpage />} />
      </Routes>
    </>
  )
}

export default App
