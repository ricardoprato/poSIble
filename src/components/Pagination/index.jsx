export const Pagination = ({
  currentPage,
  studentPerPage,
  totalStudents,
  setCurrentPage,
}) => {
  const pageCount = Math.ceil(totalStudents / studentPerPage.current);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center gap-3 w-full p-3 bg-complementary">
      {pages.length &&
        pages.map((page) => (
          <button
            key={page}
            className={`border border- shadow-md shadow-darkBlue  w-8 h-8 rounded-md ${
              currentPage === page
                ? "text-white bg-complementary"
                : "text-darkBlue bg-blue"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
    </div>
  );
};
