import React from 'react';


// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';

class DonationsHome extends React.Component {
  state = {
    donations: []
  };


  render() {
    return (

      <div id="background">
        <div className="stretch"></div>
        {/* <img className="stretch" alt="" src="https://images.unsplash.com/photo-1485905947173-6c548e51181c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e105d1cf2fa7351ecb8c15c6948b46d7&auto=format&fit=crop&w=1674&q=800" /> */}
        {/* <img className="stretch" alt="" src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=959228001844e0370bcb348f9d1e000a&auto=format&fit=crop&w=1650&q=80" /> */}
        {/* <img className="stretch" alt="" src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a26fa6ef06a6598afacebe2cde9be106&auto=format&fit=crop&w=1156&q=80" /> */}
        {/* <img className="stretch" alt="" src="https://lh5.googleusercontent.com/-soc0jWq7BAA/TtQcGjT8gzI/AAAAAAAAKBU/4-kUW6Bcz7M/s402/Pizza_Micael_Reynaud.gif" /> */}
        <img className="stretch" alt="" src="https://lh4.googleusercontent.com/-7kHX8mBOKuk/Tp2BBkUR82I/AAAAAAAAFbM/rsO6KFbHxOs/s401/YogaFlame_Micael_Reynaud.gif" />

      </div>
    );
  }
}

export default DonationsHome;
