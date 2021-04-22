import React from 'react';
import {withRouter} from 'react-router-dom'

function HomePage() {
    return (
      <div>
        <h2>환영합니다.</h2>
      </div>
    );
  }
  
  export default withRouter(HomePage)