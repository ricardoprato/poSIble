import { useRef, useState } from "react";
import { StudentList } from "../components/StudentList";
import { Pagination } from "../components/Pagination";

const students = [
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
  {
    fullName: "Miguel Angel",
    title: "Full Stack Developer",
    location: "Peru",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    avatar: "https://avatars.githubusercontent.com/Redf0xD",
  },
];

export const Students = () => {
  const studentPerPage = useRef(6);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * studentPerPage.current;
  const firstIndex = lastIndex - studentPerPage.current;
  const currentStudents = [...students].slice(firstIndex, lastIndex);

  return (
    <>
      <section className="p-2 grid gap-2 bg-complementary sm:grid-cols-2 min-h-screen">
        {currentStudents.length ? (
          currentStudents.map((prop) => (
            <>
              <StudentList key={prop.fullName} {...prop} />
            </>
          ))
        ) : (
          <h1>NO hay estudiantes para mostrar</h1>
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
