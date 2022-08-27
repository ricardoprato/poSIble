import ejemplo from '../../assets/ejemplo.png'
import { StyledTitle } from './styles';

export const Banner = () => {
    return (
        <section class="relative bg-white">

  <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
    <div class="max-w-xl text-center sm:text-left">
      <StyledTitle className="text-3xl font-extrabold sm:text-5xl">
        Accede a 
        <strong className="font-extrabold sm:block">
          La educación de tus sueños
        </strong>
      </StyledTitle>

      <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>

      <div class="flex flex-wrap gap-4 mt-8 text-center">
        <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
          Get Started
        </a>

        <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
          Learn More
        </a>
      </div>
    </div>
    <div class="max-w-xl text-center sm:text-left">
      <img src={ejemplo} alt="Ejemplo" />
    </div>
  </div>
</section>


    );
}