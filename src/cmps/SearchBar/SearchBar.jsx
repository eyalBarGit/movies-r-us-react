import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { query,clearMedia } from '../../store/actions/media.Actions';
import { useDebouncedCallback } from 'use-debounce';
import { SearchResultsList } from './SearchResultsList/SearchResultsList';


export function SearchBar() {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')

    const debounced = useDebouncedCallback((searchTerm) => { setSearchTerm(searchTerm); }, 200);

    useEffect(() => {
        if (searchTerm.length > 3) {
            dispatch(query(searchTerm))
        }
        if (!searchTerm) {
            dispatch(clearMedia())
        }
    }, [searchTerm, dispatch])

    return (
        <div className="search-bar">
            <input onInput={(e) => debounced(e.target.value)} type="text" placeholder="I'm looking for..." />
            <SearchResultsList searchTerm={searchTerm} />
        </div>
    )
}