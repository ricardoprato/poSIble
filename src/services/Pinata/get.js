import axios from "axios";
import { gateway, url } from "./const.js";
const jwt = import.meta.env.VITE_PINATA_JWT;

export const getStudents = async () => {
  const config = {
    method: "get",
    url: `${url}/data/pinList?status=pinned&pinSizeMin=100`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  const res = await axios(config);
  const promises = await res?.data.rows.map(async ({ ipfs_pin_hash }) => {
    const res = await axios(`${gateway}/ipfs/${ipfs_pin_hash}`);
    return { ...res?.data, id: ipfs_pin_hash };
  });
  let students = await Promise.allSettled(promises);
  students = students
    .filter((student) => student.status === "fulfilled")
    .map((student) => ({ ...student.value, ...students.id }));

  return [...students];
};
