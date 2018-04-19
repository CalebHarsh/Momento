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

    <div className="comDiv">
      <h3 id="comUser">Apple</h3>
      <Icon id="comDelete" type="delete" />
      <p id="comText">No those are def some tenders.</p>
    </div>

    <div className="comDiv">
      <h3 id="comUser">Trevor</h3>
      <Icon id="comDelete" type="delete" />
      <p id="comText">Okay... If you guys say so.</p>
    </div>

    <div className="comDiv">
      <h3 id="comUser">Dillon</h3>
      <Icon id="comDelete" type="delete" />
      <p id="comText">Sooooo I guess I'm just making commets for you to test how big these comments get and if they still look okay if you have to scroll.</p>
    </div>

  </div>
)

export default Comments;
