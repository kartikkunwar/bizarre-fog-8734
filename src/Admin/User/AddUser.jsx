import React from 'react';
import FooterAdmin from '../../components/FooterAdmin';
import NavBarAdmin from '../../components/NavBarAdmin';
import SidePannalAdmin from '../../components/SidePannalAdmin';
import AddUserForm from './AddUserForm';

const AddUser = () => {
    return (
        <div className='wrapper'>
            <NavBarAdmin/>
            <SidePannalAdmin/>
            <AddUserForm/>
            <FooterAdmin/>            
        </div>
    );
};

export default AddUser;