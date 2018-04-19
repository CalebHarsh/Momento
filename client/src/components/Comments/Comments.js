import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';


const Comments = props => (
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

export default Comments;
