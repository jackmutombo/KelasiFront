import React from "react";

const HomePage = ({history}) => {
  return (
    <div class='ui placeholder segment'>
      <div class='ui icon header'>
        <i class='graduation cap icon'> Kelasi App</i>
      </div>
      <div onClick={() => history.push('/subjects')} className='ui animated button' tabIndex='0'>
        <div className='visible content'> Get Started</div>
        <div className='hidden content'>
          <i className='right arrow icon'></i>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
/*
<div className='ui raised very padded text container segment center'>
      <div className='ui two column stackable center aligned grid'>
        <div class='ui vertical divider'></div>
        <div class='middle aligned row'>
          <div className='column'>
            <div className='ui icon header'>
              <i className='graduation cap icon'>Kelasi</i>
            </div>
          </div>
          <div className='column'>
            <div className='ui animated button' tabIndex='0'>
              <div className='visible content'> Get Started</div>
              <div className='hidden content'>
                <i className='graduation cap icon'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


*/
