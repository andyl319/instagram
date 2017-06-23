import React from 'react';
import { Link, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dfkydaeys/image/upload';
const CLOUD_PRESET = 'forTheGram';

class PhotoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { url: "", caption: "", location: "" };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePhotoDrop = this.handlePhotoDrop.bind(this);
	}

	handlePhotoDrop(photo) {
    this.setState({
      uploadedPhoto: photo[0]
    });

    this.handleUploadToCloud(photo[0]);
  }

  handleUploadToCloud(photo) {
    let upload = request.post(CLOUD_URL).field('upload_preset', CLOUD_PRESET).field('file', photo);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          url: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = this.state;
    delete photo["uploadedPhoto"];

    this.props.createPhoto(photo).then(this.props.router.push(`/home`));
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
          <Dropzone
            multiple={false}
            accept="image/*"
            className="dropzone"
            onDrop={this.handlePhotoDrop}>
            <div className="dropzone-instruction">
              {this.state.url === '' ? 'Drag-and-drop here or click select an image' :
                <img className="dropzone-picture" src={this.state.url} />
							}
            </div>
          </Dropzone>
        </div>
        <div className="photo-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <textarea
                className="caption-input"
                value={this.state.caption}
                placeholder=" Write a caption..."
                onChange={this.update('caption')} />
              <input
                type="text"
                className="location-input"
                value={this.state.location}
                placeholder=" Location"
                onChange={this.update('location')}/>
              <input
                type="hidden"
                value={this.state.url}
                onChange={this.update('url')}/>
              <input
                type='submit'
                value='Post'
                className="submit-button" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoForm);
