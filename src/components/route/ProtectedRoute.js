import { useSelector } from "react-redux";
import { Navigate } from "react-router";


function ProtectedRoute({children}){
    const{isAuthenticated} = useSelector(state =>state.loginState)
    if(!isAuthenticated){
        return<Navigate to="/"/>
    }
    if(isAuthenticated){
        <Navigate to="/Home"/>
        return children
    }
}

export default ProtectedRoute;