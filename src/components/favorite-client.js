'use client'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from "next/image";
import EditCardComponent from '@/components/card-edit.js'
import PaginationComponent from '@/components/pagination.js'

function Favorite() {
  const [favorites, setFavorites] = useState([])
  const [hydrated, setHydrated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page') || '1')
  const pageSize = 6
  const totalPage = Math.ceil(favorites.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const currentList = favorites.slice(startIndex, startIndex + pageSize)

  const basePath = process.env.NODE_ENV === 'production'
    ? '/react-next-travel'
    : ''
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

  function updateFavorite(updatedItem) {
    const updated = favorites.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    )

    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  function deleteFavorite(id) {
    const updated = favorites.filter((item) => item.id !== id)

    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <a className="ml-auto mb-2 hover:text-blue-300 transition" href={`${basePath}`}>
         <Image
          className="inline-block align-bottom"
          src={`${basePath}/house.png`} 
          width={30}
          height={30}
          alt="home"
        /> 返回首頁
      </a>
      <section>
        <EditCardComponent 
          attractionsList={currentList}
          onSave={updateFavorite}
          onDelete={deleteFavorite}
        ></EditCardComponent>
        <PaginationComponent
          currentPage={currentPage}
          totalPage={totalPage}
          count={favorites.length}
          pageSize={6}
        ></PaginationComponent>
      </section>
    </div>
  )
}

export default Favorite