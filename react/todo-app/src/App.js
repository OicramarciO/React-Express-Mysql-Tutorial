import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          userId: 1,
          userName: "Test User 1",
          tasks: [
            {
              taskId: 1,
              taskName: "Task Name 1",
              taskDescription: "Task Description for Task 1",
              taskStatus: "ToDo"
            },
            {
              taskId: 2,
              taskName: "Task Name 2",
              taskDescription: "Task Description for Task 2",
              taskStatus: "InProgress"
            },
          ]
        },
        {
          userId: 2,
          userName: "Test User 2",
          tasks: [
            {
              taskId: 3,
              taskName: "Task Name 3",
              taskDescription: "Task Description for Task 3",
              taskStatus: "Completed"
            },
            {
              taskId: 4,
              taskName: "Task Name 4",
              taskDescription: "Task Description for Task 4",
              taskStatus: "Completed"
            },
          ]
        },
      ]
    }
  }

  render() {
    return (
      <table style={{ width: "100%" }}>
        <tr>
          <th>User Name</th>
          <th>Task Name</th>
          <th>Task Status</th>
        </tr>
        {
          this.state.users.map((user) => {
            return user.tasks.map((task) => {
              return (
                <tr>
                  <td>{user.userName}</td>
                  <td>{task.taskName}</td>
                  <td>{task.taskStatus}</td>
                </tr>
              )
            })
          })
        }
      </table>
    );
  }
}

export default App;
