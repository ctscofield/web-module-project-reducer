# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The handler function gets triggered which leads it to the actions.
* Then the actions looks to the reducers
* Then the reducers update the state total which gets passed to the totalDisplay
...

* TotalDisplay shows the total plus 1.
