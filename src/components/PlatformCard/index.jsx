export const PlatformCard = ({ name, image }) => {
    return (
        <a
            class="block p-8 border border-black shadow-xl transition rounded-xl hover:shadow-lightBlue/10 hover:border-lightBlue/10"
            href="/services/digital-campaigns"
        >
            <div className="flex justify-center">
                <div className="relative">
                    <img alt="..." src={image} className="bg-cover h-48 w-48 align-middle border-none" />
                </div>

            </div>


            <h3 class="mt-4 text-xl font-bold text-white">{name}</h3>

            <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
        </a>
    );
}