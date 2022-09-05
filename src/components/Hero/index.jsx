import ejemplo from '../../assets/ejemplo3.png'
import { NavLink } from 'react-router-dom'

export const Hero = () => {
  return (
    <section class="relative bg-complementary">

      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-complementary sm:to-complementary"></div>

      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl text-center sm:text-left sm:mx-auto">
          <h2 className="text-3xl text-white font-extrabold sm:text-5xl">
            El lugar donde la educación es
            <br />
            <strong className="font-extrabold text-secondary sm:block">
              poSíble💻
            </strong>
          </h2>

          <p class="max-w-lg mt-4 sm:leading-relaxed text-white sm:text-xl">
            Accede a la plataforma de Crowdfunding que financia tus sueños🚀 y te permite acceder a la educación en la plataforma educativa de tu preferencia.
          </p>

          <div class="inline-flex items-center justify-center flex-wrap gap-4 mt-8 mb-8 text-center">
            <NavLink to='/form'>
              <a class="block w-full px-12 py-3 text-md font-medium text-black rounded shadow bg-primary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-red focus:outline-none focus:ring">
                Registrarte
              </a>
            </NavLink>
            <NavLink to='/estudiantes'>
              <a class="block w-full px-12 py-3 text-md font-medium text-black rounded shadow bg-secondary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-red focus:outline-none focus:ring">
                Proyecto
              </a>
            </NavLink>
          </div>
        </div>
        <div class="max-w-xl text-center sm:text-left sm:mx-auto">
          <img src={ejemplo} alt="Ejemplo" />
        </div>
      </div>
    </section>
  );
}