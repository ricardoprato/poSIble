import axios from "axios";
const jwt = import.meta.env.VITE_PINATA_JWT;
import { url } from "./const.js";
export const postStudents = async ({
  name,
  description,
  occupation,
  country,
  platform,
}) => {
  const data = JSON.stringify({
    pinataContent: {
      name: name,
      description: description,
      occupation: occupation,
      country: country,
      platform: platform,
    },
  });
  var config = {
    method: "post",
    url: `${url}/pinning/pinJSONToIPFS`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    data: data,
  };
  const res = await axios(config);

  console.log(res.data);
};
