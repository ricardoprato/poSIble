import { validator } from "./utils.js";
import { useCountries } from "../../customHooks/useCountries/";
import { useState } from "react"; // storing data in the state
import { ethers } from "ethers"; // interacting with wallet
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { postStudents } from "../../services/Pinata/post.js";
import abi from "../../data/Crowdfunding.json";
import studentsStatus from "../../hooks/studentsStatus.js";

export const FormComponent = () => {
  const numStudents = studentsStatus();
  const [form, setForm] = useState({
    name: "",
    description: "",
    occupation: "",
    country: "República Dominicana",
    platform: "Platzi",
    avatar: "",
  });

  const [errors, setErrors] = useState({});
  const [isStudent, setIsStudent] = useLocalStorage("student", false);

  const [countries] = useCountries();

  const handleChange = (e) => {
    setErrors(validator({ ...form, [e.target.name]: e.target.value }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const prevSubmit = {
      name: form.name || " ",
      description: form.description || " ",
      occupation: form.occupation || " ",
      avatar:
        form.avatar ||
        "https://imgs.search.brave.com/rEwv3UEQ2OLLqm6TGy6nyy_vhas7EtHMfR2Mv1S2rAk/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS83OC03/ODYyOTNfMTI0MC14/LTEyNDAtMC1hdmF0/YXItcHJvZmlsZS1p/Y29uLXBuZy5wbmc",
    };
    setErrors(validator(prevSubmit));
    if (Object.keys(errors).length === 0) {
      postStudents(prevSubmit);
    }
    // let a = await this.signer.getAddress();
    // let CrowfundingContract = new ethers.Contract(
    //   "0x8e008d047744e9a4dd3850c10058ebef07b6c99d",
    //   abi,
    //   this.signer
    // );

    // CrowfundingContract.createNewStudent(form.name, form.description, form.occupation, form.country, form.platform)
    //   .then(() => {
    //     /* Reset form */
    //     form.name = "";
    //     form.description = "";
    //     form.occupation = "";
    //     form.country = "República Dominicana";
    //     form.platform = "Platzi";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // CrowfundingContract.on("studentCreated", (id, name, description, occupation, country, platform) => {
    //   // aqui se agrega el estudiante a la lista
    //   console.log(id, name, description, occupation, country, platform)
    // })
  };
  const handleClickStudent = () => {
    setIsStudent(!isStudent);
  };
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto min-h-screen">
        <h1 className="text-2xl font-bold text-center text-secondary sm:text-3xl">
          ¡Empieza tu sueño aqui!
        </h1>
        <p className="max-w-md mx-auto mt-4 text-center text-white">
          Completa los campos correspondientes para conocer más acerca de ti
        </p>
        <div className="p-8 flex justify-center gap-2 flex-col items-center ">
          <p className="text-white font-semibold">¿Eres estudiante?</p>
          <button
            htmlFor="AcceptConditions"
            className="relative w-16 h-9 cursor-pointer "
            onClick={handleClickStudent}
          >
            <span
              className={`absolute inset-0 w-full h-full rounded-full transition ${
                isStudent ? "bg-secondary" : "bg-primary"
              }`}
            ></span>

            <span
              className={`absolute inset-0 w-7 h-7 m-1 bg-white rounded-full transition peer-checked: after:flex after:justify-center after:items-center after:text-complementary after:font-bold after:transition ${
                isStudent
                  ? "after:content-['SI'] translate-x-8"
                  : "after:content-['NO']"
              }`}
            ></span>
          </button>
        </div>
        {isStudent && (
          <div className="p-8 mt-8 bg-white border-2 border-black rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name">Nombre Completo</label>
                <input
                  className="w-full p-3 text-sm border-gray bg-lightGray rounded-lg"
                  placeholder="Tu Nombre"
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors?.name && (
                  <p className="text-secondary">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="name">Ocupación</label>
                <input
                  className="w-full p-3 text-sm border-gray bg-lightGray rounded-lg"
                  placeholder="A qué te dedicas"
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                />
                {errors?.occupation && (
                  <p className="text-secondary">{errors.occupation}</p>
                )}
              </div>
              <div>
                <label htmlFor="name">Avatar</label>
                <input
                  className="w-full p-3 text-sm border-gray bg-lightGray rounded-lg"
                  placeholder="Imagen de perfil"
                  type="text"
                  id="avatar"
                  name="avatar"
                  value={form.avatar}
                  onChange={handleChange}
                />
                {errors?.avatar && (
                  <p className="text-secondary">{errors.avatar}</p>
                )}
              </div>
              <div>
                <label htmlFor="message">Descripción de ti</label>
                <textarea
                  className="w-full p-3 text-sm border-gray bg-lightGray rounded-lg"
                  placeholder="Cuentanos sobre ti y cómo planeas utilizar esta oportunidad para transformar tu vida y tu entorno"
                  rows="8"
                  id="message"
                  name="description"
                  onChange={handleChange}
                ></textarea>
                {errors?.description && (
                  <p className="text-secondary">{errors.description}</p>
                )}
              </div>
              <div>
                <label htmlFor="country">País</label>
                <nav className="flex flex-col space-y-1">
                  <select
                    onChange={handleChange}
                    value={form.country}
                    name="country"
                    id="platform"
                  >
                    {countries?.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </nav>
              </div>
              <div>
                <label htmlFor="platform">Plataforma</label>
                <nav className="flex flex-col space-y-1">
                  <select
                    onChange={handleChange}
                    value={form.platform}
                    name="platform"
                    id="platform"
                  >
                    <option value="Platzi">Platzi (0.10 ETH)</option>
                    <option value="CoderHouse">CoderHouse (0.06)</option>
                    <option value="EDteam">EDteam (0.15 ETH)</option>
                    <option value="Blockdemy">Blockdemy (0.05 ETH)</option>
                    <option value="Crehana">Crehana (0.05 ETH)</option>
                    <option value="CodigoFacilito">
                      Código Facilito (0.03 ETH)
                    </option>
                  </select>
                </nav>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={Object.keys(errors).length}
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-black bg-secondary border-2 border-black hover:bg-primary rounded-lg sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="font-medium"> Enviar </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
