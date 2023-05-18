import { Suspense, lazy, useEffect, useState } from 'react';
import socketIO from 'socket.io-client'
import './App.css';
// import { Chat } from './pages/Chat';
import { Home } from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const Chat = lazy(() => import('./pages/Chat'))

// if (localStorage.getItem('token')) {
//   console.log("ТОКЕН ЕСТЬ")
// }

const socket = socketIO.connect('http://localhost:5000')

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: (
      <Suspense fallback={<div>LOADINGGGGGGG</div>}>
        <Chat socket={socket} />
      </Suspense>
    ),
  },
]);

export const App = () => {





  return (

    <div className="App">
      <RouterProvider router={router} />
    </div>


  );
}


