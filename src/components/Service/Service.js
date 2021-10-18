import React from 'react';
import { Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, description, name, id } = service;
    return (

        <div className="col-md-4 mb-5 text-center ">
            <img className="rounded-50" src={img} alt="" height="80" />
            <h4 style={{ color: "#3a4756" }} className="my-4">{name}</h4>
            <p className="text-muted px-4">{description}</p>
            <Button
                as={Link}
                size="sm"
                style={{ background: "linear-gradient(75deg, #19D3AE, #0fcfec)", fontWeight: "600" }}
                className="p-3 shadow-none border-0 text-uppercase"
                to={`services/${id}`}>
                View details
            </Button>
        </div>


    );
};

export default Service;