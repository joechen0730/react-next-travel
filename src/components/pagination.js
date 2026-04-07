'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

function Pagination({ currentPage, totalPage, count, pageSize = 30 }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const MaxVisiblePage = 5
  const pageList = pageRange(currentPage, totalPage)

  function handlePageChange(page) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    router.push(`${pathname}?${params.toString()}`)
  }

  function pageRange(currentPage, totalPage) {
    if (count <= pageSize) return [1]

    const half = Math.floor(MaxVisiblePage / 2)

    let start = currentPage - half
    let end = currentPage + half

    if (start < 1) {
      start = 1
    }

    if (end > totalPage) {
      end = totalPage
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  if (totalPage <= 1) return null

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center">
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`
                relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                ${currentPage <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span>⇦</span>
            </button>

            {pageList.map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={page === currentPage}
                className={`
                  px-3 py-1 rounded-md border text-sm
                  ${
                    page === currentPage
                      ? 'cursor-not-allowed bg-blue-600 text-white border-blue-600'
                      : 'cursor-pointer bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }
                `}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage >= totalPage}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`
                relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                ${currentPage >= totalPage ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <span>⇨</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination