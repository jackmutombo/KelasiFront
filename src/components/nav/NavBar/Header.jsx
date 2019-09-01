import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class Header extends React.Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => this.setState({ authenticated: true });
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  }
  render() {
    const { authenticated } = this.state;
    return (
      <div className='ui teal secondary pointing inverted menu'>
        <NavLink to='/' exact className='item'>
          <i className='graduation cap icon'></i>
          Kesali
        </NavLink>
        <NavLink to='/subjects' exact className='item'>
          Subjects
        </NavLink>
        <NavLink to='/people' exact className='item'>
          People
        </NavLink>
        {authenticated ? (
          <SignedInMenu signOut={this.handleSignOut} />
        ) : (
          <SignedOutMenu signIn={this.handleSignIn} />
        )}
      </div>
    );
  }
}

export default withRouter(Header);
