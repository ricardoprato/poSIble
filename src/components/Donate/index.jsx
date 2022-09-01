import background from '../../assets/student-3.jpg'

export const Donate = () => {
    return (
        <section class="relative bg-white">
            <img
                class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src={background}
                alt="Couple on a bed with a dog"
            />

            <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
                <div class="max-w-xl text-center sm:text-left">
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        ¡Dona! Y cambia el futuro una persona
                    </h1>

                    <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div class="flex flex-wrap mt-8 text-center gap-4">
                        <a class="block w-full px-12 py-3 text-sm font-medium text-black rounded shadow bg-complementary border-2 border-black sm:w-auto active:bg-rose-500 hover:bg-primary focus:outline-none focus:ring">
                            Donar
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}