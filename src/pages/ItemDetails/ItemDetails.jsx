import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getItemById } from '../../store/actions/media.Actions'
import { SearchBar } from '../../cmps/SearchBar/SearchBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { BsFillStarFill } from 'react-icons/bs';

export function ItemDetails() {
  const { detailedItem } = useSelector(state => state.mediaReducer)
  const dispatch = useDispatch()
  const { id } = useParams()


  useEffect(() => {
    dispatch(getItemById(id))
  }, [dispatch, id])


  return (
    <div className="item-details ">
      <div className="top-search-bar-section ">
        <div className="top-search-bar margin-center flex center ">
          <SearchBar />
        </div>
      </div>

      <div className="main-content container margin-center">
        <div className="top-row flex space-between align-center">
          <div className="left-side">
            <h2>{detailedItem.Title}</h2>
            <div className="details flex">
              <p>{detailedItem.Year} </p>
              <p> {detailedItem.Rated}</p>
              <p> {detailedItem.Runtime}</p>
            </div>
          </div>
          <div className="right-side flex ">
            {detailedItem.Ratings?.map((rating, idx) => <div key={idx} className="ratings">
              <p className="rating-source">{rating.Source}</p>
              <div className="star flex justify-center">
                <BsFillStarFill />
              </div>
            </div>
            )
            }
          </div>
        </div>

      </div>
    </div>
  )



}