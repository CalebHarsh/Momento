import React from 'react';
<<<<<<< HEAD
import { Icon } from 'antd';
=======
import { Card, Icon } from 'antd';
>>>>>>> dc67773317e2c2f074b5113d5f7d809f65375dd0
import 'antd/dist/antd.css';


const Comments = props => (
<<<<<<< HEAD
  <div>
    <div className="comDiv">
      <h3 id="comUser">{props.author}</h3>
      {/* eslint jsx-a11y/click-events-have-key-events: 0 */
       /* eslint jsx-a11y/no-static-element-interactions: 0 */}
      <span onClick={() => props.delete(props.photoID, props.id)} ><Icon id="comDelete" type="delete" /></span>
      <p id="comText">{props.comment}
      </p>
    </div>
  </div>
);
=======

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
>>>>>>> dc67773317e2c2f074b5113d5f7d809f65375dd0

export default Comments;
