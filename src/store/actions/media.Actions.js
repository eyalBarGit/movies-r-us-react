import mediaService from '../../service/media.service'


export function query(title) {
  return async dispatch => {
    try {
      const media = await mediaService.query(title)
      const mediaCategories = {
        movies: media[0],
        games: media[1],
        series: media[2]
      }
      dispatch(_query(mediaCategories))
      _getState()
    }
    catch (err) {
      throw err
    }
  }
}

export function getCurrPage(media) {
  return async dispatch => {
    try {
      const currPage = await mediaService.getPageToDisplay(media)
      console.log('currpage:',currPage)
      dispatch(_setCurrPage(currPage))
    }
    catch (err) {
      throw err
    }
  }
}

export function getItemById(itemId) {
  return async dispatch => {
    try {
      const currItem = await mediaService.getItemById(itemId)
      console.log('currItem:', currItem)
      dispatch(_setCurrItem(currItem))
    }
    catch (err) {
      throw err
    }
  }
}



export function clearMedia() {
  return async dispatch => {
    try {
      dispatch(_clearMedia())
    }
    catch (err) {
      throw err
    }
  }
}





function _query(mediaCategories) {
  return {
    type: 'QUERY',
    mediaCategories
  }
}
function _setCurrPage(currPage) {
  return {
    type: 'SET_CURR_PAGE',
    currPage
  }
}
function _setCurrItem(currItem) {
  return {
    type: 'SET_CURR_ITEM',
    currItem
  }
}

function _clearMedia() {
  return {
    type: 'CLEAR_MEDIA',

  }
}

function _getState() {
  return {
    type: 'GET_STATE',
  }
}