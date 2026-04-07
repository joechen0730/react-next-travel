import CardComponent from '@/components/card.js'
import PaginationComponent from '@/components/pagination.js'
import SearchComponent from '@/components/search.js'
import { getAttractions } from '@/lib/attractions-api'
import { getCategoryIds } from '@/lib/categoryIds-api'
export default async function Home({searchParams}) {
   const params = await searchParams

  const keyword = params?.keyword ?? ''
  const page = params?.page ?? '1'
  const categoryIds = params?.categoryIds ?? ''
  
  const attractionsList = await getAttractions({
    categoryIds,
    keyword,
    page,
  })
  const attractionsListLength = attractionsList.data.length
  const categoryIdsList = await getCategoryIds()
  return (
    <div>

      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
        <div className='grid lg:grid-cols-2 md:gap-4 gap-2 grid-cols-1 mb-2'>
          <SearchComponent categoryIdsList={categoryIdsList}></SearchComponent>
          <div className="ml-auto mb-2">
            <a className=" mb-2 hover:text-blue-300 transition" href="/favorite">
              🌟查看我的最愛
            </a>
            <span className="mx-2 inline-block">|</span>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded transition cursor-pointer">
              加入我的最愛
            </button>
          </div>
        </div>

        <section>
          <CardComponent attractionsList={attractionsList.data}></CardComponent>
          <PaginationComponent 
            currentPage={Number(page)}
            totalPage={10}
            count={attractionsListLength}
          ></PaginationComponent>
        </section>
      </div>
    </div>

  );
}
