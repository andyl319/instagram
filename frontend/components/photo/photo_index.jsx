import React from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPhotos();
  }

  render(){
    const {photos, children} = this.props;
    return (
      <div className="photo-index">
        <ul>
          {photos.map(photo => <PhotoIndexItem key={`photo-index${photo.id}`} photo={photo} />)}
        </ul>
        {children}
      </div>
    );
  }
}

export default PhotoIndex;
