import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, scoreP} = this.props;
    return (
      <div>
        Alice     : {Math.trunc(scoreP/100)}
        <br />
        Bob       : {(scoreP%10)}
        <br />
        {!playable ? 'Please wait...' : ''}
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealHand(5)}
        >5</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, scoreP} = this.props;
    return (
      <div>
        Alice     : {Math.trunc(scoreP/100)}
        <br />
        Bob       : {scoreP%10}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(5)}
        >5</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(6)}
        >6</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(7)}
        >7</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(8)}
        >8</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(9)}
        >9</button>
        <button
          disabled={!playable}
          onClick={() => parent.revealGuess(10)}
        >10</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {scoreP, outcome} = this.props;
    return (
      <div>
        Thank you for playing. The final score was:
        <br />
        Alice     : {Math.trunc(scoreP/100)}
        <br />
        Bob       : {scoreP%10}
        <br />
        The result: {outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;