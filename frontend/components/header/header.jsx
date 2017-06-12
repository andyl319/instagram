import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e){
    e.preventDefault();

    this.props.logout();
    setTimeout(() => {
      this.props.router.push("/login");
    }, 200);

  }



  render(){
    let time = new Date();
    let day;
    if(time.getHours() < 12){
      day = "Good Morning";
    } else{
      if(time.getHours() < 18){
        day = "Good Afternoon";
      } else {
        day = "Good Evening";
      }
    }

  	let greeting = (
      <nav className="user-greeting">
        <a className="welcome">{day}, {this.props.currentUser.username}!</a>
        <Link to="/create" className="fa fa-upload fa-2x" id="upload" aria-hidden="true"></Link>
        <a className="logout" onClick={ this.handleLogOut }>LOGOUT</a>
      </nav>
      );

    return (
      <div>
        <div className="header">
          <Link to="/" className="logo">INSTAGRAM</Link>
          {greeting}
        </div>
    </div>

    );
  }
}


export default withRouter(Header);
