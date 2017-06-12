import React from 'react';
import { Link } from 'react-router';

const PhotoIndexItem = ({photo, router}) => {
  return (
    <Link className="photo-index-item"
      to={`/photos/${photo.id}`}>
      <li className="photo-index-detail">
        <span className="photo-index-user">{photo.user.username}</span>
        <img className="photo-index-art" src={photo.url} />
        <span className="photo-index-caption">{photo.caption}</span>
        <span className="photo-index-location">{photo.location}</span>
      </li>
    </Link>
  );
};

export default PhotoIndexItem;
