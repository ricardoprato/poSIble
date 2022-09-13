import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentComponent from "../components/StudentComponent";
import { Context } from "../context/students/Context";

export const Student = () => {
  const { id } = useParams();
  const { getSingleStudentData, resetStudent, student } = useContext(Context);
  useEffect(() => {
    getSingleStudentData(id);
    return () => resetStudent();
  }, []);
  console.log({ student, id });
  return (
    <>
      <StudentComponent {...student} />
    </>
  );
};
