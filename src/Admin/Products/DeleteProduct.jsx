import React from 'react';
import FooterAdmin from '../../components/FooterAdmin';
import NavBarAdmin from '../../components/NavBarAdmin';
import SidePannalAdmin from '../../components/SidePannalAdmin';
import AddForm from './AddForm';
import DeleteForm from './DeleteForm';

const DeleteProduct = () => {
    return (
        <div>
            <NavBarAdmin />
            <SidePannalAdmin />
            <DeleteForm />
            {/* <FooterAdmin/> */}
        </div>
    );
};

export default DeleteProduct;