import { Suspense } from 'react'
import HomeClient from '@/components/home-client'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <HomeClient />
    </Suspense>
  )
}