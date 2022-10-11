import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blogs/Blog';
import About from './Components/Abouts/About';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
        path:'statistics', 
        element: <Statistics/>
        },

        {
        path: 'blog',
        element: <Blog/>
        },

        {
          path: 'about',
          element: <About/>
        },
        {path: "subject/:subjectID", element: <Quiz/>, loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.subjectID}`
          );
        },}
        

      ]
    }
    

  ])
  return (
    <div>
      <RouterProvider router ={router}></RouterProvider>
      
    </div>
  );
}

export default App;
