import { NavLink } from "react-router-dom";

export const StudentList = ({
  fullName,
  location,
  description,
  title,
  avatar,
} = {}) => {
  return (
    <NavLink to="/estudiantes/1">
      <article className="p-6 bg-blue sm:p-8 rounded-xl ring ring-indigo-50">
        <div className="flex items-start">
          <div className=" overflow-hidden grid h-20 w-20 shrink-0 place-content-center rounded-full border-2 border-lightBlue">
            <img src={avatar} />
          </div>

          <div className="ml-8">
            <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              {fullName}
            </strong>

            <h2 className="mt-4 text-lg font-medium sm:text-xl">{title}</h2>

            <p className="mt-1 text-sm text-gray-700">{description}</p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center text-gray-500">
                <p className="ml-1 text-xs font-medium">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </NavLink>
  );
};
