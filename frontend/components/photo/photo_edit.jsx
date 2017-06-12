import React from 'react';
import { Link, withRouter } from 'react-router';

class PhotoEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { url: this.props.photo.url, caption: this.props.photo.caption, location: this.props.photo.location };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

  componentWillMount(){
    this.props.requestPhoto(this.props.params.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = this.state;

    this.props.updatePhoto(photo, this.props.params.id).then(this.props.router.push(`/home`));
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    return (
      <div className="form-container">
        <div className="drop-zone-container">
          <img className="dropzone-picture" src={this.props.photo.url} />
        </div>
        <div className="photo-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <textarea
                className="caption-input"
                value={this.state.caption}
                placeholder="Write a caption..."
                onChange={this.update('caption')} />
              <input
                type="text"
                className="location-input"
                value={this.state.location}
                placeholder="Location"
                onChange={this.update('location')}/>
              <input
                type="hidden"
                value={this.state.url}
                onChange={this.update('url')}/>
              <input
                type='submit'
                value='Edit'
                className="submit-button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoEdit);
