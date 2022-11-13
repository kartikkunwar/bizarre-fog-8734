import React from 'react';
import DisplayInformation from '../../components/DisplayInformation';
import FooterAdmin from '../../components/FooterAdmin';
import NavBarAdmin from '../../components/NavBarAdmin';
import PreLoader from '../../components/PreLoader';
import SidePannalAdmin from '../../components/SidePannalAdmin';


const Dashboard = () => {
    return (
        <div className="wrapper">
            <NavBarAdmin/>
            <SidePannalAdmin/>
            <DisplayInformation/>
            <FooterAdmin/>
        </div>
    );
};

export default Dashboard;