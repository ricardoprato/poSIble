import background from "../../assets/biblioteca.jpg";
import student from "../../assets/estudiante-cuadrado.jpg";

const StudentComponent = ({ estado = "Patrocinado" }) => {
  return (
    <div className="relative">
      <section className="relative h-auto pt-24 pb-24 bg-white">
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <img
            className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full"
            src={background}
            alt="Couple on a bed with a dog"
          />
        </div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-auto lg:items-center lg:flex"></div>
      </section>

      <section className="relative block py-16 bg-complementary">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words border-4 border-black bg-white w-full -mt-32 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={student}
                      className="shadow-xl bg-cover rounded-full w-64 h-50 md:h-50 align-middle border-4 border-black -mt-32 max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-10 lg:order-3 lg:text-right lg:self-center">
                  <div className="px-5 mt-10 lg:mt-0">
                    <button
                      className="bg-alert active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      {estado}
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        5
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Donadores
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Cursos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Estrellas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-2">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-black mb-2">
                  David Rodriguez
                </h3>
                <div className="text-sm leading-normal mt-4 mb-2 text-black font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Merida, Venezuela
                </div>
                <div className="mb-2 text-blueGray-600 mt-6">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Sueño con ser programador y gerente de proyectos
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Me motiva mi familia
                </div>
              </div>
              <div className='mt-6 sm:mx-12'>
                <div>
                  <p className="text-md lg:text-2xl font-medium text-gray-500">Progreso de recaudación</p>

                  <div className="mt-6 overflow-hidden bg-grayBar rounded-full">
                    <div className="w-2/3 h-3 bg-green rounded-full"></div>
                  </div>
                </div>
                <div class="mt-8 sm:mt-12">
                  <dl class="grid grid-cols-2 gap-4 sm:grid-cols-2">
                    <div
                      class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                    >
                      <dt class="order-last text-sm font-medium text-gray-500">
                        Recaudado de $8m
                      </dt>

                      <dd class="text-lg font-extrabold text-blue-600 md:text-4xl">
                        $4.8m
                      </dd>
                    </div>

                    <div
                      class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg"
                    >
                      <dt class="order-last text-sm font-medium text-gray-500">
                        Días restantes
                      </dt>

                      <dd class="text-2xl font-extrabold text-blue-600 md:text-4xl">
                        12
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam laudantium sapiente explicabo incidunt earum,
                      praesentium cupiditate nulla quas ducimus minima optio est
                      obcaecati ratione voluptatem error commodi placeat
                      necessitatibus dolor.
                    </p>
                    <a href="#" className="font-normal text-pink-500">
                      Mostrar más
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentComponent;
