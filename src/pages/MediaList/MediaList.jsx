import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrPage } from '../../store/actions/media.Actions'
import { ItemCard } from '../../cmps/ItemCard/ItemCard';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { Link, useHistory } from "react-router-dom";
import { Filter } from '../../cmps/FilterYears/FilterYears'

export function MediaList() {
    const dispatch = useDispatch()
    const history = useHistory();

    const { searchTitle, mediaType, year, pageNum } = useParams()
    const { currPage } = useSelector(state => state.mediaReducer)
    const [currPageNum, setPageNum] = useState(pageNum)

    const createMediaToSearch = useCallback(
        () => {
            return {
                searchTitle: searchTitle,
                mediaType: mediaType,
                year: year,
                pageNum: currPageNum
            }
        },
        [searchTitle, mediaType, year, currPageNum],
    )

    const onSelectPage = (event, value) => {
        setPageNum(value);

    };

    const totalPages = () => {
        return Math.floor(parseInt(currPage.totalResults) / 10) + 1
    }

    const setUrl = useCallback(
        () => {
            history.push(`/${searchTitle}/${mediaType}/${year}/${currPageNum}`)
        },
        [searchTitle, mediaType, year, currPageNum, history],
    )

    useEffect(() => {
        dispatch(getCurrPage(createMediaToSearch()))
        setUrl()
    }, [dispatch, createMediaToSearch, setUrl])


    return (
        <div className="media-list container margin-center">
            <p>search <span style={{ fontSize: '20px', fontWeight: "700" }}> {mediaType === 'movie' || mediaType === "game" ? mediaType + 's' : mediaType}</span> by
                <span style={{ fontSize: '20px', fontWeight: "700" }}> {searchTitle}</span></p>
            <p></p>
            <Filter setUrl={setUrl} />
            <div className="list grid">
                {currPage.Search && currPage.Search.map((item, idx) => <Link key={idx} to={`/${searchTitle}/${item.imdbID}`}>  <ItemCard  item={item} /></Link>)}
            </div>
            <div className="pagination-section flex center">
                <Typography>Page: {currPageNum}</Typography>
                <Pagination count={totalPages()} page={parseInt(currPageNum)} onChange={onSelectPage} />
            </div>
        </div>
    )



}