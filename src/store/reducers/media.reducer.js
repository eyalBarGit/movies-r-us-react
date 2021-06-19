
const initialState = {
    movies: {
        moviesList: null,
    },
    games: {
        gamesList: null,
    },
    series: {
        seriesList: null,
    },
    isResultList: true,
    isNoteRecieved: false,
    detailedItem: {},
    currPage: {},
    visitedPages: [],
    sortedChartData: { data: [] }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'QUERY':
            return {
                ...state,
                movies: {
                    ...state.movies,
                    moviesList: action.mediaCategories.movies.Search,
                    resultCount: action.mediaCategories.movies.totalResults
                },
                games: {
                    ...state.games,
                    gamesList: action.mediaCategories.games.Search,
                    resultCount: action.mediaCategories.games.totalResults
                },
                series: {
                    ...state.series,
                    seriesList: action.mediaCategories.series.Search,
                    resultCount: action.mediaCategories.series.totalResults
                },
            };
        case 'CLEAR_MEDIA':
            return {
                ...state,
                movies: {
                    ...state.movies,
                    moviesList: '',
                    resultCount: ''
                },
                games: {
                    ...state.games,
                    gamesList: '',
                    resultCount: ''
                },
                series: {
                    ...state.series,
                    seriesList: '',
                    resultCount: ''
                },
            };
        case 'SET_CURR_PAGE':
            return {
                ...state,
                currPage: action.currPage
            };
        case 'SET_CURR_ITEM':
            return {
                ...state,
                detailedItem: action.currItem
            };

        case 'SET_CARDS':
            return {
                ...state,
                dealer: { ...state.dealer, cards: action.cards }
            };
        case 'GET_STATE':
            console.log('state:', state)
            return {
                ...state
            }
        default:
            return state;
    }
}