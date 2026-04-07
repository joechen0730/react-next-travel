function buildUrl(url, query) {
  if (!query) return url

  const params = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, String(value))
    }
  })

  const queryString = params.toString()
  return queryString ? `${url}?${queryString}` : url
}

export default async function request({
  url,
  method = 'GET',
  query,
  body,
  headers = {},
  cache = 'no-store',
}) {
  const finalUrl = buildUrl(url, query)

  const config = {
    method,
    cache,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  }

  if (body && method !== 'GET') {
    config.headers['Content-Type'] = 'application/json'
    config.body = JSON.stringify(body)
  }

  const res = await fetch(finalUrl, config)
  const text = await res.text()

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${text}`)
  }

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}