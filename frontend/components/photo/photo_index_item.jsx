import React from 'react';
import { Link } from 'react-router';

const PhotoIndexItem = ({photo, router}) => {
  return (
    <Link className="photo-index-item"
      to={`/photos/${photo.id}`}>
      <li className="photo-index-detail">
        <span className="photo-index-info">
          <span className="info-user"><span className="fa fa-user-circle" aria-hidden="true"></span>&nbsp;&nbsp;{photo.user.username}</span>
          <span className="info"><span className="fa fa-location-arrow" aria-hidden="true"></span>&nbsp;&nbsp;{photo.location}</span>
        </span>
        <img className="photo-index-art" src={photo.url} />
        <span className="photo-index-caption">{photo.caption}</span>
      </li>
    </Link>
  );
};

export default PhotoIndexItem;
