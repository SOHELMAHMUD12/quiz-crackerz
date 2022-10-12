import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div>
            <h1 className='text-3xl'>What is the purpose of react-router?</h1>
            <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div>
            <h1 className='text-3xl'>How to use Context API?</h1>
            <p>You might think to yourself: "Well, I'm convinced. How do I implement Context API in my app?" First, make sure you need it. Sometimes people use shared state across nested components instead of just passing it as props. And if you do need it you should follow these very few steps:
            Create a folder under your app root named contexts (not required. just a convention)
            Create a file named Context.js, e.g. userContext.js</p>
            </div>
            <div>
            <h1 className='text-3xl'>How Use Refs to hooks?</h1>
            <p>Refs provide a way to access DOM nodes or React elements created in the render method.

            In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.
            
            There are a few good use cases for refs:

            1.Managing focus, text selection, or media playback.
            2.Triggering imperative animations.
            3.Integrating with third-party DOM libraries.</p>
            </div>
        </div>
    );
};

export default Blog;