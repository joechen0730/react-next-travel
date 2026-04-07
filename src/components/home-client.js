'use client'

import { useEffect, useMemo, useState } from 'react'
import CardComponent from '@/components/card'
import PaginationComponent from '@/components/pagination'
import SearchComponent from '@/components/search'

export default function HomeClient({
  attractionsList = [],
  categoryIdsList,
  currentPage,
}) {
  const [selectedIds, setSelectedIds] = useState([])
  const [favorites, setFavorites] = useState([])
  const [hydrated, setHydrated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch {
        setFavorites([])
      }
    }
    setHydrated(true)
  }, [])

  function toggleSelect(id) {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  function addToFavorites() {
    const selectedItems = attractionsList.filter((item) =>
      selectedIds.includes(item.id)
    )
    
    const merged = [...favorites, ...selectedItems]

    const uniqueFavorites = Array.from(
      new Map(merged.map((item) => [item.id, item])).values()
    )
    if(uniqueFavorites.length <=0) return
    setFavorites(uniqueFavorites)
    localStorage.setItem('favorites', JSON.stringify(uniqueFavorites))
    setSelectedIds([])
    // 顯示 alert
    setShowAlert(true)

    // 2 秒後消失
    setTimeout(() => {
      setShowAlert(false)
    }, 2000)
  }

  const favoriteIds = useMemo(
    () => new Set(favorites.map((item) => item.id)),
    [favorites]
  )

  return (
    <div>
      {showAlert&& (
        <div
          className={`
            fixed top-15 right-5 z-50
            bg-green-500 text-white px-4 py-2 rounded shadow-lg
            transition-all duration-300
            ${showAlert ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
        >
          ✅ 已成功加入我的最愛
        </div>
      )}
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
        <div className="grid lg:grid-cols-2 md:gap-4 gap-2 grid-cols-1 mb-2">
          <SearchComponent categoryIdsList={categoryIdsList} />

          <div className="ml-auto mb-2">
            <a
              className="mb-2 hover:text-blue-300 transition"
              href="/favorite"
            >
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
            attractionsList={attractionsList}
            selectedIds={selectedIds}
            onToggle={toggleSelect}
            favoriteIds={favoriteIds}
            hydrated={hydrated}
          />

          <PaginationComponent
            currentPage={currentPage}
            totalPage={10}
            count={attractionsList.length}
          />
        </section>
      </div>
    </div>
  )
}