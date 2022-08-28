import React from 'react';

export const Header = () => {
  return (
    <header className='bg-primary'>
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-8 sm:px-6 lg:px-8">
        <div className="sm:justify-between sm:items-center sm:flex">
        <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold sm:text-3xl">
            Proyecto Educativo!
            </h1>
        </div>

        <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">

            <a
            className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-black transition bg-trasnparent border-b-2 border-transparent hover:text-complementary hover:border-b-2 hover:border-complementary focus:outline-none focus:ring" href='#'
            >
            Proyecto
            </a>
            <a
            className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-black transition bg-trasnparent border-b-2 border-transparent hover:text-complementary hover:border-b-2 hover:border-complementary focus:outline-none focus:ring" href='#'
            >
            Estudiantes
            </a>
            <a class="inline-flex items-center justify-center px-6 py-3 text-xl font-medium text-white bg-complementary border-2 border-complementary rounded-lg hover:bg-primary hover:text-black hover:border-black active:bg-complementary focus:outline-none focus:ring" href="/download">
            <span className="text-sm font-medium"> Ingresar </span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 ml-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
            </svg>
            </a>
        </div>
        </div>
    </div>
    </header>


  )
}