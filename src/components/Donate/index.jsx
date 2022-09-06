import background from '../../assets/student-3.jpg'
import { NavLink } from 'react-router-dom';

export const Donate = () => {
    return (
        <section className="relative bg-white">
            <img
                className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src={background}
                alt="Couple on a bed with a dog"
            />

            <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl text-darkBlue font-extrabold sm:text-5xl">
                        ¡Dona! Y dile Sí a transformar las vidas que construiran el futuro🤩
                    </h1>

                    <p className="max-w-lg mt-4 sm:leading-relaxed text-black sm:text-xl">
                        Haz parte de la comunidad de donadores que están transformando el futuro de cientos de personas por medio de la educación.
                    </p>

                    <div className="flex flex-wrap mt-8 text-center gap-4">
                        <NavLink to='/estudiantes' className="block w-full px-12 py-3 text-sm font-medium text-black rounded shadow bg-primary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-red focus:outline-none focus:ring">
                            Donar
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

    );
}