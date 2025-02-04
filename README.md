# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>
Question 2: What steps would you take to future improve this?<br>

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Question 5: Describe the benefits of immutable code.<br>

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Question 8: What is A High Order Component?
Question 9: What use cases would a HOC be usefull?
Question 10: What does it indicate when a component is prefixed with `use` and `with`
Question 11: What is a Generic type in typescript?
Question 12: Whats the difference between a controlled and uncontrolled input in React?


Answer to all questions asked in each task:


Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?
Answer 4: CreateSlice in RTK take care of action creators and action we dont need to write action creators and action explicitly and it update state like mutable cause RTK internally use IMMER library so we dont need to use spread operator which is not possible in reducer in redux.

Question 5: Describe the benefits of immutable code
Answer 5: Benefits of immutable code is make debugging easier while development

Question 6: How can you verify the action has been dispatched?
Answer 6: We can verify the action has been dispatched using redux devtools and middleware.

Question 7: explain the use of `useEffect` hook in React
Answer 7: useEffect is a hooks that lets you perform side effects in functional components like async operations, setting up listener and timer.

Question 8: What is A High Order Component?
Answer 8: High Order Component is a function that takes component as argument and return component with enhanced functionality. It helps us to achieve code resusability in react applications.

Question 9: What use cases would a HOC be usefull?
Answer 9: We can use HOC when you have to resuse same logic in different component instead of writing same login multiple time in multiple components like authentication, counting on some event.

Question 10: What does it indicate when a component is prefixed with `use` and `with`
Answer 10: "use" keywords is used to define hooks whereas "with" keywords is used to define HOC.

Question 11: What is a Generic type in typescript?
Answer 11: Generic is placeholder for type in typescript. Generic function in typescript is used to create function that works with various type along with type safety.

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Answer 12: Controlled component/input where input is manage through react state where uncontrolled component/input where input is manage through refs.





