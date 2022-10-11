import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blogs/Blog';
import About from './Components/Abouts/About';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
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
        }
        

      ]
    }
    

  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
      
    </div>
  );
}

export default App;
