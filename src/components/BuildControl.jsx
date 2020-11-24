import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {

      return(
        <div className="BuildControl">
          <div className="Label">{props.label}</div>
          <button className="More" onClick={props.added}>More</button>
          <button className="Less" onClick={props.removed}>Less</button>
        </div>
      );

    };


    export default buildControl;
