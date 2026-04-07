'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams,usePathname } from 'next/navigation'
import style from '@/styles/_search.module.scss'

function Search({categoryIdsList}) {
  const categoryList = Object.values(categoryIdsList.data).flat()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [categoryIds, setCategoryIds] = useState(searchParams.get('categoryIds') ?? '')
  const [keyword, setKeyword] = useState(searchParams.get('keyword') ?? '')

  useEffect(() => {
    setCategoryIds(searchParams.get('categoryIds') ?? '')
    setKeyword(searchParams.get('keyword') ?? '')
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams.toString())

    if (categoryIds) {
      params.set('categoryIds', categoryIds)
    } else {
      params.delete('categoryIds')
    }

    if (keyword.trim()) {
      params.set('keyword', keyword.trim())
    } else {
      params.delete('keyword')
    }

    params.set('page', '1')

    router.push(`${pathname}?${params.toString()}`)
  }
  return (
    <div> 
        <search className="flex flex-col z-10 relative md:w-[500px] w-75">
          <form onSubmit={handleSubmit}>
            <div className="mx-auto w-full flex content-between">
              <select 
                id="countries" 
                className={style.searchSelect}
                value={categoryIds}
                onChange={(e)=>setCategoryIds(e.target.value)}
              >
                <option value="">選擇一個類別</option>
                {categoryList.map((category) => (
                  <option 
                    key={`${category.id}-${category.name}`}
                    value={category.id}
                  >{category.name}</option>
                ))}

              </select>
              <button 
                type='submit'
                className={style.searchBtn}
              > 搜尋</button>
            </div>

            <div className='flex mt-2'>
              {/* <input className={style.searchInput} placeholder='地名搜尋'></input>  */}
            </div>
          </form>
      
      </search>
    </div>

  )
}

export default Search