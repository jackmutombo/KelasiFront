import React from "react";

const SignedOutMenu = ({signIn}) => {
  return (
    <div className='right menu'>
      <div onClick={signIn} className='ui button inverted'>
        Login
      </div>
      <div className='ui button inverted'style={{marginLeft: '0.5em'}}>
        Register
      </div>
    </div>
  );
};

export default SignedOutMenu;
