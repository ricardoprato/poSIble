import { NavLink } from "react-router-dom";
import { PlatformCard } from "../PlatformCard";
import PlatziImg from '../../assets/platzi.png'
import EDTeamImg from '../../assets/EDTeam-isotipo.png'
import CoderHouseImg from '../../assets/coderhouse_logo.png'
import BlockdemyImg from '../../assets/blockdemy.jpg'
import CrehanaImg from '../../assets/crehana.png'
import CodigoFacilitoImg from '../../assets/codigofacilito.png'

export const Platforms = () => {
    return (
        <section class="text-white bg-darkBlue">
            <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto text-center">
                    <h2 class="text-3xl text-secondary font-bold sm:text-4xl">Plataformas</h2>

                    <p class="mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <PlatformCard name='Platzi' image={PlatziImg} />
                    <PlatformCard name='CoderHouse' image={CoderHouseImg} />
                    <PlatformCard name='EDTeam' image={EDTeamImg} />
                    <PlatformCard name='Blockdemy' image={BlockdemyImg} />
                    <PlatformCard name='Crehana' image={CrehanaImg} />
                    <PlatformCard name='CodigoFacilito' image={CodigoFacilitoImg} />
                </div><div class="mt-12 text-center">
                    <NavLink to='/form'>
                        <a
                            class="inline-flex items-center px-8 py-3 mt-8 text-black bg-secondary border-2 border-black rounded hover:bg-transparent hover:border-white hover:text-white active:text-secondary focus:outline-none focus:ring"
                        >
                            <span class="text-sm font-medium">Aplicar</span>

                            <svg
                                class="w-5 h-5 ml-3"
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
                        </a>
                    </NavLink>
                </div>

            </div>
        </section>
    );
}