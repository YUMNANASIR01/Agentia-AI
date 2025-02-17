
  
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <div className="flex justify-center items-center space-x-2 mt-6">
            <button
                className="px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-purple-600 transition duration-300 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    className={`px-3 py-1 rounded-md transition duration-300 ${
                        currentPage === page
                            ? "bg-purple-600 text-white"
                            : "bg-slate-300 text-slate-900 hover:bg-purple-500 hover:text-white"
                    }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className="px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-purple-600 transition duration-300 disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}