import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          userName: "Test User 1",
        },
        {
          userName: "Test User 2"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((user) => <li>{user.userName}</li>)
        }
      </div >
    );
  }

}

export default App;
