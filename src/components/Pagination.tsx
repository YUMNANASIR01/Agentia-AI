interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }
  
  export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
      const delta = 1 // Number of pages to show on each side of current page
      const range = []
      for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
        range.push(i)
      }
  
      if (currentPage - delta > 2) {
        range.unshift("...")
      }
      if (currentPage + delta < totalPages - 1) {
        range.push("...")
      }
  
      range.unshift(1)
      if (totalPages !== 1) {
        range.push(totalPages)
      }
  
      return range
    }
  
    return (
      <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 mt-6">
        <button
          className="px-2 sm:px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-purple-600 transition duration-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
        <div className="hidden sm:flex space-x-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md transition duration-300 ${
                currentPage === page
                  ? "bg-purple-600 text-white"
                  : "bg-slate-300 text-slate-900 hover:bg-purple-500 hover:text-white"
              }`}
              onClick={() => (typeof page === "number" ? onPageChange(page) : null)}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="flex sm:hidden items-center space-x-1">
          <span className="text-slate-700">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <button
          className="px-2 sm:px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-purple-600 transition duration-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    )
  }
  
  