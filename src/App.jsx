import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./containers/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Student } from "./pages/Student";
import { Students } from "./pages/Students";
import { Faq } from "./pages/Faq";

import { Form } from "./pages/Form";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/estudiantes" element={<Students />} />
          <Route exact path="/estudiantes/:id" element={<Student />} />
          <Route exact path="/profile" element={<Form />} />
          <Route exact path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
