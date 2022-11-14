import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRouteAdmin({ children }) {
    const authUser = useSelector(x => x.isadminAuth);
    console.log(authUser);
    if (!authUser) {
        return <Navigate to="/admin" />
    }
    return children;
}