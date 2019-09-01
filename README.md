The goal of this project is to go over the basic concept of creating a React site(Front End) and having it make request to a Node.js Service(Backend) which will pull data from a MySql database(Database).

Tools you are going to need to complete this task:

1) create-react-app (command) docs: https://create-react-app.dev/docs/getting-started
2) node (command) docs: https://treehouse.github.io/installation-guides/mac/node-mac.html
3) mysql docs: https://www.dev2qa.com/how-to-use-mysql-on-mac/

Before jumping into any code let's go over what we are making in alittle bit more.
In the development world typically you would have a business team and a development team. The business team would have needs and projects that needs to be completed
and it is the role of the developer team to architect, design, and create a product that will satisfy the business team requirements.

Business Requirement:
With that said here are your requirements from the business team:
1) A single page app that essentially tracks and manages a users todo list.
2) The app must be able to allow for a single person to create users.
3) Each user will be an independent entity.
4) A user will contain their own list of task to do.
5) A task needs contain field(s):
    a) Name
    b) Description
    c) Status (ToDo, InProgress, Completed)
6) From a user's perspective they will need to ability to:
    a) change the status of a task.
    b) add a task to a user
    c) delete a task from a user
    d) edit a task feild
7) The app must also be resiliant (if it crashes for any reason, it should be able to be resumed from last confirmed saved data)
8) Functionality is desired over Style (a working app is better than a pretty app) but both are preffered

Developer Understanding:
Let's Break it down:
As a developer, it is on you to understand the task that you are given and adaquetly meet the business expectations whether it is by asking the business to
clarify any misunderstandings and being fully aware of the minimum requirements to be met.
But since this is a tutorial, I will do my best to clarify any questions that would come up by reading the business requirements

1) the product being requested is a todo app; a list to track to do items (tasks that needs to be completed)
2) the app is expected to only be used by one user at an given moment and we get a look at the first requirement which is that they
    need the ability to create *users*.
3) some more context on users is no need for users to know about each other (essentially no team setting(will go over this in more details later))
4) users are expected to have to do tasks unique to themselves (no users will have the exact same task but there can be duplicates)
5) these are the bare requirements needed from the business describing what task must contain
6) these are the bear requirements needed from the business describing what the user of the app can be able to do.
7) the business expects that if they close out the app or the app closes for any reason, they should be able to reopen and pick up where they left off.
8) this just tells the developer working on this task to prioritize functionality over design.

Architecture:
With our requirements in mind let's start by wireframing the application that we are going to make using the bare neccesities:

App:
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

React Structure:
Our React App is going to be simple using basic react components explained in later steps


Node/Express Structure:
Endpoints we are going to need for our api to allow our front end to make calls to and it's purpose:
[
    Method: GET
    Path: 'tasks/'
    Purpose: return all tasks grouped by users
]
[
    Method: POST
    Path: 'task/'
    Purpose: insert a record into the `Tasks` Table
]
[
    Method: POST
    Path: 'user/'
    Purpose: insert a record into the `Users` Table
]
[
    Method: PUT
    Path: 'task/{id}'
    Purpose: update a record in the `Tasks` Table
]
[
    Method: PUT
    Path: 'user/{id}'
    Purpose: update a record in the `Users` Table
]
[
    Method: Delete
    Path: 'task/{id}',
    Purepose: delete a record in the `Task` Table
]
[
    Method: Delete
    Path: 'user/{id}',
    Purepose: delete a record in the `Users` Table
]


MySql Structure:
We are going to need a table for `Users`
_ _ _ _ _ _ _ _ _ _ _ 
| Column   | Type    |
|----------|---------|
| UserID   | Int     |
| UserName | Varchar |
_ _ _ _ _ _ _ _ _ _ _ 

* UserID will be the Primary Key for the `Users` Table and will allow for each user to have their own unique identifier
* UserName will be the column we used to save a user's name

Next we are going to need a table `Tasks`
_ _ _ _ _ _ _ _ _ _ _ _ _ _ 
| Column          | Type    |
|-----------------|---------|
| TaskID          | Int     |
| UserID          | Int     |
| TaskName        | Varchar |
| TaskDescription | Text    |
| TaskStatus      | Enum    |
- - - - - - - - - - - - - - 

* TaskID will be the Primary Key for the `Tasks` Table and will allow for each task to have their own unique identifier
* UserID is what we will use to tie tasks to the user that they are assigned to
* TaskName is going to be the title for the task, used to display a short description
* TaskDescription is where we will put the a longer more detailed explination of a task
* TaskStatus is used for tracking what progress is currently being made on a task (ToDo, InProgress, Completed)


Please continue to the react folder and read the README.md file in there while we gover the front end portion of this tutorial.
`git checkout origin/step-1/initial-project-description`