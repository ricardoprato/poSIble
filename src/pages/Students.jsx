import { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/students/Context.jsx";
import { StudentList } from "../components/StudentList";
import { Pagination } from "../components/Pagination";
import { getStudents } from "../services/Pinata/get.js";

export const Students = () => {
  const { students, getStudentsData } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const studentPerPage = useRef(6);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * studentPerPage.current;
  const firstIndex = lastIndex - studentPerPage.current;
  const currentStudents = [...students]?.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (!students.length) {
      setLoading(true);
      getStudentsData().then(() => setLoading(false));
    }
  }, []);
  return (
    <>
      <section className="p-2 grid gap-2 bg-complementary sm:grid-cols-2 min-h-screen">
        {!loading ? (
          currentStudents.length ? (
            currentStudents.map((prop) => (
              <>
                <StudentList key={prop.id} {...prop} />
              </>
            ))
          ) : (
            <p>NO hay estudiantes para mostrar</p>
          )
        ) : (
          <p>Cargando...</p>
        )}
      </section>
      <Pagination
        currentPage={currentPage}
        studentPerPage={studentPerPage}
        totalStudents={students.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
