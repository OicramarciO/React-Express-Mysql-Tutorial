Before Getting Started:
The approach we are going to take is to first create a regular react app where we mock out our state to what we expect to use. Then we will create our backend layer and switch out our data source from the mock data that we created to the new backend service.

Getting Started:
Create a folder to store your react app and node service, `mkdir project/react/`
`cd react/`
run `create-react-app todo-app`
`cd todo-app`
run `npm run start`


* with what is given to us through `create-react-app` let's go in and remove code we don't need:
App.js:
    - Let's start fresh and nuke App.js and consciously code
    - First lets start by creating our class `App` component and having it extend `React.Component`, the reason we do this is because we know we will need the properties from `React.Component` to handle the passing through of props and handling state. Let's also go ahead and export it

    results should look like:
    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        return (
            <div>
                hello
            </div >
        );
    }

    }

    export default App;
    ```

    - Next we will be adding in our state by creating our constructor function
        when creating our state we will create it with the data that we want to work with. Usually this data is served up by the backend we can used by the front end we are taking a less traditional approach but at the same time since we are going to also create the backend we get to play by our own rules.
    - Our state will consist of an Array of user objects, with each object containing an array of tasks.
    - Next in our our render method we are going to return the name of each user.

    results should look like:
    ```
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
    ```

With this we have create an react app, that handles state and properly returns a visual representation of what is in state, in the next step we are going to further populate our state and start adding in more functionality to manipulate it.

`git checkout origin/step-3/mocking-state`