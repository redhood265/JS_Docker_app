import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>追加</button><br />
        <ul>
          <li>todo1</li>
          <li>todo2</li>
        </ul>
      </div>
    );
  }
}