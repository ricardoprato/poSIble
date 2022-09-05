import React from 'react'

export const FormComponent = () => {
  return (
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center text-secondary sm:text-3xl">¡Empieza tu sueño aqui!</h1>
    
        <p class="max-w-md mx-auto mt-4 text-center text-white">
          Completa los campos correspondientes para conocer más acerca de ti 
        </p>
    
        <div class="p-8 mt-8 bg-white border-2 border-black rounded-lg shadow-lg lg:p-12 lg:col-span-3">
          
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Nombre completo" type="text" id="name" />
          </div>

          <div>
            <label class="sr-only" for="message">Descripcion del proyecto</label>
            <textarea
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Cuentanos sobre ti y cómo planeas utilizar esta oportunidad para transformar tu vida y tu entorno"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div>
            <input type="number" name="Cantidad" id="" aria-label='' placeholder='Cantidad Requerida' class='w-full p-3 border-gray-200 rounded-lg'/>
          </div>

          <div>
            <input type="number" name="Cantidad" id="" aria-label='' placeholder='Cantidad Mininima para donar' class='w-full p-3 border-gray-200 rounded-lg'/>
          </div>

          <div>
            <input type="date" name="" id="" aria-label='' class='w-full p-3 border-gray-200 rounded-lg'/>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
            >
              <span class="font-medium"> Send </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  ) 
}