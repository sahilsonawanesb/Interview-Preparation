## React Interview Quesions
---

**I. React Fundamentals & Core Concepts (1-20)**

1.  **Q: What is React?**
    **A:** React is an open-source JavaScript library developed by Facebook for building user interfaces (UIs) or UI components. It's known for its component-based architecture, declarative programming style, and efficient updates using a Virtual DOM.

2.  **Q: What are the main features of React?**
    **A:**
    *   **JSX (JavaScript XML):** A syntax extension that allows writing HTML-like structures in JavaScript.
    *   **Virtual DOM:** An in-memory representation of the real DOM, enabling efficient updates by diffing and batching changes.
    *   **Component-Based Architecture:** UIs are built as a tree of reusable components.
    *   **One-Way Data Flow (Unidirectional Data Binding):** Data flows down from parent to child components via props.
    *   **Declarative Programming:** You describe *what* the UI should look like based on the current state, and React handles *how* to update the DOM.
    *   **Performance:** Efficient updates due to the Virtual DOM.
    *   **Learn Once, Write Anywhere:** Can be used for web (React DOM), mobile (React Native), and VR (React VR).

3.  **Q: What is JSX? Why use it?**
    **A:** JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI structures directly within their JavaScript code. Browsers don't understand JSX directly; it needs to be transpiled (e.g., by Babel) into regular JavaScript function calls (`React.createElement()`).
    **Why use it?** It makes React code more readable and easier to visualize the component structure, resembling the final HTML output.

4.  **Q: What is the difference between a Component and an Element in React?**
    **A:**
    *   **Element:** A React element is a plain JavaScript object that describes what you want to see on the screen (e.g., a DOM node or another component). Elements are immutable. `React.createElement()` returns an element.
        ```javascript
        const element = <h1>Hello, world</h1>; // This JSX becomes a React element object
        ```
    *   **Component:** A component is a function or a class that optionally accepts input (props) and returns a React element (or a tree of elements) describing how a section of the UI should appear. Components can have state and lifecycle methods (for class components) or use Hooks (for functional components).

5.  **Q: What is the Virtual DOM? How does it work?**
    **A:** The Virtual DOM (VDOM) is an in-memory representation (a lightweight copy) of the actual browser DOM.
    **How it works:**
    1.  When a component's state or props change, React creates a new VDOM tree.
    2.  React then compares (diffs) this new VDOM tree with the previous VDOM tree. This process is called "reconciliation."
    3.  React identifies the minimal changes required to update the real DOM.
    4.  These changes are batched and applied to the real DOM efficiently, minimizing direct DOM manipulations, which are slow.

6.  **Q: What is "reconciliation" in React?**
    **A:** Reconciliation is the algorithm React uses to diff one tree with another to determine which parts need to be changed in the actual DOM. When a component's state or props update, React creates a new virtual DOM tree and compares it with the previous one to efficiently update the browser's DOM.

7.  **Q: What is the difference between React and ReactDOM?**
    **A:**
    *   **`react`:** The core React library. It contains the logic for creating components, managing state and props, and the VDOM diffing algorithm. It's platform-agnostic.
    *   **`react-dom`:** The library that provides DOM-specific methods, allowing React to interact with the browser's DOM. It includes methods like `ReactDOM.createRoot(document.getElementById('root')).render(<App />)`. There are other renderers like `react-native` for mobile apps.

8.  **Q: What are props in React?**
    **A:** "Props" (short for properties) are read-only inputs to components. They are passed down from parent components to child components, allowing components to be configured and customized. Props are how components talk to each other. They are immutable within the receiving component.

9.  **Q: What is `props.children`?**
    **A:** `props.children` is a special prop that allows components to render content passed between their opening and closing tags. It can be any renderable React node (string, element, array of elements, etc.).
    ```jsx
    function Card(props) {
      return <div className="card">{props.children}</div>;
    }
    // Usage:
    <Card>
      <h1>Title</h1>
      <p>Some content</p>
    </Card>
    ```

10. **Q: What is state in React? How is it different from props?**
    **A:**
    *   **State:** Data that is managed *within* a component. It's private and fully controlled by the component. State can change over time (e.g., due to user interaction or network responses), and when state changes, React re-renders the component.
    *   **Differences:**
        *   **Origin:** Props are passed *into* a component from its parent. State is managed *internally* by the component.
        *   **Mutability:** Props are read-only for the receiving component. State can be modified by the component itself (using `this.setState()` in class components or the updater function from `useState` in functional components).
        *   **Control:** Parent controls props. Component controls its own state.

11. **Q: What are keys in React lists? Why are they important?**
    **A:** Keys are special string attributes you need to include when creating lists of elements. They help React identify which items have changed, are added, or are removed.
    **Importance:**
    *   **Efficient Updates:** Keys give elements a stable identity, allowing React to accurately track elements during re-renders, minimizing DOM manipulations and preserving component state for list items.
    *   **Preventing Bugs:** Without keys, React might re-render list items incorrectly, leading to loss of state or unexpected behavior, especially if items are reordered, added, or removed.
    Keys should be unique among siblings but don't need to be globally unique. Using array `index` as a key is generally discouraged if the list items can be reordered, added, or removed from the middle, as it can lead to issues.

12. **Q: What are controlled vs. uncontrolled components in forms?**
    **A:**
    *   **Controlled Components:** Form data (like input values) is handled by React state. The component's state is the "single source of truth." Input values are driven by state, and changes are handled by React event handlers (e.g., `onChange` updates the state).
        ```jsx
        function MyForm() {
          const [name, setName] = useState('');
          return <input type="text" value={name} onChange={e => setName(e.target.value)} />;
        }
        ```
    *   **Uncontrolled Components:** Form data is handled by the DOM itself (like traditional HTML forms). You typically use a `ref` to get form values from the DOM when needed (e.g., on submission).
        ```jsx
        function MyUncontrolledForm() {
          const inputRef = useRef(null);
          const handleSubmit = () => alert('Name: ' + inputRef.current.value);
          return <form onSubmit={handleSubmit}><input type="text" ref={inputRef} /><button type="submit">Submit</button></form>;
        }
        ```
    Controlled components are generally recommended for more predictable state management in React forms.

13. **Q: What is "lifting state up"?**
    **A:** "Lifting state up" is a common pattern in React where shared state is moved to the closest common ancestor of the components that need it. If multiple child components need to reflect or modify the same data, that data should live in their parent component. The parent then passes the state down via props and provides callback functions (also via props) for children to update that state.

14. **Q: What is conditional rendering? How do you achieve it?**
    **A:** Conditional rendering is the process of rendering different UI elements or components based on certain conditions (e.g., state, props).
    Ways to achieve it:
    *   **`if/else` statements:** (Typically outside JSX, preparing variables to render)
    *   **Ternary operator (`condition ? trueExpression : falseExpression`):** Inline within JSX.
    *   **Logical `&&` operator (`condition && expression`):** Renders `expression` if `condition` is true, otherwise renders nothing (or `false`, which React ignores).
    *   **Switch statements or mapping objects to components:** For more complex conditional logic.
    ```jsx
    function Greeting({ isLoggedIn }) {
      if (isLoggedIn) return <UserGreeting />;
      return <GuestGreeting />;
      // Or: return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
      // Or: return isLoggedIn && <UserGreeting />; (if only rendering UserGreeting or nothing)
    }
    ```

15. **Q: What are Fragments in React? Why use them?**
    **A:** Fragments (`<React.Fragment>` or `<></>`) let you group a list of children without adding extra nodes to the DOM.
    **Why use them?**
    *   Avoids unnecessary `div` wrappers, keeping the DOM cleaner.
    *   Some CSS layouts (like Flexbox or Grid) can be broken by extra wrapper `divs`.
    *   Required when a component needs to return multiple elements at the root level.
    ```jsx
    function Columns() {
      return (
        <> {/* Short syntax for React.Fragment */}
          <td>Hello</td>
          <td>World</td>
        </>
      );
    }
    ```

