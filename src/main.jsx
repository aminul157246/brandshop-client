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
        loader : () => fetch('http://localhost:3000/brand')
      },
      {
        path : '/brandDetails/:brandName', 
        element : <BrandDetails></BrandDetails>,
        loader : () => fetch('http://localhost:3000/brand')
      },
      {
        path : '/addProduct', 
        element : <AddProduct></AddProduct> ,
        // loader : () => fetch('http://localhost:3000/products')
        
      },
      {
        path : '/singleCarDetails/:id', 
        element : <CarDetails></CarDetails>,
        loader : ({params}) => fetch(`http://localhost:3000/product/brandName/${params.id}`)
        
      },




      {
        path : '/updateProduct', 
        element : <UpdateProduct></UpdateProduct>,
        
        
        
      },
      {
        path : '/myCart', 
        element : <MyCart></MyCart>
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
