import React from 'react'
import '../../App.css';


const Shows = (props) => {
  const filterString = props.filterString.toLowerCase()
  const filterShows = props.shows.filter(show => show.displayName.toLowerCase().includes(filterString))

  return (
    <div className='Shows'>

      {filterShows.length > 0 ? filterShows.map(show =>
        <li className="list-group-item highlightOnHover" onClick={props.showsExpandClick} key={show.id} id={show.id}>
          <div className="row" id={show.id}>
            <div className="col-md-6 list-item-font" id={show.id}>{show.displayName}</div>
            <div className="col-md-3 list-item-font" id={show.id}>{show.venue.displayName}</div>
            <div className="col-md-3 list-item-font" id={show.id}>{show.start.date}</div>

          </div>

        </li>) :
        <li className="list-group-item highlightOnHover">
          <div className="row add-a-show">
            <div className="col-md-12 ">
              <h5>I find our lack of that show disturbing.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-outline-primary mt-2">Add that show</button>
            </div>
          </div>

        </li>}
    </div>
  )
}

export default Shows;