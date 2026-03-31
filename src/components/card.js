import Image from "next/image";

function Card() {
  return (
    <div className="grid md:grid-cols-3 md:gap-4 gap-2 grid-cols-1"> 
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
        <input  
          id="teal-checkbox-1" 
          type="checkbox"
          className="peer absolute top-1 right-1 w-[20px] h-[20px]"
        ></input>
        <label 
          htmlFor="teal-checkbox-1" 
          className="block cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong"
        >
          <Image 
            width={100}
            height={100}
            className="w-full" 
            src="/Bg_1280*1024.png" 
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex">
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
          </div>
        </label>

      </article>
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
        <input  
          id="teal-checkbox-2" 
          type="checkbox"
          className="peer absolute top-1 right-1 w-[20px] h-[20px]"
        ></input>
        <label 
          htmlFor="teal-checkbox-2" 
          className="block cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong"
        >
          <Image 
            width={100}
            height={100}
            className="w-full" 
            src="/Bg_1280*1024.png" 
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex">
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
          </div>
        </label>

      </article>
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
        <input  
          id="teal-checkbox-3" 
          type="checkbox"
          className="peer absolute top-1 right-1 w-[20px] h-[20px]"
        ></input>
        <label 
          htmlFor="teal-checkbox-3" 
          className="block cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong"
        >
          <Image 
            width={100}
            height={100}
            className="w-full" 
            src="/Bg_1280*1024.png" 
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex">
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
          </div>
        </label>

      </article>
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
        <input  
          id="teal-checkbox-4" 
          type="checkbox"
          className="peer absolute top-1 right-1 w-[20px] h-[20px]"
        ></input>
        <label 
          htmlFor="teal-checkbox-4" 
          className="block cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong"
        >
          <Image 
            width={100}
            height={100}
            className="w-full" 
            src="/Bg_1280*1024.png" 
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex">
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
          </div>
        </label>

      </article>
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 relative">
        <input  
          id="teal-checkbox-5" 
          type="checkbox"
          className="peer absolute top-1 right-1 w-[20px] h-[20px]"
        ></input>
        <label 
          htmlFor="teal-checkbox-5" 
          className="block cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-blue-100 hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong"
        >
          <Image 
            width={100}
            height={100}
            className="w-full" 
            src="/Bg_1280*1024.png" 
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex">
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">#photography</span>
          </div>
        </label>

      </article>
    </div>

  )
}

export default Card