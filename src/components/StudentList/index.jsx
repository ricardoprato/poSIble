export const StudentList = ({
  fullName,
  location,
  description,
  title,
  avatar,
} = {}) => {
  return (
    <article className="p-6 bg-blue sm:p-8 rounded-xl ring ring-indigo-50">
      <div className="flex items-start">
        <div
          className="hidden overflow-hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-lightBlue"
          aria-hidden="true"
        >
          <img src={avatar} />
        </div>

        <div className="sm:ml-8">
          <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {fullName}
          </strong>

          <h2 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="" className="hover:underline">
              {title}
            </a>
          </h2>

          <p className="mt-1 text-sm text-gray-700">{description}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center text-gray-500">
              <p className="ml-1 text-xs font-medium">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
