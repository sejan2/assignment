


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
        <div className="row">

            <div className=" col-lg-6  col-md-6 ml-5">
                <img className="rounded-50" src={newSelect?.img} alt="" height="160" />
                <h4 style={{ color: "#3a4756" }} className="my-4">{newSelect?.name}</h4>
                <h6 className="text-muted px-4">{newSelect?.description.slice(0.90)}</h6>
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
            <div className=" col-lg-5 col-md-6 doctors mt-5">
                <img src={newSelect?.doctors} alt="" />
                <h5>{newSelect?.docs}</h5>
            </div>


            {/* <div className="detail-text">
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

            </div>*/}
        </div>
    );
};

export default ServiceDetails;