import React, { useState } from "react";
import { validator } from "./utils.js";
import { useCountries } from "../../customHooks/useCountries/";
export const FormComponent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    country: "República Dominicana",
    platform: "Platzi",
  });
  const [errors, setErrors] = useState({});
  const [countries] = useCountries();
  const handleChange = (e) => {
    setErrors(validator({ ...form, [e.target.name]: e.target.value }));
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevSubmit = {
      name: form.name || " ",
      description: form.description || " ",
    };
    setErrors(validator(prevSubmit));
  };
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-secondary sm:text-3xl">
          ¡Empieza tu sueño aqui!
        </h1>

        <p className="max-w-md mx-auto mt-4 text-center text-white">
          Completa los campos correspondientes para conocer más acerca de ti
        </p>

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
              {errors?.name && <p className="text-secondary">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="name">Ocupación</label>
              <input class="w-full p-3 text-sm border-gray bg-lightGray rounded-lg" placeholder="A qué te dedicas" type="text" id="occupation" />
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
              <label htmlFor="platform">Plataforma</label>
              <nav class="flex flex-col space-y-1">
                <select name="platform" id="platform">
                  <option value="Platzi">Platzi (0.10 ETH)</option>
                  <option value="CoderHouse">CoderHouse (0.06)</option>
                  <option value="EDteam">EDteam (0.15 ETH)</option>
                  <option value="Blockdemy">Blockdemy (0.05 ETH)</option>
                  <option value="Crehana">Crehana (0.05 ETH)</option>
                  <option value="CodigoFacilito">Código Facilito (0.03 ETH)</option>
                </select>
              </nav>
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

            {/* <div>
              <label htmlFor="name">Cantidad Minima</label>
              <input type="number" name="Cantidad" id="" aria-label='' placeholder='Cantidad Mininima para donar' className='w-full p-3 border-gray-200 rounded-lg' />
            </div>

            <div>
              <label htmlFor="name">Fecha Limite</label>
              <input type="date" name="" id="" aria-label='' className='w-full p-3 border-gray-200 rounded-lg' />
            </div> */}

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
      </div>
    </div>
  );
};
