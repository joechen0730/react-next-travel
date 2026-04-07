import { Suspense } from 'react'
import FavoriteClient from '@/components/favorite-client'

export default function FavoritePage() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <FavoriteClient />
    </Suspense>
  )
}