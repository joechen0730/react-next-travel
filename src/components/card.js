import Image from "next/image";
const colors = [
  'bg-red-50',
  'bg-yellow-50',
  'bg-green-50',
]

export default function Card({
  attractionsList,
  selectedIds,
  onToggle,
  favoriteIds,
}) {
  const basePath = process.env.NODE_ENV === 'production' ? '/react-next-travel' : ''
  return (
    <div className="grid md:grid-cols-3 md:gap-4 gap-2 grid-cols-1"> 
      {attractionsList.map((attraction) => {
      const isFavorited = favoriteIds?.has(attraction.id)
      return (
        
        <article key={`${attraction.id}-${attraction.name}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
          {isFavorited ? (
            <div className="absolute top-2 right-2 z-10 text-xl">
              ⭐
            </div>
          ): (
            <input  
              id={`${attraction.id}-checkbox`}
              value={attraction.id}
              type="checkbox"
              className="peer absolute top-1 right-1 w-[20px] h-[20px]"
              checked={selectedIds.includes(attraction.id)}
              onChange={() => onToggle(attraction.id)}
            ></input>
          )}

          <label 
            htmlFor={`${attraction.id}-checkbox`}
            className={`
              block peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong
              ${isFavorited ?  '': 'cursor-pointer'}  
            `}
          >
            <Image 
              width={200}
              height={200}
              className="w-full" 
              unoptimized
              src={attraction.images?.[0]?.src || `${basePath}/BG_1280*400.png`}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold lg:text-lg md:text-sm text-lg mb-2">{attraction.name}</div>
              <p className="text-gray-700 text-base lg:h-[310px] md:h-[220px]  h-[170px] overflow-hidden">
                {attraction.introduction}
              </p>
            </div>
            <div className="px-4 pt-4 pb-2 flex flex-wrap">
              {attraction.category.map((category, index)=>(
                <span 
                  key={`${category.name}-${attraction.name}-${category.index}`}
                  className={`inline-flex items-center rounded-md ${colors[index % colors.length]} px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 lg:basis-1/4 md:basis-1/2 basis-1/4`}>#{category.name}</span>
              ))}
            </div>
          </label>
        </article>
      )
    })}
    </div>
  )
}

