import request from '@/lib/request'

export async function getAttractions({
  keyword = '',
  categoryIds = '',
  page = '1'
}) {
  // const useMock = process.env.NEXT_PUBLIC_USE_MOCK === 'true'
  // for build
  const useMock = true
  const basePath = process.env.NODE_ENV === 'production'
    ? '/react-next-travel'
    : ''
  let result

  if (useMock) {
    result = await request({
      url: `${basePath}/mock/response_page_${page}.json`,
      method: 'GET',
    })
  } else {
    result = await request({
      url: 'https://www.travel.taipei/open-api/zh-tw/Attractions/All',
      method: 'GET',
      query: {
        keyword,
        page,
      },
    })
  }

  let data = result?.data ?? []

  if (categoryIds) {
    const ids = categoryIds.split(',').map(Number)

    data = data.filter((item) =>
      item.category?.some((c) => ids.includes(c.id))
    )
  }

  return {
    ...result,
    data,
  }
}