import React, { useReducer } from "react";
import { Context } from "./Context.jsx";
import { Reducer } from "./Reducer.jsx";
import { GET_STUDENTS } from "./types";
import { getStudents } from "../../services/Pinata/get";

export const Provider = ({ children }) => {
  // Estado inicial
  const initialState = {
    students: [],
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
  return (
    <div>
      <Context.Provider value={{ getStudentsData, students: state.students }}>
        {children}
      </Context.Provider>
    </div>
  );
};
