import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { Link, withRouter } from 'react-router';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.requestPhoto(this.props.params.id);
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.removePhoto(this.props.params.id).then(this.props.router.push(`/home`));
  }

  render(){
    let photo = this.props.photo;
    let edit = <div></div>;

    if(photo.id){
      if(photo.user_id === this.props.currentUser.id){
        edit =
        <div className="edit-buttons">
          <Link to={`photos/${photo.id}/edit`} className="edit-button"><span className="fa fa-pencil-square-o" aria-hidden="true"></span>&nbsp;&nbsp;EDIT</Link>
          <div className="delete-button" onClick={this.handleDelete}><span className="fa fa-trash" aria-hidden="true"></span>&nbsp;&nbsp;DELETE</div>
        </div>;
      }

      return (
        <div>
          {edit}
          <div className="photo-index">
            <PhotoIndexItem key={`photo-index${photo.id}`} photo={photo} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(PhotoShow);
