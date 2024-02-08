# <<<<<<< HEAD

![image](https://github.com/RoxanaTeodora/Goal-React-App/assets/142969879/5934416e-734c-4cc2-a545-a83b483d5356)

> > > > > > > 5c22ddcffbbb500b3784834810a84dee824196c9

# Goal-React-App This React application consists of three main components: GoalForm, ListOfGoal, and App.

GoalForm Component:

This component renders a form where users can input their goals.
It uses the useState hook to manage form data, specifically the goal and the deadline (by).
The changeHandler function updates the form data state whenever the user types in the input fields.
Upon form submission, the submitHandler function is triggered, which prevents the default form submission behavior, adds the current form data to the list of goals, and resets the form fields to empty strings.

ListOfGoal Component:
This component renders a list of goals.
It receives a prop called allGoals, which is an array containing all the goals.
Using map, it iterates over the allGoals array and renders each goal as a list item with its goal and deadline displayed.

App Component:
This is the root component of the application.
It sets up the overall structure of the app, including the title, and a background for the form and the list of goals.
It uses the useState hook to manage the list of goals (allGoals).
The addGoal function is passed as a prop to the GoalForm component, allowing new goals to be added to the list of goals.
