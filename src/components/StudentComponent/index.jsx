import background from '../../assets/biblioteca.jpg'
import student from '../../assets/estudiante-cuadrado.jpg'

const StudentComponent = () => {
    return (
        <div className='relative'>
            <section class="relative bg-white">
                <img
                    class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src={background}
                    alt="Couple on a bed with a dog"
                />

                <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

                <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-auto lg:items-center lg:flex">
                </div>
            </section>

            <section className="relative block py-16 bg-blue">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -mt-64 shadow-xl rounded-lg">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img alt="..." src={student} className="shadow-xl bg-cover rounded-full h-64 w-64 align-middle border-none max-w-150-px" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button className="bg-alert active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                            Donar
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-black mb-2">
                                    David Rodriguez
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Merida, Venezuela
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Sueño con ser programador y gerente de proyectos
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Me motiva mi familia
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium sapiente explicabo incidunt earum, praesentium cupiditate nulla quas ducimus minima optio est obcaecati ratione voluptatem error commodi placeat necessitatibus dolor.
                                        </p>
                                        <a href="#" className="font-normal text-pink-500">Mostrar más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StudentComponent;