import React, { useReducer } from "react";
import { Context } from "./Context.jsx";
import { Reducer } from "./Reducer.jsx";
import { GET_STUDENTS, GET_SINGLE_STUDENT } from "./types";
import { getStudents, getSingleStudent } from "../../services/Pinata/get";

export const Provider = ({ children }) => {
  // Estado inicial
  const initialState = {
    students: [],
    student: {},
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  ///funciones que modifican estados
  const getStudentsData = async () => {
    const students = await getStudents();
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });
  };
  const getSingleStudentData = async (id) => {
    const student = await getSingleStudent(id);
    dispatch({
      type: GET_SINGLE_STUDENT,
      payload: student,
    });
  };
  const resetStudent = () => {
    dispatch({
      type: GET_SINGLE_STUDENT,
      payload: {},
    });
  };
  return (
    <div>
      <Context.Provider
        value={{
          getStudentsData,
          students: state.students,
          getSingleStudentData,
          student: state.student,
          resetStudent,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
