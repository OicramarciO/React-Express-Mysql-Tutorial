import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          name: "Test User 1",
        },
        {
          name: "Test User 2"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((user) => <li>{user.name}</li>)
        }
      </div >
    );
  }

}

export default App;
