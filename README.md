# To do list app

This is a to do list app made with React. To install dependencies run ```npm i``` and to run locally: ```npm run local```.

The app is styled using Bulma.

There is an input field for the user to write a task to add to the list, which appears below the input and buttons when the user hits the submit button. 

Each task can be checked when completed (or unchecked again if necessary). There is a button at the end of every task in the list to remove it. Hovering over the task or the delete button changes the colour of the text of the task. 

The react-csv package will generate a CSV file of the task list. The task data which is stored in a state variable is passed to the CSV component, along with headers. The CSV file will have two columns - one with the task, and one with the task’s status: completed or outstanding.

An error message will pop up if a user tries to add an empty task with no text, or if the user enters a task which is already on the list. 

With more time, I would have added tests, and more features such as the ability to edit a task, or the ability to have multiple named to do lists on the page. 
