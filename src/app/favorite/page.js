
import Image from "next/image";
import CardComponent from '@/components/card.js'
import PaginationComponent from '@/components/pagination.js'

function Favorite() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <a className="ml-auto mb-2 hover:text-blue-300 transition" href="/">
         <Image
          className="inline-block align-bottom"
          src={"/house.png"} 
          width={30}
          height={30}
        /> 返回首頁
      </a>
      <section>
        <CardComponent></CardComponent>
        <PaginationComponent></PaginationComponent>
      </section>
    </div>
  )
}

export default Favorite