16. **Q: What is the difference between `React.createElement()` and cloning an element?**
    **A:**
    *   **`React.createElement(type, [props], [...children])`:** This is the fundamental API that JSX transpiles to. It creates a *new* React element with the specified type, props, and children.
    *   **`React.cloneElement(element, [props], [...children])`:** This function is used to clone an *existing* React element and merge new props into it. It's useful for modifying an element received via props (e.g., adding an extra prop or event handler to `props.children`).

17. **Q: How do you create a React application (e.g., using common tools)?**
    **A:**
    *   **Create React App (CRA):** `npx create-react-app my-app`. A popular, officially supported way to create single-page React applications with no build configuration needed initially.
    *   **Vite:** `npm create vite@latest my-app -- --template react`. A modern build tool that offers extremely fast Hot Module Replacement (HMR) and optimized builds. Increasingly popular.
    *   **Next.js:** `npx create-next-app@latest`. A framework for server-side rendering (SSR), static site generation (SSG), and more complex React applications.
    *   **Manual Setup:** Configure Webpack/Parcel, Babel, etc., yourself (more complex, gives full control).

18. **Q: What is the significance of the `public/index.html` file in a Create React App project?**
    **A:** `public/index.html` is the main HTML page that serves as the entry point for your React application. React will inject your bundled JavaScript code into this file, typically mounting your root React component into a `div` element (commonly with `id="root"`) within this HTML file. It's also where you can add meta tags, link stylesheets, or include other global scripts.

19. **Q: What is "Thinking in React"?**
    **A:** "Thinking in React" refers to the process and mindset for building UIs with React:
    1.  **Break the UI into a Component Hierarchy:** Identify distinct UI parts and define them as components.
    2.  **Build a Static Version:** Create the UI with static data, passing props down. Don't use state yet.
    3.  **Identify the Minimal (but complete) Representation of UI State:** Determine what data needs to change over time and where it should live (which component "owns" the state).
    4.  **Identify Where Your State Should Live:** Find the common owner or lift state up.
    5.  **Add Inverse Data Flow:** Allow child components to update the state in parent components via callback props.

20. **Q: Explain one-way data flow in React.**
    **A:** One-way data flow (or unidirectional data flow) means that data in a React application flows in a single direction: from parent components down to child components via props. Child components cannot directly modify the props they receive or the state of their parent. To modify data in a parent, the parent must provide a callback function as a prop, which the child can then call. This makes the data flow predictable and easier to debug.

---

**II. Components: Functional & Class (21-30)**

21. **Q: What are the two main types of components in React?**
    **A:**
    1.  **Functional Components:** Simple JavaScript functions that accept props as an argument and return JSX. With Hooks, they can now manage state and lifecycle effects.
        ```jsx
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
        ```
    2.  **Class Components:** ES6 classes that extend `React.Component`. They can have state (managed in `this.state`) and lifecycle methods.
        ```jsx
        class Welcome extends React.Component {
          render() {
            return <h1>Hello, {this.props.name}</h1>;
          }
        }
        ```
    Functional components with Hooks are now the preferred way to write components in modern React.

22. **Q: When would you use a Class Component over a Functional Component (historically and currently)?**
    **A:**
    *   **Historically (Before Hooks):**
        *   Class components were necessary if you needed state or lifecycle methods (like `componentDidMount`).
        *   Functional components were "stateless functional components" (SFCs), primarily for presentation.
    *   **Currently (With Hooks):**
        *   Functional components with Hooks can do everything class components can (state, lifecycle effects, context, etc.). They are generally preferred for their conciseness and easier testability.
        *   You might still use class components if:
            *   Working in an older codebase that heavily uses them.
            *   You need lifecycle methods like `getSnapshotBeforeUpdate` or `componentDidCatch` (for Error Boundaries), which don't have direct Hook equivalents (though `useEffect` covers most lifecycle needs, and Error Boundaries still need to be classes).

23. **Q: How do you define state and update it in a Class Component?**
    **A:**
    *   **Define State:** Initialize state in the `constructor` by assigning an object to `this.state`.
    *   **Update State:** Use `this.setState(updater, [callback])`. `setState()` schedules an update to a component's state object. When state changes, the component responds by re-rendering.
        ```jsx
        class Counter extends React.Component {
          constructor(props) {
            super(props);
            this.state = { count: 0 };
          }
          increment = () => {
            this.setState({ count: this.state.count + 1 });
            // Or using updater function for safety with async updates:
            // this.setState(prevState => ({ count: prevState.count + 1 }));
          };
          render() {
            return (
              <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
              </div>
            );
          }
        }
        ```

24. **Q: Why should you not modify `this.state` directly in class components?**
    **A:** Modifying `this.state` directly (e.g., `this.state.count = 1;`) will not trigger a re-render of the component. React doesn't know the state has changed. `this.setState()` is the only legitimate way to update state because it tells React that the state has changed, queues a re-render, and handles the update process efficiently. The only place you can assign `this.state` directly is in the constructor.

25. **Q: What is the purpose of `super(props)` in a class component constructor?**
    **A:** In a class component's constructor, `super(props)` calls the constructor of the parent class (`React.Component`). This is necessary to:
    1.  Properly initialize the `React.Component` base class.
    2.  Make `this.props` available within the constructor. If you don't call `super(props)` (or just `super()`), `this.props` will be `undefined` inside the constructor (though it will be available in other methods like `render`). It's a good practice to always pass `props` to `super`.

26. **Q: What are "refs" in React? How do you create and use them?**
    **A:** Refs provide a way to access the underlying DOM elements or React components directly.
    Use cases: Managing focus, text selection, or media playback; triggering imperative animations; integrating with third-party DOM libraries.
    **Creating and Using:**
    *   **`React.createRef()` (Class components or older functional components):**
        ```jsx
        class MyComponent extends React.Component {
          constructor(props) {
            super(props);
            this.myInputRef = React.createRef();
          }
          componentDidMount() {
            this.myInputRef.current.focus();
          }
          render() {
            return <input type="text" ref={this.myInputRef} />;
          }
        }
        ```
    *   **`useRef` Hook (Functional components):**
        ```jsx
        function MyFunctionalComponent() {
          const myInputRef = useRef(null); // Initialize with null
          useEffect(() => {
            myInputRef.current.focus();
          }, []); // Empty dependency array: run once after mount
          return <input type="text" ref={myInputRef} />;
        }
        ```
    The `current` property of the ref object holds the actual DOM element or component instance.

27. **Q: What is the difference between a Presentational Component and a Container Component? (Pattern)**
    **A:** This is a pattern, less emphasized now with Hooks but still a useful concept:
    *   **Presentational Components (Dumb Components):**
        *   Concerned with *how things look*.
        *   Receive data and callbacks exclusively via props.
        *   Rarely have their own state (may have UI state, but not app data state).
        *   Often functional components.
        *   Example: A button, an item in a list.
    *   **Container Components (Smart Components):**
        *   Concerned with *how things work*.
        *   Provide data and behavior to presentational or other container components.
        *   Often stateful, may call Flux actions or fetch data.
        *   Render presentational components.
        *   Example: A user list container that fetches users and renders a `UserListItem` presentational component for each.
    With Hooks, the distinction is blurrier as functional components can manage their own data logic. However, the principle of separating concerns (UI vs. logic) remains valuable.

28. **Q: What are prop types (`PropTypes`)? Why use them?**
    **A:** `PropTypes` (from the `prop-types` library) allow you to define the expected data types for a component's props. If a component receives a prop of an incorrect type during development, React will log a warning in the console.
    **Why use them?**
    *   **Debugging:** Helps catch bugs early by ensuring components receive the correct type of data.
    *   **Documentation:** Serves as documentation for how a component should be used.
    *   **Readability:** Makes it easier to understand what kind of props a component expects.
    ```jsx
    import PropTypes from 'prop-types';
    function Greeting({ name, age }) {
      return <p>Hello, {name}! You are {age} years old.</p>;
    }
    Greeting.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number
    };
    Greeting.defaultProps = {
      age: 30
    };
    ```
    TypeScript provides similar (and often more robust) type checking at compile time.

