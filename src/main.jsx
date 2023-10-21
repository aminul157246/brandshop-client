import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import AddProduct from './Components/AddProduct/AddProduct';
import MyCart from './Components/MyCart/MyCart';
import LoanCalculator from './Components/LoanCalculator/LoanCalculator';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PopularMakes from './Components/PopularMakes/PopularMakes';
import BrandDetails from './Components/BrandDetails/BrandDetails';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import CarDetails from './Components/CarDetails/CarDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/', 
        element : <Home></Home>,
        loader : () => fetch(' https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/brand')
      },
      {
        path : '/brandDetails/:brandName', 
        element : <BrandDetails></BrandDetails>,
        loader : () => fetch(' https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/brand')
      },
      {
        path : '/addProduct', 
        element :  <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        
      },
      {
        path : '/singleCarDetails/:id', 
        element : <CarDetails></CarDetails>,
        loader : ({params}) => fetch(` https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/product/brandName/${params.id}`)
        
      },




      {
        path : '/updateProduct/:id', 
        element : <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
        
        
        
      },
      {
        path : '/myCart', 
        element : <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path : '/specialOffer', 
        element : <PrivateRoute><PopularMakes></PopularMakes></PrivateRoute>
      },
      {
        path : '/loanCalculator', 
        element : <PrivateRoute><LoanCalculator></LoanCalculator></PrivateRoute>
      },

      {
        path : '/login', 
        element : <Login></Login>
      },
      {
        path : '/register', 
        element : <Register></Register>
      },
      
    ]
  },
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider  router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
