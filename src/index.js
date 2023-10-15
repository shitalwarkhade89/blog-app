import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from  'react-router-dom';
import Home from './views/Home/Home'
import Post from './views/Posts/Posts'
import readPost from './views/ReadPost/ReadPost'
import Posts from './views/Posts/Posts';
import ReadPost from './views/ReadPost/ReadPost';



const root =ReactDOM.createRoot(document.getElementById ('root'))

const router =createBrowserRouter([
    {
        path:'/',
        element:<Home/>

    },
    {
       path:'/posts',
       element:<Posts/> ,
    },
    {
        path:'/post/read/:id',
        element:<ReadPost/>,
    },
    {
        path:'*',
        element:<h1> 404 Page Not Found</h1>
    }

])

root.render( <RouterProvider router={router} />);
