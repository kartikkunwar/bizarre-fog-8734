import React from 'react';
import FooterAdmin from '../../components/FooterAdmin';
import NavBarAdmin from '../../components/NavBarAdmin';
import SidePannalAdmin from '../../components/SidePannalAdmin';
import EditFormuser from './EditFormuser';
import { useLocation} from "react-router-dom"
const EditUser = () => {

    const location = useLocation()

    const data = location.state.elem

    return (
        <div>
            <NavBarAdmin/>
            <SidePannalAdmin/>
            <EditFormuser nameprop={data.name} emailprop={data.email} idprop={data.id}/>
            <FooterAdmin/>
        </div>
    );
};

export default EditUser;