29. **Q: How can you set default values for props?**
    **A:**
    *   **Class Components:** Using a static `defaultProps` property on the class.
        ```jsx
        class Greeting extends React.Component {
          static defaultProps = { name: 'Guest' };
          render() { return <h1>Hello, {this.props.name}</h1>; }
        }
        ```
    *   **Functional Components:**
        *   Assigning a `defaultProps` property to the function:
            ```jsx
            function Greeting(props) {
              return <h1>Hello, {props.name}</h1>;
            }
            Greeting.defaultProps = { name: 'Guest' };
            ```
        *   Using ES6 default parameters (often preferred):
            ```jsx
            function Greeting({ name = 'Guest' }) {
              return <h1>Hello, {name}</h1>;
            }
            ```

30. **Q: Explain the concept of "composition over inheritance" in React.**
    **A:** React favors composition over inheritance as a way to reuse code between components.
    *   **Composition:** Building complex components by combining simpler, smaller components. This is achieved by passing components as props (e.g., `props.children` or dedicated props like `left` and `right` in a `SplitPane` component).
    *   **Inheritance:** (Less common in React) Creating a base component class and having other components extend it to inherit its functionality.
    React recommends using composition because it's more flexible and less prone to the issues that can arise with deep inheritance hierarchies (like tight coupling). Props and component nesting provide powerful ways to customize behavior and appearance.

---

**III. React Lifecycle (Class Components) (31-40)**
*(Note: While Hooks are preferred, understanding class lifecycle is still valuable for older codebases and conceptual understanding.)*

31. **Q: What are component lifecycle methods?**
    **A:** Lifecycle methods are special methods in class components that are automatically invoked at different stages of a component's life: mounting (being inserted into the DOM), updating (re-rendering due to prop or state changes), and unmounting (being removed from the DOM).

32. **Q: List the common lifecycle methods in the order they are called.**
    **A:**
    *   **Mounting:**
        1.  `constructor()`
        2.  `static getDerivedStateFromProps()`
        3.  `render()`
        4.  `componentDidMount()`
    *   **Updating (due to new props or `setState`):**
        1.  `static getDerivedStateFromProps()`
        2.  `shouldComponentUpdate()`
        3.  `render()`
        4.  `getSnapshotBeforeUpdate()`
        5.  `componentDidUpdate()`
    *   **Unmounting:**
        1.  `componentWillUnmount()`
    *   **Error Handling (during rendering, in lifecycle methods, or in constructors of children):**
        1.  `static getDerivedStateFromError()`
        2.  `componentDidCatch()`

33. **Q: What happens in the `constructor()` method?**
    **A:**
    *   Called before the component is mounted.
    *   Used for:
        1.  Initializing local state (by assigning an object to `this.state`).
        2.  Binding event handler methods to an instance (`this.handleClick = this.handleClick.bind(this);`).
    *   Must call `super(props)` before any other statement.

34. **Q: What is the purpose of `render()`?**
    **A:** The `render()` method is the only required method in a class component.
    *   It's a pure function with respect to props and state (should not modify component state or interact directly with the browser).
    *   It examines `this.props` and `this.state` and returns one of the following:
        *   React elements (e.g., `<div />`, `<MyComponent />`)
        *   Arrays and fragments
        *   Portals
        *   Strings and numbers (rendered as text nodes)
        *   Booleans or `null` (render nothing)

35. **Q: When is `componentDidMount()` called? What are common use cases?**
    **A:** Called immediately after a component is mounted (inserted into the DOM tree).
    Common use cases:
    *   Making network requests (e.g., fetching data from an API).
    *   Setting up subscriptions (e.g., timers, event listeners). (Remember to unsubscribe in `componentWillUnmount()`).
    *   Interacting with the DOM (e.g., focusing an input element).

36. **Q: When is `componentDidUpdate(prevProps, prevState, snapshot)` called? What are common use cases?**
    **A:** Called immediately after updating occurs (not for the initial render).
    Common use cases:
    *   Making network requests based on prop/state changes (compare `prevProps`/`prevState` with current `this.props`/`this.state` to avoid infinite loops).
    *   Updating the DOM in response to prop or state changes.
    *   The `snapshot` value comes from `getSnapshotBeforeUpdate()`.

37. **Q: When is `componentWillUnmount()` called? What are common use cases?**
    **A:** Called immediately before a component is unmounted and destroyed.
    Common use cases:
    *   Cleaning up any subscriptions created in `componentDidMount()` (e.g., canceling network requests, removing event listeners, clearing timers). Prevents memory leaks.

38. **Q: What is `shouldComponentUpdate(nextProps, nextState)`? Why use it?**
    **A:** This method lets React know if a component's output is not affected by the current change in state or props. By default, it returns `true`, causing a re-render on every state or prop change.
    **Why use it?** For performance optimization. If you know that a component doesn't need to re-render under certain conditions, you can return `false` from `shouldComponentUpdate()` to skip the re-rendering process for that component and its children.
    React provides `React.PureComponent` as a shallow comparison alternative. For functional components, `React.memo` serves a similar purpose.

39. **Q: What is `static getDerivedStateFromProps(props, state)`?**
    **A:** Called right before `render()`, both on initial mount and on subsequent updates. It should return an object to update the state, or `null` to update nothing.
    It exists for rare use cases where the state depends on changes in props over time. It's often misused; usually, fully controlled components or memoization with `key` prop changes are better alternatives.

40. **Q: What are Error Boundaries? How do you create them?**
    **A:** Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
    **How to create:** A class component becomes an Error Boundary if it defines either (or both) of these lifecycle methods:
    *   `static getDerivedStateFromError(error)`: Renders a fallback UI after an error has been thrown.
    *   `componentDidCatch(error, errorInfo)`: Logs error information.
    ```jsx
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
      static getDerivedStateFromError(error) {
        return { hasError: true }; // Update state so the next render will show the fallback UI.
      }
      componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo); // Log the error
      }
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>; // Fallback UI
        }
        return this.props.children;
      }
    }
    // Usage: <ErrorBoundary><MyPotentiallyCrashingComponent /></ErrorBoundary>
    ```
    Error Boundaries do *not* catch errors for: event handlers, async code (e.g., `setTimeout`), SSR, or errors in the error boundary itself.

---

**IV. React Hooks (41-60)**

41. **Q: What are Hooks in React? Why were they introduced?**
    **A:** Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
    **Why introduced?**
    *   **Reuse State Logic:** Allow extracting stateful logic from components so it can be tested independently and reused (Custom Hooks).
    *   **No More `this`:** Avoid the complexities and confusion of `this` keyword in class components.
    *   **Simpler Components:** Functional components with Hooks are often more concise and easier to read than class components.
    *   **Better Organization:** Group related logic (e.g., data fetching and setting state) together in `useEffect`, rather than splitting it across lifecycle methods.

42. **Q: What are the Rules of Hooks?**
    **A:**
    1.  **Only Call Hooks at the Top Level:** Don't call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the same order each time a component renders, which is how React preserves state between `useState` and `useEffect` calls.
    2.  **Only Call Hooks from React Functions:** Call them from React functional components or custom Hooks. Don't call them from regular JavaScript functions.

43. **Q: Explain the `useState` Hook.**
    **A:** `useState` is a Hook that lets you add React state to functional components.
    *   It returns a pair: the current state value and a function that lets you update it.
    *   `const [state, setState] = useState(initialState);`
    *   `setState` can take a new value or a function that receives the previous state and returns an updated value (useful for updates based on previous state).
    ```jsx
    import React, { useState } from 'react';
    function Counter() {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
    }
    ```

