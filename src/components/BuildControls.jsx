import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl';


const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
];


const buildControls = (props) => {

      return(
        <div className="BuildControls">
          {controls.map(control => (
            <BuildControl
               key={control.label}
               label={control.label}
               added={ () => props.ingredientAdded(control.type) }
               removed={ () => props.ingredientRemoved(control.type) }
            />
          ))}
        </div>
      );

};


    export default buildControls;
