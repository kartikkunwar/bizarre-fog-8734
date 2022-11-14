import React from 'react';
import NavBarAdmin from "../../components/NavBarAdmin"
import SidePannalAdmin from "../../components/SidePannalAdmin"
import FooterAdmin from '../../components/FooterAdmin';
import DisplayForm from './DisplayForm';

const Updateuser = () => {
    return (
        <div>
            <NavBarAdmin />
            <SidePannalAdmin />
            <DisplayForm/>
            {/* <FooterAdmin /> */}
        </div>
    );
};

export default Updateuser;