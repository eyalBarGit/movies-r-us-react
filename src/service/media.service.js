import Axios from 'axios'
const BASE_URL = 'http://www.omdbapi.com/?apikey=8a19934f'


async function query(title) {
    const mediaTypes = ['movie', 'game', 'series']
    const promisses = []
    mediaTypes.map((type) => {
        const media = {
            mediaType: type,
            searchTitle: title,
            year: 'All'
        }
        const promise = getPageToDisplay(media)
        return promisses.push(promise)
    })

    return Promise.all([...promisses]).then((media) => {
        return media
    })
}

async function getPageToDisplay(media) {
    const page = await Axios.get(`${BASE_URL}&s=${media.searchTitle?.replace(' ', '+')}&page=${media.pageNum}&type=${media.mediaType}&y=${media.year}`)
    return page.data
}

async function getItemById(itemId) {
    try {
        const details = await Axios.get(`${BASE_URL}&plot=full&i=${itemId}`)
        return details.data
    } catch (err) {
        throw err
    }
}

async function sortList(content) {
    const sortedList = content.Search.map(async (item) => {
        const currItem = await getItemById(item.imdbID)
        return currItem
    })
    return Promise.all([...sortedList]).then((sortedResult) => sortedResult)
}


export default {
    query,
    getItemById,
    getPageToDisplay,
    sortList
}