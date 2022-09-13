import ejemplo from "../../assets/ejemplo3.png";
import { NavLink } from "react-router-dom";
import { useConnect } from "../../hooks/useConnect";

export const Hero = () => {
  const { connect } = useConnect();
  return (
    <section className="relative bg-complementary">
      <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-complementary sm:to-complementary"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left sm:mx-auto">
          <h2 className="text-3xl text-white font-extrabold sm:text-5xl">
            El lugar donde la educación es
            <br />
            <strong className="font-extrabold text-secondary sm:block">
              poSíble💻
            </strong>
          </h2>

          <p className="max-w-lg mt-4 sm:leading-relaxed text-white sm:text-xl">
            Accede a la plataforma de Crowdfunding que financia tus sueños🚀 y
            te permite acceder a la educación en la plataforma educativa de tu
            preferencia.
          </p>

          <div className="inline-flex items-center justify-center flex-wrap gap-4 mt-8 mb-8 text-center">
            <button
              onClick={connect}
              className="block w-full px-12 py-3 text-md font-medium text-black rounded shadow bg-primary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-red focus:outline-none focus:ring"
            >
              Registrarte
            </button>
            <NavLink
              to="/estudiantes"
              className="block w-full px-12 py-3 text-md font-medium text-black rounded shadow bg-secondary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-red focus:outline-none focus:ring"
            >
              Proyecto
            </NavLink>
          </div>
        </div>
        <div className="max-w-xl text-center sm:text-left sm:mx-auto">
          <img src={ejemplo} alt="Ejemplo" />
        </div>
      </div>
    </section>
  );
};
