
import React from 'react';
import MediaQuery from 'react-responsive';

const ExternalShowDetail = (props) => {
  const displayShow = props.displayShow
  return (
    <div>
      <MediaQuery minWidth={800}>
        <div className="border bts-orange-border bts-white-bg p-4 m-2">
          <h4> {`${displayShow.headliner} ${displayShow.date}`} </h4>
          {displayShow.support1 ?
          <>{`w/ ${displayShow.support1}`}</> : ''}
          {displayShow.support2 ?
          <>{` + ${displayShow.support2}`}</> : ''}
          {displayShow.support3 ?
          <>{` + ${displayShow.support3}`}</> : ''}
          <div className="">
            <iframe
              title="external-event"
              src={`https://eventbrite.com/tickets-external?eid=${displayShow.external}&ref=etckt`}
              frameBorder="0"
              height="600vh"
              width="100%"
              marginHeight="5"
              marginWidth="5"
              scrolling="auto">
            </iframe>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
        <div className="border bts-orange-border bts-white-bg p-2 m-2">
          <h4> {`${displayShow.headliner} ${displayShow.date}`} </h4>
          {displayShow.support1 ?
          <>{`w/ ${displayShow.support1}`}</> : ''}
          {displayShow.support2 ?
          <>{` + ${displayShow.support2}`}</> : ''}
          {displayShow.support3 ?
          <>{` + ${displayShow.support3}`}</> : ''}
          <div className="">
            <iframe
              title="external-event"
              src={`https://eventbrite.com/tickets-external?eid=${displayShow.external}&ref=etckt`}
              frameBorder="0"
              height="380vh"
              width="100%"
              marginHeight="5"
              marginWidth="5"
              scrolling="auto">
            </iframe>
          </div>
        </div>
      </MediaQuery>
    </div>
  )
}

export default ExternalShowDetail  //component function name should match component file name (best practice)
