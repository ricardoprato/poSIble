import estudiante from '../../assets/estudiante.jpg'
import { NavLink } from 'react-router-dom'

export const Description = () => {
    return (
        <section>
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div
                        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-first"
                    >
                        <img
                            class="absolute inset-0 object-cover w-full h-full"
                            src={estudiante}
                            alt="Man using a computer"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl">Obten la oportunidad para educarte</h2>

                        <p class="mt-4 mb-4 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                            veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <NavLink to='/'>
                            <a class="inline-block px-12 py-3 text-sm font-medium text-black rounded shadow bg-complementary border-2 border-black sm:w-auto hover:bg-primary focus:outline-none focus:ring">
                                Registrarte
                            </a>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}