44. **Q: Explain the `useEffect` Hook. What is its dependency array for?**
    **A:** `useEffect` lets you perform side effects in functional components (e.g., data fetching, subscriptions, manually changing the DOM). It runs after every render by default.
    *   `useEffect(didUpdateFunction, [dependencies]);`
    *   **Dependency Array (`[dependencies]`)**:
        *   **Omitted:** The effect runs after *every* render.
        *   **Empty array (`[]`):** The effect runs only *once* after the initial render (mimicking `componentDidMount`) and the cleanup function runs on unmount.
        *   **With values (`[prop, state]`):** The effect runs only if any of the values in the dependency array have changed since the last render.
    *   **Cleanup Function:** `useEffect` can return a cleanup function. This function runs before the component unmounts, and also before the effect runs again (if dependencies changed) to clean up from the previous effect.
    ```jsx
    useEffect(() => {
      document.title = `You clicked ${count} times`; // Side effect
      return () => {
        // console.log('Cleanup from title effect'); // Cleanup (optional)
      };
    }, [count]); // Only re-run if count changes
    ```

45. **Q: How do you mimic `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` using `useEffect`?**
    **A:**
    *   **`componentDidMount`:** `useEffect(() => { /* effect */ }, []);` (empty dependency array)
    *   **`componentDidUpdate`:** `useEffect(() => { /* effect */ }, [dep1, dep2]);` (with dependencies). To mimic precisely, you might need a ref to store previous props/state if the effect depends on them changing.
        ```jsx
        const prevCountRef = useRef();
        useEffect(() => {
          if (prevCountRef.current !== undefined && prevCountRef.current !== count) {
            console.log('Count updated from', prevCountRef.current, 'to', count);
          }
          prevCountRef.current = count;
        }, [count]);
        ```
    *   **`componentWillUnmount`:** Return a cleanup function from `useEffect(() => { return () => { /* cleanup */ }; }, []);`

46. **Q: Explain the `useContext` Hook.**
    **A:** `useContext` accepts a context object (the value returned from `React.createContext`) and returns the current context value for that context. The current context value is determined by the `value` prop of the nearest `<MyContext.Provider>` above the calling component in the tree.
    It's used to avoid "prop drilling" (passing props down through many levels).
    ```jsx
    // theme-context.js
    const ThemeContext = React.createContext('light');

    // App.js
    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    // Toolbar.js
    function Toolbar() {
      const theme = useContext(ThemeContext); // Consumes the context
      return <div>Active theme: {theme}</div>;
    }
    ```

47. **Q: Explain the `useReducer` Hook. When might you use it over `useState`?**
    **A:** `useReducer` is an alternative to `useState` for managing more complex state logic. It's similar to reducers in Redux.
    *   `const [state, dispatch] = useReducer(reducer, initialArg, init);`
    *   `reducer`: `(state, action) => newState` function.
    *   `dispatch`: A function to send actions to the reducer.
    **When to use over `useState`:**
    *   When state logic is complex and involves multiple sub-values.
    *   When the next state depends on the previous one in a more involved way.
    *   When you want to optimize performance for components that trigger deep updates because you can pass `dispatch` down instead of callbacks.
    *   When managing state across multiple components that need to interact with that state in complex ways.
    ```jsx
    const initialState = { count: 0 };
    function reducer(state, action) {
      switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        default: throw new Error();
      }
    }
    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
      );
    }
    ```

48. **Q: Explain the `useRef` Hook. What are its common use cases?**
    **A:** `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.
    Common use cases:
    1.  **Accessing DOM Elements:** To get direct access to an underlying DOM element (as shown previously with input focus).
    2.  **Storing Mutable Values:** To hold a mutable value that does *not* cause a re-render when it changes. This is useful for storing things like timer IDs, previous state/prop values, or any value you want to persist across renders without triggering them.
        ```jsx
        function Timer() {
          const intervalRef = useRef(null);
          useEffect(() => {
            intervalRef.current = setInterval(() => console.log('Tick'), 1000);
            return () => clearInterval(intervalRef.current);
          }, []);
          return <div>Timer is running (check console)</div>;
        }
        ```

49. **Q: Explain the `useMemo` Hook. Why is it used?**
    **A:** `useMemo` returns a memoized value. It will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
    *   `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
    **Why use it?**
    *   For performance optimization by caching the result of an expensive calculation.
    *   To prevent re-creating objects/arrays on every render if they are dependencies for other Hooks (like `useEffect`) or props for memoized child components (`React.memo`), thus preventing unnecessary re-renders of children.

