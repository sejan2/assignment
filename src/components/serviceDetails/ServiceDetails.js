import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ServiceDetails = () => {
    const [services] = useServices();
    console.log(services)
    const { id } = useParams();



    return (
        <div>

        </div>
    );
};

export default ServiceDetails;