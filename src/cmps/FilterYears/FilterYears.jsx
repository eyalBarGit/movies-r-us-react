import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';

export function Filter({ setUrl }) {
    const history = useHistory();
    const { searchTitle, mediaType, pageNum } = useParams()
    const [filterYears, setYears] = useState()

    useEffect(() => {
        createYears()
    }, [])

    const createYears = () => {
        const years = ['All']
        for (let i = 2021; i >= 1900; i--) {
            const currYear = i;
            years.push(currYear)
        }
        setYears(years)
    }

    const onSelectYear = ({ target }) => {
        const selectedYear = target.value === 'All' ? 'All' : parseInt(target.value)
        console.log('selectedYear:', selectedYear)
        history.push(`/${searchTitle}/${mediaType}/${selectedYear}/${pageNum}`)

    }


    return (
        <div className="filter-years">
            <select onChange={onSelectYear}>
                {filterYears && filterYears.map((year, idx) => <option value={year} key={idx}> {year}</option>)}
            </select>

        </div>
    )



}