import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./containers/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Student } from "./pages/Student";
import { Students } from "./pages/Students";

import { Form } from "./pages/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/estudiantes" element={<Students />} />
          <Route exact path="/estudiantes/:id" element={<Student />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
