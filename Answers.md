Q & A:

1. What problem does the context API help solve?
--`context API` help manage global state. We use it when we have global data that needs more component to share or when we have to pass data through intermediate components. It makes your API state relatively clean.

2. In your own words, describe  actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
-- Actions are packets of information from redux conaining data and actions. It works hand in hand with the reducers telling them what to do in order to update the state. 
-- Reducers specifies how to update the state. Without the reducers, the actions will not invoked or do the specified action.
-- Store is what sets the state. It is an object that handles source of actions rendered by the `Provider`.  In Redux, the `Store` is the `single source of truth` which means that it is the only way to change your data in UI to be able dispatch redux action which will change state within redux reducer.

3. What is the difference between Application state and Component state?  When would be a good time to use one over the other?
-- Application state are global and immutable, where all components can access all its data. 
-- Componenent state are local and can only be updated within  a specific component and passed down to its children via props. 
-- We use application state to access any global component from the store.

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
-- Redux Thunk is a middleware created by Dan Abramov.  It is a function that looks at every action that passes through the system. It gives the ability to handle asynchronous operations inside our action creators. Redux Thunk lets you call action creators that return a function instead of an action object then used to dispatch the regular synchronous actions inside a function once the asynchronous operations has been completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
-- Context API is my favorite because I don't have to use props.  It is short and simple.  Redux is complicated... too verbose.  I like simple and quick.
