import React from 'react';
import FooterAdmin from '../../components/FooterAdmin';
import NavBarAdmin from '../../components/NavBarAdmin';
import SidePannalAdmin from '../../components/SidePannalAdmin';
import EditForm from './EditForm';
import { useLocation} from "react-router-dom"

const EditProduct = () => {

    const location = useLocation()

    const data = location.state.elem
    return (
        <div className='wrapper'>
            <NavBarAdmin/>
            <SidePannalAdmin/>
            <EditForm titleprop={data.title} shortprop={data.short} categoryprop={data.category} genderprop={data.gender} priceprop={data.price} discountprop={data.discount} id={data.id} imageprop={data.imageList}/>
            <FooterAdmin/>
        </div>
    );
};

export default EditProduct;