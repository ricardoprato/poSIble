import { useEffect, useState } from "react";
import { getCountries } from "../../services/getCountries";
export const useCountries = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    getCountries().then((res) => {
      res = res.map((country) => {
        return country.name.nativeName.spa.official;
      });
      setCountries(res);
    });
  }, []);
  return [countries];
};
