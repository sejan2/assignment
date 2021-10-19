
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
// import { Container, Row } from 'react-bootstrap';

import Service from '../Service/Service';
// import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices([]);

    return (
        <div>

            <Container className="py-5">

                <h2 className="text-center" style={{ color: "#3a4756" }}>Our services</h2>


                <p className="text-center text-muted my-2  fs-5">We help educate your patients on uninsured medical services and when they can expect to be charged</p>

                <Row className="d-flex justify-content-center mx-auto mt-5 pt-5">
                    {services?.map((service) => (<Service service={service} key={services.key}></Service>))}
                </Row>
            </Container>
        </div >
    );
};

export default Services;