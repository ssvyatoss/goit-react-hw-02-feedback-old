import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './FeedbackOptions/Statistics';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage';

export class App extends Component {

      state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  onLeaveFeedback = param => {
    console.log(param);
    console.log(this.state[param]);
    this.setState({ [param]: this.state[param] + 1 });
  };

  countTotalFeedback = () => {
    const initialValue = 0;
    const sumWithInitial = Object.values(this.state).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sumWithInitial;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);
    // console.log(this.state);
    if (Object.values(this.state).reduce((previousValue, currentValue) => previousValue + currentValue) === 0) {
      return (
        <div>
          <Section title="Pleease leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
            <h1>Statistics</h1>
        <div>
          <NotificationMessage message="There is no feedback" />
        </div>
        </Section>
        </div>
      );
    } else {
      return (
        <div>
          <Section title="Pleease leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
            <h1>Statistics</h1>
            <div>
              <h2>Good</h2>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positiveFeedback={percent}
              />
            </div>
          </Section>
        </div>
      );
    }
  }
}

// export const StyledApp = ({good, neutral, bad}) => {
//   return (
//   <div className={ sass.buttBox }>
//   <div className={ sass.butt }>{ good }</div>
//   <div className={ sass.butt }>{ neutral }</div>
//   <div className={ sass.butt }>{ bad }</div>
//   </div>
//   );
// };

