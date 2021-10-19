


import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import './serviceDAta.css'

const ServiceDetails = () => {
    const { services } = useServices();
    const { id } = useParams();
    const newSelect = services?.find((service) => service.id === id)
    console.log(newSelect)
    return (
        <div className="show-details my-5">

            <div className="detail-text">
                <img className="rounded-50" src={newSelect?.img} alt="" height="160" />
                <h4 style={{ color: "#3a4756" }} className="my-4">{newSelect?.name}</h4>
                <p className="text-muted px-4">{newSelect?.description}</p>
                <NavLink
                    style={{
                        background: "linear-gradient(75deg, #19D3AE, #0fcfec)"
                    }}
                    to={`/services/${id}`
                    }
                    className="btn w-60 me-1"
                >
                    Add to cart
                </NavLink>
            </div>
            <div className="doctors mb-5">
                <img src={newSelect?.doctors} alt="" />

            </div>
        </div>
    );
};

export default ServiceDetails;