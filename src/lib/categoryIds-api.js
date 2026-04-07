import request from '@/lib/request'

export async function getCategoryIds(type='') {
  // const useMock = process.env.NEXT_PUBLIC_USE_MOCK === 'true'
  // for build
  const useMock = true

  if (useMock) {
    return request({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/mock/category_ attractions.json`,
      method: 'GET',
    })
  }
  // type 
  // Activity -展演活動
  // Calendar -活動年曆
  // Pictorial -台北畫刊
  // Attractions -景點
  // Accommodation -住宿
  // Tours -遊程
  return request({
    url: `https://www.travel.taipei/open-api/zh-tw/Miscellaneous/Categories?type=${type}`,
    method: 'GET',
    query: {},
  })
}