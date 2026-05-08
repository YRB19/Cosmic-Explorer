const NASA_IMAGES_BASE_URL = 'https://images-api.nasa.gov'
/**
 * @param {string} query 
 * @param {number} count  
 * @returns {Promise<ImageResult[]>}
 * @typedef  {Object} ImageResult
 * @property {string} thumbnail  
 * @property {string} title     
 * @property {string} description 
 * @property {string} date     
 * @property {string} center    
 */
export async function fetchNasaImages(query, count = 5) {
  const url = new URL(`${NASA_IMAGES_BASE_URL}/search`)
  url.searchParams.set('q', query)
  url.searchParams.set('media_type', 'image')
  url.searchParams.set('page_size', '20') 
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(`NASA API responded with status ${response.status}`)
  }
  const json = await response.json()
  const items = json?.collection?.items ?? []
  return items
    .filter(
      (item) =>
        item.links?.length > 0 &&   
        item.data?.length > 0         
    )
    .slice(0, count)
    .map((item) => {
      const meta = item.data[0]
      return {
        thumbnail: item.links[0].href,
        title: meta.title ?? 'NASA Image',
        description: meta.description
          ? meta.description.slice(0, 140) + (meta.description.length > 140 ? '…' : '')
          : 'No description available.',
        date: meta.date_created
          ? new Date(meta.date_created).getFullYear().toString()
          : '',
        center: meta.center ?? 'NASA',
      }
    })
}
