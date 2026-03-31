export async function getSearchResults({ country = '', keyword = '' }) {
  const query = new URLSearchParams({
    country,
    keyword,
  }).toString()

  let url = ''

  switch (type) {
    case 'hotels':
      url = `https://example.com/api/hotels?${query}`
      break
    case 'flights':
      url = `https://example.com/api/flights?${query}`
      break
    default:
      throw new Error('Unsupported search type')
  }

  const res = await fetch(url, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch search results')
  }

  return res.json()
}