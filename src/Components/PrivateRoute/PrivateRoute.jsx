import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivateRoute = ({children}) => {


    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loader){
            return <h3>Loading..............</h3>
    }


    if(!user?.email){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    }
    return  children
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;