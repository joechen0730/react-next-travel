import HomeClient from '@/components/home-client'
import { getAttractions } from '@/lib/attractions-api'
import { getCategoryIds } from '@/lib/categoryIds-api'

export default async function Home({ searchParams }) {
  const params = await searchParams
  const keyword = params?.keyword ?? ''
  const page = params?.page ?? '1'
  const categoryIds = params?.categoryIds ?? ''

  const attractionsList = await getAttractions({
    categoryIds,
    keyword,
    page,
  })

  const categoryIdsList = await getCategoryIds()

  return (
    <HomeClient
      attractionsList={attractionsList.data}
      categoryIdsList={categoryIdsList}
      currentPage={Number(page)}
    />
  )
}