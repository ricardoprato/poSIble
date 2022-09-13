import { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/students/Context.jsx";
import { StudentList } from "../components/StudentList";
import { Pagination } from "../components/Pagination";
import { Loader } from "../components/Loader";

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
    <div className="min-h-screen bg-complementary">
      {!loading ? (
        currentStudents.length ? (
          <section className="p-2 grid gap-2  sm:grid-cols-2 ">
            {currentStudents.map((prop) => (
              <>
                <StudentList key={prop.id} {...prop} />
              </>
            ))}
          </section>
        ) : (
          <div className="flex flex-col gap-4  items-center ">
            <div class="px-4 py-3 text-white bg-primary w-full">
              <p class="text-sm font-medium text-center">
                No hay estudiantes para mostrar
              </p>
            </div>
          </div>
        )
      ) : (
        <div className="grid place-items-center min-h-screen">
          <Loader />
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        studentPerPage={studentPerPage}
        totalStudents={students.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
