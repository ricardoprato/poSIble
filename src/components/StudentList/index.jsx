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
      <article className="p-6 bg-blue sm:p-8 rounded-xl border-2 border-darkBlue">
        <div className="flex items-start">
          <div className=" overflow-hidden border-2 border-darkBlue grid h-20 w-20 shrink-0 place-content-center rounded-full">
            <img src={avatar} alt="" />
          </div>

          <div className="ml-8">
            <strong className="rounded border-2 px-3 py-1.5 text-[16px] font-medium text-white">
              {fullName}
            </strong>

            <h2 className="mt-4 text-lg font-medium text-darkBlue sm:text-xl">{title}</h2>

            <p className="mt-1 text-sm text-white">{description}</p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center text-gray-500">
                <p className="ml-1 text-sm text-darkBlue font-medium">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </NavLink>
  );
};
