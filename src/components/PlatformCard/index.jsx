export const PlatformCard = ({ name, image, description }) => {
    return (
        <a
            className="block p-8 border border-black shadow-xl transition rounded-xl hover:shadow-yellow/20 hover:border-yellow/20"
            href="/services/digital-campaigns"
        >
            <div className="flex justify-center">
                <div className="relative">
                    <img alt="..." src={image} className="bg-cover h-32 w-32 align-middle border-none" />
                </div>

            </div>


            <h3 className="mt-4 text-xl font-bold text-yellow">{name}</h3>

            <p className="mt-1 text-sm text-white">
                {description}
            </p>
        </a>
    );
}