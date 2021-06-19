import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchResultsCategories } from '../SearchResultsCategories/SearchResultsCategories';

export function SearchResultsList({searchTerm}) {
    const state = useSelector(state => state.mediaReducer)
    const { games, series, movies } = state

    useEffect(() => {
        console.log('state:', state)
        // component didMount
        return () => {
            // component willUnMount
        }
    }, [state])



    return (
        <div className="search-results-list">
            {movies.moviesList && <SearchResultsCategories list={movies.moviesList} mediaType={'movie'} searchTerm={searchTerm}/>}
            {games.gamesList && <SearchResultsCategories list={games.gamesList} mediaType={'game'} searchTerm={searchTerm} />}
            {series.seriesList && <SearchResultsCategories list={series.seriesList} mediaType={'series'} searchTerm={searchTerm}/>}

        </div>
    )



}