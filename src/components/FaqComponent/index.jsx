import React from 'react'

export const FaqComponent = () => {
  return (
    <div className="bg-lightDark text-white">
      <h2 className="text-center text-3xl pt-10">Preguntas Frecuentes</h2>
      <div className="space-y-4 py-16">
        <details
          className="p-6 ml-16 mr-12 border-l-4 border-green-500 bg-gray-50 group"
          open
        >
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              ¿Quiénes somos?
            </h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 leading-relaxed text-gray-700">
            PoSÍble es una plataforma descentralizada de donaciones tipo
            Crowdfunding. La cual aboga para que las personas de Latinoamérica
            que están en condiciones de vulnerabilidad logren acceder a una
            educación técnica, superior o plataformas educativas online. En las
            cuales podrán desarrollar sus talentos, capacidades y carreras. Esto
            por medio de donaciones hechas por colaboradores que apoyen el
            proyecto donando dinero en forma de criptomonedas.
          </p>
        </details>

        <details className="p-6 ml-16 mr-12 border-l-4 border-green-500 bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              ¿Cómo funciona?
            </h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-6 leading-relaxed text-gray-700">
            <li className="pb-10">
              El contribuyente inicia sesión con su proveedor web3 preferido, en
              donde interactúa con los estudiantes, conoce acerca de ellos, sus
              sueños, inspiraciones y decide realizar un aporte monetario.
            </li>
            <li className="pb-10">
              Al lograr el aporte requerido, la campaña de cada estudiante se
              cierra, el donador obtendrá un NFT dinámico y el monto se enviara
              a la plataforma seleccionada por el estudiante, en donde se
              intercambiará por su respectivo plan de suscripción y comenzará el
              uso de ella.
            </li>
            <li>
              Cada donador puede llevar un registro del estudiante al cual
              aportó conociendo su progreso en materia de cursos realizados.
              Además, los NFT evolucionan de acuerdo a los logros del estudiante
              asociado, consiguiendo un NFT con una rareza incremental.
            </li>
          </ul>
        </details>

        <details className="p-6 ml-16 mr-12 border-l-4 border-green-500 bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Cómo participar?
            </h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ol className="mt-6 leading-relaxed text-gray-700">
            <li className="pb-10">
              Como donador conectas tu wallet con la DApp, encuentras la campaña
              que deseas apoyar, realizas el pago en ether y recibes tu NFT de
              acuerdo a la campaña que apoyaste.
            </li>
            <li>
              Como estudiante conectas tu wallet, completas el formulario en
              donde completas los datos de tu campaña y a continuación a esto se
              publica tu campaña en un periodo de tiempo establecido.
            </li>
          </ol>
        </details>

        <details className="p-6 ml-16 mr-12 border-l-4 border-green-500 bg-gray-50 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">Roadmap</h5>

            <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-6 leading-relaxed text-gray-700">
            PoSÍble aspira crear una DAO con su propio token. El cual permitirá
            tomar las decisiones de admisión de cada estudiante e iniciar a
            fondear su campaña.
          </p>
        </details>

        <div className="text-center">
          <h5 className="text-2xl py-10">¿Aún tienes preguntas?</h5>

          <p>
            Si no puedes encontrar una respuesta a tu pregunta en esta sección,
            puedes contactarnos.
          </p>
        </div>
      </div>
    </div>
  );
};