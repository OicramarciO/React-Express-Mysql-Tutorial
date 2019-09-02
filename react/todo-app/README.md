Moving on with our project we will start by updating our state with the rest of the data we are going to be working with.

old user object in state
```
users: [
        {
          userName: "Test User 1",
        },
        {
          userName: "Test User 2"
        },
      ]
    }
```

new user object in state
```
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
```

now with all this data that we added lets go ahead and output it to a simple table that will also hold our soon to be created functions

App.js:
    render should now be:
    ```
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
    ```



Next we will add in methods to update our task meaning to add functions that will add, edit and delete users and tasks.

`git checkout origin/step-4/modifying-state`