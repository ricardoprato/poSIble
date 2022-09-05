import { NavLink } from "react-router-dom";
import { PlatformCard } from "../PlatformCard";
import PlatziImg from "../../assets/platzi.png";
import EDTeamImg from "../../assets/EDteam-isotipo.png";
import CoderHouseImg from "../../assets/coderhouse_logo.png";
import BlockdemyImg from "../../assets/blockdemy.jpg";
import CrehanaImg from "../../assets/crehana.png";
import CodigoFacilitoImg from "../../assets/codigofacilito.png";

export const Platforms = () => {
  return (
    <section className="text-white bg-darkBlue">
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl text-secondary font-bold sm:text-4xl">
            Plataformas
          </h2>
          <p className="mt-4">
             Estamos asociados con varias de las plataformas de educación online más importantes en tu idioma para que puedas desarrollar tu carrera y talentos, en la plataforma de tu preferencia y puedas hacer realidad tus sueños.
          </p>
        </div>

         <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <PlatformCard name='Platzi' image={PlatziImg} description='Crece profesionalmente con más de 1000 cursos en línea con los contenidos más innovadores. Encuentra en Platzi más de 1000 cursos en líneas para mejorar tus habilidades laborales.'/>
                    <PlatformCard name='CoderHouse' image={CoderHouseImg} description='Toma clases a distancia, con profesores expertos y con una metodología 100% práctica. Los Mejores Cursos de Marketing Digital, Programación y Diseño.'/>
                    <PlatformCard name='EDTeam' image={EDTeamImg} description='Aprende programación, diseño y emprendimiento en español con profesores que aman enseñar. Invierte en tu conocimiento. Tu futuro te está esperando.'/>
                    <PlatformCard name='Blockdemy' image={BlockdemyImg} description='Blockdemy es un hub educativo dedicado a la formación y posicionamiento de profesionales en el ecosistema de tecnología y Blockchain.'/>
                    <PlatformCard name='Crehana' image={CrehanaImg} description='Academias de Marketing, Liderazgo, Bussines, Analytics, Ventas, UX, Programación y más. Acceso ilimitado a +1000 cursos por todo 1 año para alcanzar tu protencial profesional.'/>
                    <PlatformCard name='CodigoFacilito' image={CodigoFacilitoImg} description='Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con Python. React, Go, Laravel. Desarrollo móvil con Android, Flutter y mucho más desde tu casa.'/>
                </div>
        <div className="mt-12 text-center">
          <NavLink to="/form" className="inline-flex items-center px-8 py-3 mt-8 text-black bg-secondary border-2 border-black rounded hover:bg-transparent hover:border-white hover:text-white active:text-secondary focus:outline-none focus:ring">
              <span className="text-sm font-medium">Aplicar</span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
