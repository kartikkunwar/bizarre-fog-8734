import React from 'react';
import AddForm from './AddForm';
import NavBarAdmin from "../../components/NavBarAdmin"
import SidePannalAdmin from "../../components/SidePannalAdmin"
import FooterAdmin from '../../components/FooterAdmin';

const AddProduct = () => {

    return (
        <div className='wrapper'>
            <NavBarAdmin />
            <SidePannalAdmin />
            <AddForm />
            <FooterAdmin/>
        </div>
    );
};

export default AddProduct;