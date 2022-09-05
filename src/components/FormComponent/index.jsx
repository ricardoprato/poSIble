import React from 'react'

export const FormComponent = () => {
  return (
    <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Empieza tu sueño aqui</h1>
    
        <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
          Completa los campos correspondientes para conocer más acerca de tú proyecto
        </p>
    
        <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
          
        <form action="" class="space-y-4">
          <div>
            <label htmlFor="name">Nombre del Proyecto</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Nombre del proyecto" type="text" id="name" />
          </div>

          <div>
            <label htmlFor="message">Descripcion del proyecto</label>
            <textarea
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Descripcion"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div>
            <label htmlFor="name">Cantidad Requerida</label>
            <input type="number" name="Cantidad" id="" aria-label='' placeholder='Cantidad Requerida' class='w-full p-3 border-gray-200 rounded-lg'/>
          </div>

          <div>
            <label htmlFor="name">Cantidad Minima</label>
            <input type="number" name="Cantidad" id="" aria-label='' placeholder='Cantidad Mininima para donar' class='w-full p-3 border-gray-200 rounded-lg'/>
          </div>

          <div>
            <label htmlFor="name">Fecha Limite</label>
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