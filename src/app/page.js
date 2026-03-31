import Image from "next/image";
import CardComponent from '@/components/card.js'
import PaginationComponent from '@/components/pagination.js'
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <div className="ml-auto mb-2">
        <a className=" mb-2 hover:text-blue-300 transition" href="/favorite">
          🌟查看我的最愛
        </a>
        <span className="mx-2 inline-block">|</span>
        <button>加入我的最愛</button>
      </div>
      <section>
        <CardComponent></CardComponent>
        <PaginationComponent></PaginationComponent>
      </section>
    </div>
  );
}
