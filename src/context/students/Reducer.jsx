import { GET_STUDENTS } from "./types";

export const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
  }
};
