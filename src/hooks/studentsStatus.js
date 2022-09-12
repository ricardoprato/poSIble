import { AppContext } from "@context/AppContext";
import EthersMethod from "@utils/ether";
import { useWeb3React } from "@web3-react/core";
import { useContext, useMemo, useState } from "react";
import { usePercent } from "./truncatedAddress";

const studentsStatus = () => {
  const { library, chainId, active } = useWeb3React();
  const [student, setStudent] = useState(0);
  const [description, setDescription] = useState(0);
  const [ocupation, setOcupation] = useState(0);
  const [country, setCountry] = useState(0);
  const [status, setStatus] = useState(false);

  const getData = async () => {
    if (active) {
      let web3;

      web3 = new EthersMethod(chainId, library?.ethers);

      const [
        studentId, 
        descriptionValue, 
        ocupationValue,
        countryValue,
        finished
      ] = await Promise.all([
        web3.student(),
        web3.description(),
        web3.ocupation(),
        web3.country(),
        web3.finished()
      ]);
      setStudent(studentId);
      setDescription(descriptionValue);
      setOcupation(ocupationValue);
      setCountry(countryValue);
      setStatus(finished !== undefined);
    }
  };

  useMemo(() => {
    getData();
  }, [library, chainId, active]);

  return {
    student,
    description,
    ocupation,
    country,
    status
  }
};