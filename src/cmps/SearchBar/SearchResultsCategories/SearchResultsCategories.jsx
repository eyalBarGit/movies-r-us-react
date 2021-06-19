import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export function SearchResultsCategories({ list, mediaType, searchTerm }) {


    return (
        <div className="search-results-categories">
            <h3>{mediaType}</h3>
            {list && list.slice(0, 5).map((mediaType, idx) => <p className="media-item pointer" key={idx}>{mediaType.Title}</p>)}
            <Link to={`/${searchTerm}/${mediaType}/All/1`}><p className="show-all pointer">Show all...</p></Link>
        </div>
    )

}

SearchResultsCategories.propTypes = {
    mediaType: PropTypes.string,
    media: PropTypes.array
};