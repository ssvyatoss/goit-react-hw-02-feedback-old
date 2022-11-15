import React from 'react'
import scss from '../index.module.scss'

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <div className={ scss.buttBox }> 
    {
        options.map(i => {
            return (
              <div className={ scss.buttHover }>
                <button className={ scss.butt } onClick= { () => onLeaveFeedback(i)} key = {i} > {i} </button>
              </div>
            )
        }) 
    }
    </div>
  )
}

export default FeedbackOptions;