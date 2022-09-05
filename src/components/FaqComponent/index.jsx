import React from 'react'

export const FaqComponent = () => {
  return (
    <div class='bg-lightDark text-white'>
      <h2 class='text-center text-3xl pt-10'>Preguntas Frecuentes</h2>
      <div class="space-y-4 py-16" >
        <details class="p-6 ml-16 mr-8 border-l-4 border-green-500 bg-gray-50 group" open>
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium text-gray-900">
              Proyecto
            </h5>
        
            <span
              class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>
        
          <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <details class="p-6 ml-16 mr-8 border-l-4 border-green-500 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium text-gray-900">
              Como funciona?
            </h5>

            <span
              class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <details class="p-6 ml-16 mr-8 border-l-4 border-green-500 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium text-gray-900">
              Como participar?
            </h5>

            <span
              class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <details class="p-6 ml-16 mr-8 border-l-4 border-green-500 bg-gray-50 group">
          <summary class="flex items-center justify-between cursor-pointer">
            <h5 class="text-lg font-medium text-gray-900">
              Roadmap
            </h5>

            <span
              class="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-gray rounded-full sm:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <div class='text-center'>
          <h5 class='text-2xl py-10'>Aún tienes preguntas?</h5>
          <p>Si no puedes encontrar una respuesta a tu pregunta en esta sección, puedes contactarnos.</p>
        </div>
      </div>
    </div>  
  );
};