import React from 'react';
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css';


const Comments = props => (

  <div>

    <div className="comDiv">
      <h3 id="comUser">Dillon</h3>
      <Icon id="comDelete" type="delete" />
      <p id="comText">Dude! Those are some sweet tenders!</p>
    </div>

    <div className="comDiv">
      <h3 id="comUser">Trevor</h3>
      <Icon id="comDelete" type="delete" />
      <p id="comText">I think that's a baby man.</p>
    </div>

    

  </div>
)

export default Comments;
