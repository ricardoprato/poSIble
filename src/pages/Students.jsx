import { StudentList } from "../components/StudentList";

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
  ,
];

export const Students = () => {
  console.log("students");
  return (
    <section>
      {students.map((prop) => (
        <StudentList {...prop} />
      ))}
    </section>
  );
};
