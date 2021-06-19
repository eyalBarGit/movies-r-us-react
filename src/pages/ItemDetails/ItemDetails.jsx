import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getItemById } from '../../store/actions/media.Actions'
import { SearchBar } from '../../cmps/SearchBar/SearchBar';
import { BsFillStarFill } from 'react-icons/bs';
import imgPlaceHolder from '../../assests/image_placeholder.jpg'

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
        <div className="mid-section flex justify-center">
          <img src={detailedItem.Poster === 'N/A' ? imgPlaceHolder : detailedItem.Poster} alt="" />
        </div>
        <div className="bottom-section">
          <div className="media-plot">
            <p>{detailedItem.Plot === 'N/A' ? 'No Plot found' : detailedItem.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  )



}