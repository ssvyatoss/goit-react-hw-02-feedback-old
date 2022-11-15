import React from "react";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return <div>
        <span> Good: { good } </span> <br/>
        <span> Neutral: { neutral } </span> <br/>
        <span> Bad: { bad } </span> <br/>
        <span> Total: { total } </span> <br/>
        <span> PositiveFeedback: { positiveFeedback }% </span> 
    </div>
}

export default Statistics;