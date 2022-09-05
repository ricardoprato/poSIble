import estudiante from '../../assets/estudiante.jpg'
import { NavLink } from 'react-router-dom'

export const Description = () => {
    return (
        <section>
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div
                        class="relative h-64 overflow-hidden rounded-lg border-2 border-darkBlue sm:h-80 lg:h-full lg:order-first"
                    >
                        <img
                            class="absolute inset-0 object-cover w-full h-full"
                            src={estudiante}
                            alt="Estudiante"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl">Obtén la oportunidad para educarte✏️</h2>

                        <p class="mt-4 mb-4 text-lg text-black">
                            En poSíble puedes aplicar a crear una campaña donde podrás compartir tu historia y sueños ante el mundo. La comunidad podrá conocerte, apoyarte y donar los recursos en criptodinero necesarios para que comiences tu educación en alguna de nuestras plataformas de educación online asociadas.
                        </p>

                        <NavLink to='/form'>
                            <a class="inline-block px-12 py-3 text-sm font-medium text-black rounded shadow bg-primary border-2 border-black sm:w-auto hover:bg-red focus:outline-none focus:ring">
                                Registrarte
                            </a>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}