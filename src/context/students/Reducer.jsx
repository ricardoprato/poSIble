import { GET_STUDENTS, GET_SINGLE_STUDENT } from "./types";

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
    case GET_SINGLE_STUDENT:
      return {
        ...state,
        student: payload,
      };
  }
};