50. **Q: Explain the `useCallback` Hook. How is it different from `useMemo`?**
    **A:** `useCallback` returns a memoized callback function. It will return the same function instance if its dependencies haven't changed.
    *   `const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`
    **Difference from `useMemo`:**
    *   `useMemo` memoizes a *value* (the result of a function call).
    *   `useCallback` memoizes a *function itself*. `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.
    **Why use it?**
    *   For performance optimization: When passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g., children wrapped in `React.memo`). If the callback is not memoized, a new function instance is created on every parent render, causing the child to re-render even if its props haven't effectively changed.

51. **Q: What are Custom Hooks? How do you create one?**
    **A:** Custom Hooks are JavaScript functions whose names start with `use` and that can call other Hooks. They are a mechanism to reuse stateful logic between components without changing your component hierarchy or using patterns like HOCs or render props.
    **How to create:**
    1.  Create a function starting with `use` (e.g., `useFormInput`, `useWindowWidth`).
    2.  Inside, you can call built-in Hooks like `useState`, `useEffect`, etc.
    3.  Return whatever values or functions the components using this Hook will need.
    ```jsx
    // Custom Hook: useDocumentTitle.js
    import { useEffect } from 'react';
    function useDocumentTitle(title) {
      useEffect(() => {
        document.title = title;
        return () => { document.title = 'React App'; }; // Optional cleanup
      }, [title]);
    }
    export default useDocumentTitle;

    // Usage in a component
    import useDocumentTitle from './useDocumentTitle';
    function MyComponent() {
      useDocumentTitle('My Page Title');
      return <div>Content...</div>;
    }
    ```

52. **Q: Can you use Hooks in class components?**
    **A:** No, Hooks can only be used in functional components or other custom Hooks. They cannot be used inside class components.

53. **Q: What is the purpose of the `useLayoutEffect` Hook? How does it differ from `useEffect`?**
    **A:** `useLayoutEffect` has the same signature as `useEffect`, but it fires *synchronously* after all DOM mutations, right *before* the browser has a chance to paint.
    **Differences & Use Cases:**
    *   **Timing:**
        *   `useEffect`: Runs *asynchronously* after the render is committed to the screen (after paint).
        *   `useLayoutEffect`: Runs *synchronously* after render but *before* paint.
    *   **Use Cases for `useLayoutEffect`:**
        *   When you need to read layout from the DOM and synchronously re-render. For example, measuring an element's size or position and then updating state based on that measurement before the user sees any visual inconsistencies.
        *   If your effect mutates the DOM in a way that's visible to the user, and you want to ensure it happens before the browser paints to avoid a flicker.
    **Caution:** `useLayoutEffect` can block visual updates. Prefer `useEffect` when possible to avoid performance issues. Use `useLayoutEffect` only when `useEffect` causes a flicker.

54. **Q: What is the `useDebugValue` Hook?**
    **A:** `useDebugValue` can be used to display a label for custom Hooks in React DevTools. It's primarily useful for authors of shared custom Hooks in libraries.
    ```jsx
    function useFriendStatus(friendID) {
      const [isOnline, setIsOnline] = useState(null);
      // ...
      useDebugValue(isOnline ? 'Online' : 'Offline'); // Shows in DevTools for this hook
      return isOnline;
    }
    ```
    It can also take a formatting function as a second argument to defer formatting an expensive-to-calculate value unless the Hook is inspected.

55. **Q: When might `useState`'s updater function be preferred over passing a direct value?**
    **A:** The updater function form `setState(prevState => newState)` is preferred when the new state depends on the previous state.
    Reason: State updates in React can be asynchronous and batched. If you update state multiple times in a single event handler using the direct value form (`setState(count + 1)`), React might batch these updates, and `count` might not be the latest value from the previous `setState` call within that same batch. The updater function always receives the most up-to-date previous state.
    ```jsx
    // Less safe if called multiple times in one go:
    // setCount(count + 1);
    // setCount(count + 1); // If count was 0, it might become 1, not 2.

    // Safer:
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // If prevCount was 0, this will correctly result in 2.
    ```

56. **Q: How does React associate Hook calls with components?**
    **A:** React relies on the **order in which Hooks are called** within a component. As long as Hooks are called in the same order on every render (which is why the Rules of Hooks exist - no Hooks in conditionals/loops), React can correctly associate the state and other Hook data with the component instance. React maintains an internal list of "memory cells" for each component, and each Hook call reads/writes to the next cell in sequence.

57. **Q: Can you conditionally run an effect using `useEffect`?**
    **A:** You cannot conditionally call `useEffect` itself due to the Rules of Hooks. However, you can put the conditional logic *inside* the effect:
    ```jsx
    useEffect(() => {
      if (someCondition) {
        // Perform side effect
      }
    }, [someCondition, otherDependency]);
    ```
    Alternatively, if the condition is based on props/state that can go into the dependency array, and the effect should simply not run if they don't meet a criterion, the dependency array handles this. If a dependency changes but the condition inside the effect is false, the effect still runs but does nothing.

58. **Q: What is `useImperativeHandle`? When would you use it?**
    **A:** `useImperativeHandle(ref, createHandle, [deps])` customizes the instance value that is exposed to parent components when using `ref`. It should be used with `React.forwardRef`.
    When to use:
    *   Rarely. It breaks the declarative nature of React.
    *   When you need to expose specific imperative methods from a child component to a parent (e.g., a `focus()` method on a custom input component, or methods to control a video player).
    ```jsx
    const FancyInput = React.forwardRef((props, ref) => {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => { inputRef.current.focus(); },
        clear: () => { inputRef.current.value = ''; }
      }));
      return <input ref={inputRef} />;
    });
    // Parent:
    // const fancyInputRef = useRef();
    // <FancyInput ref={fancyInputRef} />
    // <button onClick={() => fancyInputRef.current.focus()}>Focus Input</button>
    ```

59. **Q: If you have an `useEffect` that fetches data, how do you prevent it from running on every render if no dependencies change?**
    **A:** Provide an empty dependency array `[]` if the data fetch should only happen once on mount. If the fetch depends on some props or state (e.g., a user ID), include those in the dependency array.
    ```jsx
    useEffect(() => {
      // Fetch data based on userId
      fetchData(userId).then(setData);
    }, [userId]); // Re-fetch only if userId changes
    ```
    Make sure to include all variables from the component scope that are used inside the effect and could change over time in the dependency array. ESLint plugins (`eslint-plugin-react-hooks`) help enforce this.

60. **Q: How do you handle data fetching and cleanup in `useEffect`?**
    **A:**
    ```jsx
    useEffect(() => {
      let isMounted = true; // Flag to track mounted state
      const abortController = new AbortController(); // For aborting fetch

      async function fetchData() {
        try {
          const response = await fetch(`/api/data/${itemId}`, { signal: abortController.signal });
          const result = await response.json();
          if (isMounted) {
            setData(result);
          }
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted');
          } else if (isMounted) {
            setError(error);
          }
        }
      }

      fetchData();

      return () => { // Cleanup function
        isMounted = false; // Set flag to false on unmount
        abortController.abort(); // Abort the fetch request if it's still in progress
      };
    }, [itemId]); // Dependency: re-fetch if itemId changes
    ```
    The `isMounted` flag helps prevent `setState` calls on an unmounted component. The `AbortController` is the modern way to cancel fetch requests.

---

**V. React Router & State Management (61-75)**

61. **Q: What is client-side routing? How does React Router enable it?**
    **A:** Client-side routing allows navigating between different "pages" or views in a Single Page Application (SPA) without causing a full page reload from the server. The routing logic is handled by JavaScript running in the browser.
    React Router enables this by:
    *   Listening to URL changes (using browser history API or hash changes).
    *   Mapping URL paths to specific React components.
    *   Rendering the appropriate component when the URL matches its path, updating the UI dynamically.

62. **Q: What are the main components of React Router (e.g., v6)?**
    **A:** (Focusing on v6 as it's current)
    *   **`<BrowserRouter>` (or `<HashRouter>`):** Wraps your application, providing routing context. `<BrowserRouter>` uses the HTML5 history API; `<HashRouter>` uses the URL hash.
    *   **`<Routes>`:** A container for one or more `<Route>` elements. It looks through its children `<Route>`s to find the best match for the current URL and renders that branch of the UI.
    *   **`<Route path="your-path" element={<YourComponent />}>`:** Defines a mapping between a URL path and a component to render. Can be nested.
    *   **`<Link to="/path">`:** Renders an `<a>` tag for declarative navigation, preventing full page reloads.
    *   **`useNavigate()` Hook:** Programmatic navigation (e.g., `navigate('/dashboard')`).
    *   **`useParams()` Hook:** Access URL parameters (e.g., `/users/:id`).
    *   **`Outlet` Component:** Used in parent routes to render their child route elements.

63. **Q: How do you pass route parameters with React Router?**
    **A:** Define a dynamic segment in your route path using a colon (e.g., `:id`). Then use the `useParams()` Hook in the component rendered by that route to access the parameter's value.
    ```jsx
    // In your route setup:
    <Route path="/users/:userId" element={<UserProfile />} />

    // In UserProfile.js:
    import { useParams } from 'react-router-dom';
    function UserProfile() {
      let { userId } = useParams(); // userId will be the value from the URL
      return <div>User ID: {userId}</div>;
    }
    ```

64. **Q: How do you perform programmatic navigation with React Router?**
    **A:** Use the `useNavigate()` Hook.
    ```jsx
    import { useNavigate } from 'react-router-dom';
    function MyComponent() {
      const navigate = useNavigate();
      const handleLogin = () => {
        // ... login logic ...
        navigate('/dashboard'); // Navigate to /dashboard
        // Or: navigate(-1); // Go back
      };
      return <button onClick={handleLogin}>Login</button>;
    }
    ```

65. **Q: What is "prop drilling"? How can it be avoided?**
    **A:** Prop drilling is the situation where you pass props down through multiple layers of nested components, even if some intermediate components don't directly use those props but only pass them along.
    How to avoid:
    *   **Context API:** Provides a way to share values like themes, user info, or language preferences between components without explicitly passing a prop through every level of the tree.
    *   **State Management Libraries (Redux, Zustand, Jotai, etc.):** For more complex global state, these libraries provide centralized stores accessible from any component.
    *   **Component Composition:** Restructure components to pass more specific children, avoiding the need for intermediate components to know about certain props.

66. **Q: Explain React's Context API. When is it useful?**
    **A:** The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.
    It consists of:
    1.  **`React.createContext(defaultValue)`:** Creates a Context object.
    2.  **`<MyContext.Provider value={/* some value */}>`:** A component that allows consuming components to subscribe to context changes. It accepts a `value` prop to be passed to consuming components that are descendants of this Provider.
    3.  **Consuming the Context:**
        *   **`useContext(MyContext)` Hook:** The preferred way in functional components.
        *   **`<MyContext.Consumer>` Component:** (Older way) Requires a render prop function as a child.
    **Useful for:** Global data like themes, user authentication status, language settings, or any state that many components at different nesting levels need.

67. **Q: What are the limitations or downsides of using the Context API?**
    **A:**
    *   **Re-renders:** When the `value` prop of a Provider changes, all components consuming that context will re-render, even if they only care about a part of the `value` object that didn't change. This can be mitigated by splitting contexts or using `useMemo` for the provider's value.
    *   **Not Ideal for High-Frequency Updates:** For state that updates very frequently, Context might lead to performance issues due to widespread re-renders. Libraries like Redux or Zustand are often better optimized for this.
    *   **Coupling:** Can make components less reusable if they are tightly coupled to a specific context.
    *   **Testing:** Components consuming context can be slightly harder to test in isolation; you might need to wrap them in a Provider during tests.

68. **Q: Briefly explain Redux. What are its core principles?**
    **A:** Redux is a predictable state container for JavaScript applications (often used with React).
    Core Principles:
    1.  **Single Source of Truth:** The state of your whole application is stored in an object tree within a single *store*.
    2.  **State is Read-Only:** The only way to change the state is to emit an *action*, an object describing what happened.
    3.  **Changes are Made with Pure Functions:** To specify how the state tree is transformed by actions, you write pure *reducers*. A reducer takes the previous state and an action, and returns the next state.
    Key parts: Store, Actions, Reducers, `dispatch` function.

69. **Q: When might you choose Redux (or a similar global state manager) over Context API?**
    **A:**
    *   **Large-Scale Applications:** When managing a lot of global state that changes frequently.
    *   **Complex State Logic:** When state transitions are intricate and involve many parts of the application.
    *   **Middleware Requirements:** If you need middleware for tasks like logging, handling asynchronous actions (e.g., API calls with `redux-thunk` or `redux-saga`), or routing.
    *   **DevTools:** Redux DevTools provide powerful debugging capabilities (time-travel debugging, action logging).
    *   **Performance Optimization for Frequent Updates:** Redux is often more optimized for components that subscribe to specific parts of the state, avoiding unnecessary re-renders that Context might cause with large context values.
    *   **Decoupling State Logic:** When you want to completely separate state management logic from your UI components.

70. **Q: What are some alternatives to Redux for global state management in React?**
    **A:**
    *   **Zustand:** A small, fast, and scalable state management solution using a simplified Flux-like pattern with hooks. Very easy to use.
    *   **Jotai:** An atomic state management library. State is built up from atoms (small pieces of state), and updates to one atom only re-render components subscribed to that atom.
    *   **Recoil:** An experimental state management library from Facebook, also based on atoms and selectors.
    *   **React Query / SWR:** Excellent for managing server state (API data, caching, synchronization). They can often replace the need for Redux for server data.
    *   **Valtio:** A proxy-based state management library, makes state mutable directly.
    *   **Context API + `useReducer`:** For simpler global state needs, this built-in combination can be sufficient.

71. **Q: What is a "selector" in the context of Redux or similar state management libraries?**
    **A:** A selector is a function that takes the global state (or a part of it) as an argument and returns some derived data.
    Benefits:
    *   **Decoupling:** Components don't need to know the exact shape of the state tree.
    *   **Memoization:** Selectors can be memoized (e.g., using `reselect` library with Redux) to avoid recomputing derived data if the relevant parts of the state haven't changed, improving performance.
    *   **Reusability:** The same selector can be used by multiple components.

72. **Q: What is `React.lazy` and `Suspense` used for?**
    **A:**
    *   **`React.lazy(importFunction)`:** A function that lets you render a dynamic import as a regular component. This enables "code splitting" – loading component code only when it's actually needed, rather than including it in the initial bundle. The `importFunction` must be a function that calls a dynamic `import()`.
    *   **`<Suspense fallback={...}>`:** A component that lets you specify a loading indicator (the `fallback` prop) if some components in the tree below it are not yet ready to render (e.g., because they are being lazy-loaded).
    ```jsx
    const OtherComponent = React.lazy(() => import('./OtherComponent'));

    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }
    ```
    `Suspense` can also be used with data fetching libraries that support it (e.g., Relay, or experimental React data fetching).

73. **Q: How does React handle forms? Explain controlled components in this context.**
    **A:** React can handle forms using either controlled or uncontrolled components.
    **Controlled Components:**
    1.  Each form input (e.g., `<input>`, `<textarea>`, `<select>`) has its `value` prop tied to a piece of React state.
    2.  An `onChange` event handler is attached to each input.
    3.  When the user types into the input, the `onChange` handler fires.
    4.  Inside the handler, `event.target.value` is used to get the new input value.
    5.  This value is then used to update the React state (e.g., via `setName(event.target.value)`).
    6.  Because the state updates, the component re-renders, and the input's `value` prop is updated to reflect the new state.
    This keeps the React state as the single source of truth for the form data.

74. **Q: Can you explain how you would handle form validation in React?**
    **A:**
    1.  **State for Errors:** Maintain state for error messages related to each form field.
    2.  **Validation Logic:** Implement validation functions (can be inline or separate utility functions).
    3.  **Trigger Validation:**
        *   **On Change:** Validate as the user types (good for instant feedback).
        *   **On Blur:** Validate when a field loses focus.
        *   **On Submit:** Perform final validation before submitting the form.
    4.  **Display Errors:** Conditionally render error messages next to form fields based on the error state.
    5.  **Disable Submit:** Optionally disable the submit button until the form is valid.
    **Example (Simple):**
    ```jsx
    function MyForm() {
      const [email, setEmail] = useState('');
      const [emailError, setEmailError] = useState('');

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.includes('@')) {
          setEmailError('Email must contain @');
        } else {
          setEmailError('');
        }
      };
      // ... handleSubmit ...
      return (
        <form>
          <input type="email" value={email} onChange={handleEmailChange} />
          {emailError && <p style={{color: 'red'}}>{emailError}</p>}
          <button type="submit" disabled={!!emailError}>Submit</button>
        </form>
      );
    }
    ```
    For complex forms, libraries like **Formik**, **React Hook Form**, or **Yup** (for schema validation) are highly recommended.

75. **Q: What are Higher-Order Components (HOCs)? What problem do they solve?**
    **A:** A Higher-Order Component is an advanced pattern in React for reusing component logic. An HOC is a function that takes a component as an argument and returns a new component that wraps the original component, providing it with additional props or behavior.
    `const EnhancedComponent = higherOrderComponent(WrappedComponent);`
    **Problem they solve:**
    *   Code reuse for cross-cutting concerns (e.g., logging, data fetching, authentication checks, adding styles/props).
    *   Avoids modifying the original component directly.
    **Downsides/Alternatives:**
    *   Can lead to "wrapper hell" (many nested components in DevTools).
    *   Prop name collisions can occur if not careful.
    *   Static composition, can be less flexible than Hooks or Render Props.
    Custom Hooks are now often preferred over HOCs for sharing stateful logic. Render Props are another alternative.

---

**VI. Styling & Performance (76-90)**

76. **Q: What are the different ways to style React components?**
    **A:**
    1.  **Inline Styles:** Pass a JavaScript object to the `style` attribute. Keys are camelCased CSS properties.
        ```jsx
        <div style={{ color: 'blue', fontSize: '16px' }}>Hello</div>
        ```
    2.  **CSS Stylesheets:** Import a regular CSS file (`.css`). Class names are global by default.
        ```css
        /* styles.css */
        .my-button { background-color: green; }
        ```
        ```jsx
        import './styles.css';
        <button className="my-button">Click</button>
        ```
    3.  **CSS Modules:** CSS files where class names are locally scoped by default (e.g., `styles.module.css`). `import styles from './styles.module.css'; <div className={styles.myClass}>`. Prevents class name collisions.
    4.  **CSS-in-JS Libraries:** Libraries like Styled Components, Emotion. Write CSS directly in your JavaScript files using tagged template literals or object styles. Offers dynamic styling, theming, and local scoping.
        ```jsx
        // Example with Styled Components
        import styled from 'styled-components';
        const Title = styled.h1` font-size: 1.5em; color: palevioletred; `;
        <Title>Hello World</Title>
        ```
    5.  **Utility-First CSS Frameworks:** Like Tailwind CSS. Apply pre-defined utility classes directly in your JSX.

77. **Q: What is `React.memo()`? How does it work?**
    **A:** `React.memo()` is a higher-order component that memoizes a functional component. If the component renders with the same props as its previous render, React will skip re-rendering the component and reuse the last rendered result.
    *   It performs a shallow comparison of props by default.
    *   You can provide a custom comparison function as a second argument if shallow comparison isn't sufficient: `React.memo(MyComponent, arePropsEqual)`.
    Used for performance optimization to prevent unnecessary re-renders of components whose output doesn't change if props don't change. Similar to `PureComponent` for class components.

78. **Q: What is `PureComponent`? How is it different from `Component`?**
    **A:** `React.PureComponent` is similar to `React.Component` but implements `shouldComponentUpdate()` with a shallow comparison of current props and state with next props and state. If they are shallowly equal, the component doesn't re-render.
    **Difference:** `React.Component` does not implement `shouldComponentUpdate()` by default, so it always re-renders when its parent re-renders or its own state changes (unless `shouldComponentUpdate` is manually implemented). `PureComponent` provides this shallow check automatically.
    Caution: Shallow comparison can miss changes in nested objects/arrays if their references don't change, leading to stale UI.

79. **Q: How can you optimize the performance of a React application?**
    **A:**
    *   **Use `React.memo`, `PureComponent`, `useMemo`, `useCallback`:** To prevent unnecessary re-renders and computations.
    *   **Keys for Lists:** Ensure list items have stable, unique keys.
    *   **Virtualization (Windowing):** For long lists or tables, render only the items currently visible in the viewport (e.g., using `react-window` or `react-virtualized`).
    *   **Code Splitting:** Use `React.lazy` and `Suspense` to load parts of your application on demand.
    *   **Bundle Size Optimization:** Minify code, use tree shaking, analyze bundle with tools like `webpack-bundle-analyzer`.
    *   **Debouncing and Throttling:** For event handlers that fire frequently.
    *   **Avoid Anonymous Functions in Props (if problematic):** An anonymous function `onClick={() => doSomething()}` creates a new function instance on every render, which can cause child components (if memoized) to re-render. Use `useCallback` or define handlers outside render if this becomes an issue.
    *   **Memoize Expensive Calculations:** Use `useMemo`.
    *   **Use Production Builds:** `NODE_ENV=production` enables React's optimizations.
    *   **React DevTools Profiler:** Identify performance bottlenecks.

80. **Q: What is tree shaking in the context of React and bundlers like Webpack?**
    **A:** Tree shaking is a dead code elimination technique used by JavaScript bundlers (like Webpack, Rollup). When you use ES6 modules (`import`/`export`), the bundler can statically analyze your code to determine which exports from your modules (and their dependencies) are actually being used. Unused code is then "shaken off" and not included in the final bundle, resulting in smaller bundle sizes.

81. **Q: What is the "key" prop primarily used for when rendering lists of elements?**
    **A:** The `key` prop is primarily used to help React identify and differentiate between items in a list, especially when the list items can change (add, remove, reorder). It allows React to efficiently update the DOM by tracking individual elements and preserving their state or avoiding unnecessary re-creations.

82. **Q: When rendering a list, why is using the array index as a key often problematic?**
    **A:** Using the array index as a `key` can be problematic if the order of list items can change, or if items can be inserted/deleted from the middle of the list.
    *   If items are reordered, React will see the `key` (index) as staying the same but the content changing. This can lead to incorrect component state being associated with the wrong item, or unnecessary re-rendering of items that simply moved.
    *   If an item is inserted at the beginning, all subsequent items will get new keys (their index changes), causing React to re-render all of them instead of just inserting one new item.
    It's safe to use the index as a key only if the list is static (never reorders, adds, or removes items except at the end). Otherwise, a unique, stable ID from your data should be used.

83. **Q: What are synthetic events in React?**
    **A:** SyntheticEvent is a cross-browser wrapper around the browser's native event system. React normalizes events so they have consistent properties across different browsers. These events are pooled for performance, meaning the event object is reused. You cannot access event properties asynchronously by default (e.g., in a `setTimeout`) because the event will have been nullified, unless you call `event.persist()`.

84. **Q: What is the difference between `event.target` and `event.currentTarget` in React event handlers?**
    **A:**
    *   `event.target`: Refers to the actual DOM element that *triggered* the event (e.g., if you click on a `<span>` inside a `<button>`, `event.target` is the `<span>`).
    *   `event.currentTarget`: Refers to the DOM element to which the event handler is *attached* (e.g., if the handler is on the `<button>`, `event.currentTarget` is the `<button>`, even if you clicked the inner `<span>`).
    This is the same behavior as in native DOM events.

85. **Q: How does React handle event delegation?**
    **A:** React implements its own event delegation system for performance. Instead of attaching event listeners to individual DOM elements, React attaches a single event listener (or a few) at the document root (or the React root node) for each event type. When an event fires, React's listener receives it, determines which component triggered it based on the event path, and then dispatches a SyntheticEvent to the appropriate component's event handler. This reduces memory usage and simplifies DOM management.

86. **Q: How would you conditionally apply a class name in React?**
    **A:**
    ```jsx
    function MyComponent({ isActive, isError }) {
      let classNames = 'base-class';
      if (isActive) {
        classNames += ' active-class'; // Or classNames = `${classNames} active-class`;
      }
      if (isError) {
        classNames += ' error-class';
      }

      // Using a library like 'classnames' or 'clsx' is common for more complex scenarios:
      // import clsx from 'clsx';
      // const dynamicClasses = clsx('base-class', {
      //   'active-class': isActive,
      //   'error-class': isError,
      // });

      return <div className={classNames}>Content</div>;
      // return <div className={dynamicClasses}>Content</div>;
    }
    ```
    Template literals can also be used:
    `<div className={`base-class ${isActive ? 'active-class' : ''} ${isError ? 'error-class' : ''}`}>Content</div>`

87. **Q: Can you use Web Components in a React application?**
    **A:** Yes, React and Web Components are designed to be interoperable. You can use Web Components in your React JSX just like regular HTML elements. You might need to handle passing data (props) and listening to events differently, as React's synthetic event system might not fully align with custom events from Web Components. Refs might be needed to interact with Web Component APIs imperatively.

88. **Q: What is `React.StrictMode`?**
    **A:** `<React.StrictMode>` is a tool for highlighting potential problems in an application. Like `<Fragment>`, it does not render any visible UI. It activates additional checks and warnings for its descendants.
    Strict mode currently helps with:
    *   Identifying components with unsafe lifecycle methods.
    *   Warning about legacy string ref API usage.
    *   Warning about deprecated findDOMNode usage.
    *   Detecting unexpected side effects (by double-invoking certain functions like constructors, render, and Hook bodies in development).
    *   Detecting legacy context API.
    It only runs in development mode; it does not impact the production build.

89. **Q: What is a "render prop" pattern?**
    **A:** The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function. The component with the render prop calls this function to get JSX to render, often passing some state or data as an argument to the function.
    ```jsx
    class MouseTracker extends React.Component {
      state = { x: 0, y: 0 };
      handleMouseMove = (event) => {
        this.setState({ x: event.clientX, y: event.clientY });
      };
      render() {
        return (
          <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)} {/* Calling the render prop */}
          </div>
        );
      }
    }

    function App() {
      return (
        <MouseTracker render={({ x, y }) => ( // Providing the render prop function
          <h1>The mouse position is ({x}, {y})</h1>
        )}/>
      );
    }
    ```
    Custom Hooks are often a simpler way to achieve similar code sharing for stateful logic.

90. **Q: What are Portals in React? When are they used?**
    **A:** Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    `ReactDOM.createPortal(child, container)`
    **When used?**
    *   Modals, dialogs, tooltips, popovers: These often need to appear on top of everything else and break out of the parent's CSS `overflow` or `z-index` stacking context. Portals allow you to render them at a higher level in the DOM tree (e.g., directly under `<body>`) while keeping them logically within the React component tree.
    Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way, including event bubbling (events will still bubble up to ancestors in the React tree, even if they are not ancestors in the DOM tree).

---

**VII. Testing & Advanced Concepts (91-100)**

91. **Q: What tools are commonly used for testing React applications?**
    **A:**
    *   **Jest:** A popular JavaScript testing framework developed by Facebook. Often used as a test runner, for assertions, and mocking.
    *   **React Testing Library (RTL):** A library for testing React components in a way that resembles how users interact with them. It encourages testing behavior rather than implementation details. Works well with Jest.
    *   **Enzyme:** (Older, less favored now) A JavaScript testing utility for React, created by Airbnb, that makes it easier to assert, manipulate, and traverse your React Components' output. Offers more ways to inspect component internals.
    *   **Cypress / Playwright / Selenium:** For end-to-end (E2E) testing, simulating full user scenarios in a browser.
    *   **Storybook:** For UI component development and testing in isolation.

92. **Q: What is the philosophy behind React Testing Library?**
    **A:** The core philosophy of React Testing Library (RTL) is: "The more your tests resemble the way your software is used, the more confidence they can give you."
    This means:
    *   **Focus on User Behavior:** Tests should interact with components as a user would (finding elements by text, label, role; clicking buttons; typing in forms).
    *   **Avoid Testing Implementation Details:** Don't test component state, private methods, or specific lifecycle events. This makes tests more resilient to refactoring.
    *   **Accessibility:** Queries often encourage finding elements by accessible attributes (like roles, labels), promoting better accessibility.

93. **Q: How would you test a React component that fetches data?**
    **A:**
    1.  **Mock the Fetch/API Call:** Use Jest's mocking capabilities (`jest.fn()`, `jest.mock()`) or libraries like `msw` (Mock Service Worker) to simulate the API response. You don't want your tests to make real network requests.
    2.  **Render the Component:** Use RTL's `render` function.
    3.  **Handle Asynchronous State:**
        *   Initially, assert that a loading state is displayed (if applicable).
        *   Use RTL's `waitFor` or `findBy*` queries to wait for the component to update after the mocked API call resolves.
    4.  **Assert the Output:** Check if the fetched data is rendered correctly or if error states are handled.
    ```jsx
    // MyComponent.js
    // function MyComponent() {
    //   const [data, setData] = useState(null);
    //   useEffect(() => { fetch('/api/data').then(res => res.json()).then(setData); }, []);
    //   if (!data) return <p>Loading...</p>;
    //   return <p>Data: {data.message}</p>;
    // }

    // MyComponent.test.js
    import { render, screen, waitFor } from '@testing-library/react';
    import MyComponent from './MyComponent';

    global.fetch = jest.fn(); // Mock global fetch

    test('fetches and displays data', async () => {
      fetch.mockResolvedValueOnce({
        json: async () => ({ message: 'Hello Test' }),
      });
      render(<MyComponent />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
      await waitFor(() => expect(screen.getByText('Data: Hello Test')).toBeInTheDocument());
      // Or: expect(await screen.findByText('Data: Hello Test')).toBeInTheDocument();
    });
    ```

94. **Q: What is Server-Side Rendering (SSR) in React? What are its benefits?**
    **A:** SSR is the process of rendering React components on the server into an HTML string, which is then sent to the client. The client-side JavaScript bundle then "hydrates" this HTML, attaching event listeners and making the page interactive.
    **Benefits:**
    *   **Better SEO:** Search engine crawlers can easily index the fully rendered HTML.
    *   **Faster Perceived Performance / First Contentful Paint (FCP):** Users see content quicker because the browser receives pre-rendered HTML.
    Frameworks like **Next.js** and **Remix** greatly simplify SSR with React.

95. **Q: What is Static Site Generation (SSG) with React?**
    **A:** SSG is a technique where HTML pages are generated at *build time*. Each page is pre-rendered with its content. When a user requests a page, a static HTML file is served directly, leading to very fast load times.
    Often used for blogs, documentation sites, portfolios, or any content that doesn't change frequently per user.
    Frameworks like **Next.js** and **Gatsby** are popular for SSG with React.

96. **Q: What is hydration in the context of SSR/SSG?**
    **A:** Hydration is the process by which client-side JavaScript (React) takes the static HTML rendered by the server (SSR) or generated at build time (SSG) and makes it interactive by attaching event listeners and initializing the React component tree in the browser. React expects the server-rendered HTML to match what it would render on the client for the initial state.

97. **Q: What are React Server Components (RSCs)? How do they differ from traditional React components?**
    **A:** React Server Components are a newer, experimental feature that allows components to run *exclusively on the server* (or even at build time).
    Differences:
    *   **Execution Environment:** RSCs run on the server, traditional components (Client Components) run in the browser.
    *   **Access to Server Resources:** RSCs can directly access server-side resources like databases, file systems, or internal APIs without needing to expose API endpoints.
    *   **No Client-Side JavaScript:** RSCs themselves do not send any JavaScript to the client, reducing bundle sizes. Interactivity is added via Client Components.
    *   **State & Interactivity:** RSCs cannot use state (`useState`) or lifecycle effects (`useEffect`) as they don't run in the browser. They are for rendering UI based on server data.
    *   **Composition:** Server Components can import and render Client Components, and vice-versa (with some rules).
    They are designed to work alongside Client Components, allowing for a hybrid approach to building applications. Frameworks like Next.js (App Router) are pioneering their use.

98. **Q: How can you improve accessibility (a11y) in React applications?**
    **A:**
    *   **Semantic HTML:** Use appropriate HTML5 elements (`<nav>`, `<article>`, `<button>`, etc.).
    *   **ARIA Attributes:** Use ARIA (Accessible Rich Internet Applications) attributes where necessary to provide additional semantics for assistive technologies (e.g., `aria-label`, `role`).
    *   **Keyboard Navigation:** Ensure all interactive elements are focusable and operable via keyboard.
    *   **Focus Management:** Programmatically manage focus when UI changes occur (e.g., opening modals).
    *   **Image `alt` Text:** Provide descriptive `alt` attributes for images.
    *   **Form Labels:** Ensure all form inputs have associated labels.
    *   **Color Contrast:** Use sufficient color contrast for text and UI elements.
    *   **Testing:** Use accessibility audit tools (e.g., Axe, Lighthouse) and manual testing with screen readers.
    *   **`eslint-plugin-jsx-a11y`:** A linting plugin to catch common accessibility issues in JSX.

99. **Q: What is "component composition" in React?**
    **A:** Component composition refers to building complex UIs by combining smaller, reusable components. This is a core principle in React.
    Ways to achieve composition:
    *   **Nesting Components:** A component can render other components in its JSX.
    *   **`props.children`:** A generic way to pass child elements or components to be rendered within a parent.
    *   **Passing Components as Props:** A component can accept other components as props and render them in specific "slots."
    ```jsx
    function SplitPane({ left, right }) {
      return (
        <div className="split-pane">
          <div className="left-pane">{left}</div>
          <div className="right-pane">{right}</div>
        </div>
      );
    }
    // Usage: <SplitPane left={<Contacts />} right={<Chat />} />
    ```
    Composition promotes reusability, maintainability, and separation of concerns.

100. **Q: If you were to start a new large-scale React project today, what key tools/libraries/patterns would you consider using and why?**
     **A:** This is subjective, but a good answer would demonstrate awareness of the modern ecosystem:
     *   **Build Tool:** **Vite** for its speed and developer experience (or Next.js if SSR/SSG is a primary requirement from the start).
     *   **Language:** **TypeScript** for static typing, improved maintainability, and catching errors early.
     *   **Component Structure:** **Functional Components with Hooks** as the default.
     *   **Routing:** **React Router v6** for client-side navigation.
     *   **State Management:**
         *   **Local State:** `useState`, `useReducer`.
         *   **Server Cache/Remote State:** **React Query** or **SWR** for managing API data, caching, optimistic updates.
         *   **Global UI State (if complex):** **Zustand** or **Jotai** for their simplicity and performance. Context API for simpler global values.
     *   **Styling:** **CSS Modules** for scoped CSS, or a CSS-in-JS library like **Styled Components/Emotion** if dynamic styling and theming are critical. **Tailwind CSS** if utility-first is preferred.
     *   **Forms:** **React Hook Form** for performance and ease of use, with **Yup** or **Zod** for schema validation.
     *   **Testing:** **Jest** as a test runner, **React Testing Library** for component testing, **Cypress/Playwright** for E2E.
     *   **Linting/Formatting:** **ESLint** and **Prettier** for code consistency.
     *   **Component Storybook:** For developing and documenting UI components in isolation.
     *   **Accessibility (a11y):** `eslint-plugin-jsx-a11y` and regular audits.
     *   **Framework (if needed):** **Next.js** or **Remix** if SSR, SSG, file-system routing, API routes, or a more opinionated structure is beneficial for the project's scale and requirements.
     The "why" for each choice should relate to developer experience, performance, scalability, maintainability, and team familiarity.

---

That's a hefty list! I hope it's very helpful for your interview preparation or general React knowledge.