'use client'

import style from '@/styles/_search.module.scss'
import { useSelectedLayoutSegment } from 'next/navigation'

function Search() {
  const segment = useSelectedLayoutSegment()
  console.log(segment,'useSelectedLayoutSegment')
  function callAPI(e) {
    e.preventDefault();
    console.log('aa')
  }
  return (
    <div> 
        <search className="flex flex-col items-center z-10 relative md:w-[500px] w-75">
          <form className="max-w-sm mx-auto w-full">
            <select 
              id="countries" 
              className={style.searchSelect}
            >
              <option defaultValue>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className='flex mt-2'>
              <input className={style.searchInput} placeholder='地名搜尋'></input> 
              <button 
                onClick={callAPI}
                className={style.searchBtn}
              > 搜尋</button>
            </div>

          </form>
      
      </search>
    </div>

  )
}

export default Search