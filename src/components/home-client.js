'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import CardComponent from '@/components/card.js'
import PaginationComponent from '@/components/pagination.js'
import SearchComponent from '@/components/search.js'
import { getAttractions } from '@/lib/attractions-api'
import { getCategoryIds } from '@/lib/categoryIds-api'

export default function HomeClient() {

  const searchParams = useSearchParams()

  const keyword = searchParams.get('keyword') ?? ''
  const page = searchParams.get('page') ?? '1'
  const categoryIds = searchParams.get('categoryIds') ?? ''

  const [attractionsList, setAttractionsList] = useState({ data: [] })
  const [categoryIdsList, setCategoryIdsList] = useState({ data: {} })
  const [selectedIds, setSelectedIds] = useState([])
  const [favorites, setFavorites] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      setLoading(true)

      const [attractions, categories] = await Promise.all([
        getAttractions({
          categoryIds,
          keyword,
          page,
        }),
        getCategoryIds(),
      ])

      setAttractionsList(attractions)
      setCategoryIdsList(categories)

      const saved = localStorage.getItem('favorites')
      if (saved) {
        try {
          setFavorites(JSON.parse(saved))
        } catch {
          setFavorites([])
        }
      }

      setLoading(false)
    }

    init()
  }, [keyword, page, categoryIds])

  function toggleSelect(id) {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  function addToFavorites() {
    const selectedItems = attractionsList.data.filter((item) =>
      selectedIds.includes(item.id)
    )

    if (selectedItems.length === 0) return

    const merged = [...favorites, ...selectedItems]

    const uniqueFavorites = Array.from(
      new Map(merged.map((item) => [item.id, item])).values()
    )

    setFavorites(uniqueFavorites)
    localStorage.setItem('favorites', JSON.stringify(uniqueFavorites))
    setSelectedIds([])

    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2000)
  }

  if (loading) {
    return <div className="p-4">Loading...</div>
  }
  const basePath = process.env.NODE_ENV === 'production' ? '/react-next-travel' : ''
  return (
    <div>
      {showAlert && (
        <div className="fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          ✅ 已成功加入我的最愛
        </div>
      )}

      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 grid-cols-1 mb-2">
          <SearchComponent categoryIdsList={categoryIdsList} />

          <div className="ml-auto mb-2">
            <a className="mb-2 hover:text-blue-300 transition" href={`${basePath}/favorite`}>
              🌟查看我的最愛
            </a>
            <span className="mx-2 inline-block">|</span>
            <button
              onClick={addToFavorites}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded transition cursor-pointer"
            >
              加入我的最愛
            </button>
          </div>
        </div>

        <section>
          <CardComponent
            attractionsList={attractionsList.data}
            selectedIds={selectedIds}
            onToggle={toggleSelect}
            favoriteIds={new Set(favorites.map((item) => item.id))}
          />

          <PaginationComponent
            currentPage={Number(page)}
            totalPage={10}
            count={attractionsList.data.length}
          />
        </section>
      </div>
    </div>
  )
}