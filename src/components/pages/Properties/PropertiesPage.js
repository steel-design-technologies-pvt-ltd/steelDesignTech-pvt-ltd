import React from 'react';
import PageBanner from '../../UI/PageBanner/PageBanner';
import PopularPackages from '../../../containers/PopularPackages/PopularPackages';
import CompanyServices from '../../../containers/CompanyServices/CompanyServices';

let PropertiesPage = (props) => {
    return (
        <div>
            <PageBanner />
            <PopularPackages />
            <CompanyServices />
        </div>
    );
}
export default PropertiesPage;